import React from "react";

import {NavLink} from "react-router-dom"


function Navbar(){
    return (
        <div>
            <li><NavLink to="/" exact>HomePage</NavLink></li>
            <li><NavLink to="/posts" exact>Posts</NavLink></li>
            <li><NavLink to="/login" exact>Login</NavLink></li>
            

        </div>

    )
}

export default Navbar;