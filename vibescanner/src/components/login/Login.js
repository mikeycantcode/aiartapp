import React, { useState } from 'react';
import PropTypes from 'prop-types';

/*
function that takes the credentals passed in by the submit handler
the object is passed in like {username, password}
@params the object
@return an oauth token from tiktok or something else whatever u want but it has to be some kind of auth token from tiktok
*/
async function loginUser(credentials) {

}

//the login 
export default function Login({ setToken }) {
    //where the username and the password are stored
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    /* 
    when the submit button is pressed this submit handler is called
    imma be real i have no idea what the FUCK prevent default is 
    anways waits for the loginUser function to return tiktok api token
    and then sets the token into the memeory by calling set token
    Currently does nothing bc loginUser does not exist
    */
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }


    //front facing part of the form
    return (
        <div class="relative mx-auto mt-6 w-full max-w-lg">
            <form id="terminal" class="bg-slate-200 border-2 border-gray-900 shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Tiktok Username
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="borrower" type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}>
                    </input>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="amountToLend" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}>
                    </input>
                </div>
                <div class="flex items-center justify-center">
                    <button
                        class="bg-gradient-to-b from-slate-500 to-slate-800 hover:text-slate-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit">
                        Log In
                    </button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                we do not store your login data. it is only saved locally (on your device).
            </p>
        </div>
    )
}

//storage for the token that is returned
//idk wtf this part is but i saw it on the internet when i was looking at prop types
Login.propTypes = {
    //setToken: PropTypes.func.isRequired
}