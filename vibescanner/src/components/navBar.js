import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <nav class=" bg-slate-100 shadow-lg rounded-xl">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-center">
                    <div class="flex space-x-7">
                        <div>
                            <a class="flex items-left py-4 px-2">
                                <span class="text-slate-800 text-lg font-bold">aiartist.app</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-1">
                            <li class="px-10 text-slate-800">
                                <Link to="/">home</Link>
                            </li>
                            <li class="px-10 text-slate-800">
                                <Link to="/about">about</Link>
                            </li>
                            <a class=" text-slate-900 rounded-lg
            bg-stone-400
            hover:bg-stone-300
            py-2
            px-5
            text-white
            text-sm
            w-70
            login-button">
                                <Link to="/loginPage">Log in with google</Link>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </nav>

    );
}
export default navbar;


