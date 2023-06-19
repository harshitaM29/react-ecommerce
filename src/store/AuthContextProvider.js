import { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = props => {

    const token = localStorage.getItem("token")
    const email= localStorage.getItem("emailId")
   
    
    const [tokenId, setToken] = useState(token);
    const [emailId, setEmailId] = useState(email)
    const isUserLoggedIn = !!tokenId;
    const loginHandler = (data) => {
      
        setToken(data.idToken);
        setEmailId(data.email);
        localStorage.setItem("token",data.idToken)
        localStorage.setItem("emailId",data.email)

   
    }
  

    const logoutHandler = () => {
        setToken(null);
        setEmailId(null)
        localStorage.removeItem("token")
        localStorage.removeItem("emailId")
       
     
    }

    const authContext = {
        tokenId:tokenId,
        emailId:emailId,
        isLoggedIn:isUserLoggedIn,
        onLogin:loginHandler,
        onLogout:logoutHandler
    }
  
    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContextProvider;

