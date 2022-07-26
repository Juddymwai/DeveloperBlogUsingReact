import React, {useState, useEffect}from "react";


function HomePage({}){
    const [blogPost, setBlogPost]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:2000/posts')
        .then((r)=> r.json())
        .then((data)=> setBlogPost(data))
    }, [])

    
    
    

    return (
     <div>
        <h1>Blogs</h1>
        {blogPost.map((post) => {
            return (
                <div style={{marginBottom: 50+"px"}}>
                    <h2>{post.Title}</h2>
                    <div>{post.Content} </div>
                     <h3>By: {post.Author}</h3>
                </div>
            )
        })}
     </div>

    )
}

export default HomePage;