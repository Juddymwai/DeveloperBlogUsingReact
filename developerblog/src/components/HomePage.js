import React, {useState, useEffect}from "react";
import NewPostForm from "./NewPostForm"


function HomePage(){
    const [blogPost, setBlogPost]=useState([]);
    // const [newBlogPost, setNewBlogPost]=UseState()

    useEffect(()=>{
        fetch('http://localhost:2000/posts')
        .then((r)=> r.json())
        .then((data)=> setBlogPost(data))
    }, [])

    function handleAddItem(newData){
        setBlogPost([...blogPost, newData])
        console.log(blogPost)
    }
    
    

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
        <NewPostForm onAddItem={handleAddItem}/>
        
     </div>

    )
}

export default HomePage;