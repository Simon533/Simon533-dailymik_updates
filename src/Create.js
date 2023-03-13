import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('simon');
    const [isPending,setIsPending]=useState(false)
    const history=useHistory();

    const handleSubmit= (e) =>{
        e.preventDefault();
        const news ={title,author,body} ///object ccreated 
        setIsPending(true)
        fetch('http://localhost:8000/updatenews',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(news)
        }).then(() =>{
            console.log('news posted');
            setIsPending(false);
            history.push('/');
        })
    }
       

    
    return ( 
        <div className="create">
            <h2> Add News  here </h2> 
            <form onSubmit={handleSubmit}>
            <label>News heading</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <label>The body area</label>
            <textarea
             required
             value={body}
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>
            <label>
                The author:
            </label>
            <select 
             value={author}
                onChange={(e)=>setAuthor(e.target.value)} >
                <option value="simon">Simon</option>
                <option value="james">Njuguna</option>
                <option value="agnes">Agnes</option>
               
            </select>
           {!isPending &&<button>Add news </button>}
           {isPending &&<button disabled>posting news,,,, </button>}
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
            </form>
        </div>
     );

    }
 
export default Create;
