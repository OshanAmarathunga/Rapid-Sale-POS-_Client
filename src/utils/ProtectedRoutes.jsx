import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"

const ProtectedRoutes=()=>{
    const {isAutenticated}=useAuth();
    if(isAutenticated){
        return(<Outlet/>)
    }else{
        return(
            <Navigate to="/login"/>
        )
    }
}

export default ProtectedRoutes;