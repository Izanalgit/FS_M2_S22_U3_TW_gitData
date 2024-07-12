import { useDispatch } from 'react-redux';
import { getUser , setRepos } from '../redux/usersSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function GetUser() {
  const dispatch = useDispatch();
  
  const [inputName, setInputName] = useState("");
  const [userAcount, setUserAcount] = useState("");

  const handleSubmit = () => {
    if(inputName) {
        setUserAcount(inputName)
        setInputName("");
    }
  }

  useEffect(()=>{
    const fetchUser = async () => {
        const url = `https://api.github.com/users/${userAcount}`

        const fetchRepos = async (userRepos) => {

            try {
                const response = await axios.get(userRepos);
    
                const result = response.data;
    
                if(result) dispatch(setRepos(result));
    
            } catch (error) {
                console.error(error);
            }
        }

        try {
            const response = await axios.get(url);

            const result = response.data;

            if(result) {
                dispatch(getUser(result))
                fetchRepos(result.repos_url);
            };

        } catch (error) {
            console.error(error);
            alert('Usuario no encontrado.');
        }
    }

    if(userAcount) fetchUser();

  },[userAcount])

  return (
    <div>
        <input
            name='gitUser'
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleSubmit}>BUSCAR</button>
    </div>
  );
}