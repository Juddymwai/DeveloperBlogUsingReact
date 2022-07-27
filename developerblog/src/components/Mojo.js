import React, {useState} from "react";

export default function Mojo({onHandleAddPost}){
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const [author, setAuthor]=useState('')

        function handleSubmit(e){
        e.preventDefault()

        const newObj ={
            "Title":title,
            "Content":content,
            "Author": author
        }
        fetch('http://localhost:4000/posts',{
            method:"POST",
            headers:{'Context-Type':"application/json"},
            body: JSON.stringify(newObj),


        })
        .then((response)=> response.json())
        .then ((newData)=> onHandleAddPost(newData))

    }

    return(
        <div>
            <h1>Posts</h1>
            <form className='newPost' onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" title="title"  onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div>
                    <label>Content: </label>
                    <input type="text" content="content" onChange={(e)=>setContent(e.target.value)}/>
                </div>

                <div>
                     <label>Author: </label>

                    <input type="text" author="author"  onChange={(e)=>setAuthor(e.target.value)}/>
                </div>
               
                <button type="submit">Submit New Post</button>
           

            </form> 
        </div>
    )
}