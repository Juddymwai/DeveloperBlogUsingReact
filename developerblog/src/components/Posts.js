import React from "React"


function Posts(){
    return (
        <form className='newPost'>
            <label>
                Title:
                <input type="text" title="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            </label>
            <label>
            Content:
                <input type="text" content="content" value={content} onChange={(e)=>setContent(e.target.value)}/>

            </label>

        </form>
    )
}
export default Posts