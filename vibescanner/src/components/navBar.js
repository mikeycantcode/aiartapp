import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">home.</Link>
            </li>
            <li>
                <Link to="/myVibeGraph">my vibegraph.</Link>
            </li>
            <li>
                <Link to="/about">about.</Link>
            </li>
        </div>
    );
}
export default navbar;