import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <nav class=" bg-slate-800 shadow-lg rounded-xl">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-end">
                    <div class="flex space-x-7">
                        <div>
                            <a class="flex items-center py-4 px-2">
                                <span class="text-stone-300 text-lg font-bold">vibegraph.app</span>
                            </a>
                        </div>
                        <div class="hidden md:flex items-center space-x-1">
                            <a class="px-10 text-stone-400">
                                <Link to="/">home</Link>
                            </a>
                            <a class="px-10 text-stone-400">
                                <Link to="/myVibeGraph">my vibegraph</Link>
                            </a>
                            <a class="px-10 text-stone-400">
                                <Link to="/about">about</Link>
                            </a>
                            <a class=" text-slate-900 rounded-lg
            bg-stone-400
            hover:bg-stone-300
            py-2
            px-5
            text-white
            text-sm
            w-70
            login-button">
                                <Link to="/loginPage">log in with tiktok</Link>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </nav>

    );
}
export default navbar;