import { Children, createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  jwtToken: null,
  login: () => {},
  logout: () => {},
  user: ()=>{},
});

export const AuthProvider =({children})=>{
    const [isAuthenticated, setIsAuthenticated]=useState(false);
    const [jwtToken,setJwtToken]=useState(null);
    const [userRole,setUserRole]=useState(null);

    const user=(role)=>{
        setUserRole(role);
        localStorage.setItem('user',role);
    }

    const login=(token)=>{
        setIsAuthenticated(true);
        setJwtToken(token);
        localStorage.setItem('token',token);
    }

    const logout=()=>{
        setIsAuthenticated(false);
        setJwtToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    useEffect(()=>{
        const token=localStorage.getItem('token');
        const user=localStorage.getItem('user');
        if(token & user){
            setIsAuthenticated(true);
            setJwtToken(token); 
            setUserRole(user);
        }
    },[jwtToken]);


    return(
        <AuthContext.Provider value={{isAuthenticated,jwtToken,login,logout,user,userRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}