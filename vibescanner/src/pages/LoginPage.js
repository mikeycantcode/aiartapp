import React, { useState } from 'react';
import Login from '../components/login/Login'
const LoginPage = () => {
    //temp storage for the token returned from login component
    const [token, setToken] = useState();
    //check is token exists
    if (!token) {
        return <Login setToken={setToken} />
    }
}

export default LoginPage;
