// import React,{useState} from "React"


// function NewPostForm({onAddItem}){
//     // const [newPost, setNewPost]=useState('')
//     const [title, setTitle]=useState('')
//     const [content, setContent]=useState('')
//     const [author, setAuthor]=useState('')
  
//     function handleSubmit(e){
//         e.preventDefault()

//         const newObj ={
//             "Title":"Title",
//             "Content":"Content",
//             "Author":"Author"
//         }
//         fetch('http://localhost:2000/posts',{
//             method:"POST",
//             headers:{'Context-Type':"application/json"},
//             body: JSON.stringify(newObj),


//         })
//         .then((response)=> response.json())
//         .then ((newData)=> onAddItem(newData))

//     }


//     return (
        
        
//         <div>
//             <h1>Posts</h1>
        
//             <form className='newPost' onSubmit={handleSubmit}>
//                 <label>
//                     Title:
//                     <input type="text" title="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

//                 </label>
//                 <label>
//                 Content:
//                     <input type="text" content="content" value={content} onChange={(e)=>setContent(e.target.value)}/>

//                 </label>
//                 <label>
//                 Author:
//                     <input type="text" author="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
//                 </label>
//                 <button type="submit">Submit New Post</button>
           

//             </form>  
//         </div>
//     ) 
// }
// export default NewPostForm;