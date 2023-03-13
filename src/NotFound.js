import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
        <h2> Soory not found </h2>
        <p>page delete or does not exit</p>
        <Link to="/"> Back  </Link>
        </div>
     );
}
 
export default NotFound;