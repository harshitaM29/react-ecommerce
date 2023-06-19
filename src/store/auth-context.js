import React from "react";

const AuthContext = React.createContext({
    tokenId: '',
    emailId:'',
    isLoggedIn:false,
    onLogin:(token) => {},
    onLogout:() => {}
});

export default AuthContext;

