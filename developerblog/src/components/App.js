import React, {useEffect, useState} from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom"
// import Posts from "./Posts";



function App(){
    // const [post, setPost]=useState([])

    useEffect(()=>{
        fetch('http://localhost:2000/posts')
        .then((r)=> r.json())
        .then((data)=> console.log(data))
    })
    return(
        <div>
           
            <Navbar/>
            <HomePage/>
            <Login/>
            <Routes>
                <Route exact path='/' >{HomePage}</Route>
                <Route  exact path='/posts'>{Posts}</Route>
                <Route exact path='/login'>{Login}</Route>
                
            </Routes>


            
        </div>

    )
}

export default App;