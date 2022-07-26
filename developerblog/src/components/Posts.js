import React from "React"


function Posts(){
    return (
        <form className='newPost'>
            <label>
                Title:
                <input type="text" title="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            </label>
            <label>
            Title:
                <input type="text" title="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            </label>

        </form>
    )
}