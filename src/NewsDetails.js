// import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const NewsDetails = () => {
    const {id}=useParams();

    const {data:news,error,isPending} = useFetch('http://localhost:8000/updatenews/' + id);
  const history =useHistory();
    const handleClick=()=>{
fetch('http://localhost:8000/updatenews/' + news.id,{
    method:'DELETE'
  }).then(()=>{
history.push('/');
  })

  }
    return ( 
        <div className="blog-details">
        {isPending && <div> Loading ,,,</div>}
        {error && <div>{error} </div>}
        {news && (
            <article >
             <h2> {news.title}</h2> 
            <p> author by {news.author}</p>
            <div>{news.body}</div>
            <button onClick={handleClick}>Delete</button>
            </article>
        )}
        </div>
     );
}
 
export default NewsDetails;