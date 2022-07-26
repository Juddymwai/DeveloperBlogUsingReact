import React, {useEffect} from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Posts from "./Posts";



function App(){
    // const [post, setPost]=useState([])

    useEffect(()=>{
        fetch('http://localhost:2000/posts')
        .then((r)=> r.json())
        .then((data)=> console.log(data))
    })
    return(
        <Router>

            <div>

                <Navbar/>

            </div>
        
            <Routes>

                <Route exact path='/' element={<HomePage/> }></Route>
                {/* <Route  exact path='/posts'>{Posts}</Route> */}
                <Route exact path='/login' element={<Login/> }></Route>
                
            </Routes>      
        </Router>



            
        

    )
}

export default App;