import React, {useState, useEffect}from "react";
import Mojo from "./Mojo";
import NewPostForm from "./NewPostForm"


function HomePage(){
    const [blogPost, setBlogPost]=useState([]);
    const [newBlogPost, setNewBlogPost]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/posts')
        .then((r)=> r.json())
        .then((data)=> setBlogPost(data))
    }, [])

    function handleAddPost(newData){
        setBlogPost([...blogPost, newData])

        console.log(newData)
    }
    
    

    return (
     <div>
        <h1>Blogs </h1>
        {blogPost.map((post) => {
            return (
                <div style={{marginBottom: 50+"px"}}>
                    <h2>{post.Title}</h2>
                    <div>{post.Content} </div>
                     <h3>By: {post.Author}</h3>
                </div>
            )
        })}
        <Mojo onHandleAddPost={handleAddPost}/>
        
     </div>

    )
}

export default HomePage;