import { useDispatch } from 'react-redux';
import { getUser , setRepos} from '../redux/usersSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {fetchRepos} from '../tools/fetchRepos'


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

        try {
            const response = await axios.get(url);

            const result = response.data;

            if(result) {
                dispatch(getUser(result));

                const repos = await fetchRepos(result.repos_url)
                dispatch(setRepos(repos));
            };

        } catch (error) {
            console.error(error);
            alert('Usuario no encontrado.');
        }
    }

    if(userAcount) fetchUser();

  },[userAcount])

  return (
    <div className='inputUser'>
        <input
            name='gitUser'
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
        />
        <button className="buttonUser" onClick={handleSubmit}>BUSCAR</button>
    </div>
  );
}