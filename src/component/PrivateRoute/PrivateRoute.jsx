import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <span><progress className="progress w-56"></progress></span> 
    }
    if(user){
        return children;
    }
   return <Navigate state={location.form} to='/login'></Navigate>
};

export default PrivateRoute;