import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
        
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;