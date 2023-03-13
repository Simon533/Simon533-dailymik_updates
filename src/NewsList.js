import { Link } from "react-router-dom";

const NewsList = ({title,updatenews}) => {
    // const updatenews  =props.updatenews;
    // const title =props.title;
    // const handleDelete=props.handleDelete;
 
    return (  
        <div className="blog-list">
         <h4>{title}</h4>
            {updatenews.map((news)=>(
            <div className="blogs-preview" key={news.id}>
            <Link to={'/updatenews/${news.id}'}>
            <h3>{news.title} </h3>
            <p> author{news.author}</p> 
            </Link>
            </div>
            
            ))}
        </div>
    );
}
 
export default NewsList;