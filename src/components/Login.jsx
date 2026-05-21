import React from 'react'
import { useContext, useState } from 'react'
import { AuthDispatchContext } from '../context/AuthContext'

function Login() {

    const [username, setUsername] = useState("");

    const dispatch = useContext(
        AuthDispatchContext
    );
    const handleLogin = () => {
        dispatch({
            type: "LOGIN",
            payload: username,
        });
    };
  return (
    <div className='login'>
        <h1>Expense Traker</h1>
        <input type="text"
        placeholder='enter username'
        value={username}
        onChange={(e) => 
            setUsername(e.target.value)
        } />

        <button onClick={handleLogin}>Login</button>


    </div>
  );
}

export default Login