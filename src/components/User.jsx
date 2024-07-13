import { useSelector } from 'react-redux';

export function User() {

    const user = useSelector((state) => state.users.user);

    return (
        <>
            {user.name && 
                <div className='userCard'>
                    <img src={user.image} alt="avatar"/>
                    <h2>Cuenta: {user.name}</h2>
                    <ul>
                        <li>Nombre: 
                            {user.userName && user.userName}
                            {!user.userName && <> No definido </>}
                        </li>
                        <li>Seguidores : {user.followers}</li>
                        <li>Repositorios
                            <ul className='reposList'>
                                {user.repos.map((repo , indx)=><li key={indx}>{repo}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
}