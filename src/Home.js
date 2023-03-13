import  {useState,useEffect} from 'react';
import NewsList from './NewsList';
import useFetch from './useFetch';

const Home = () => {
    const {data:updatenews,isPending,error} =useFetch('http://localhost:8000/updatenews');
    return ( 
        <div className="home">
            <h1> Home </h1>
            { error && <div>{error} </div>}
            {isPending && <div>Loading------</div>}
            {updatenews && <NewsList updatenews={updatenews} title="Helow react" />}
            

       </div>
     );
     }

 
export default Home;
