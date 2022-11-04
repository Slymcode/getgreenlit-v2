import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { setSessionCookie, getSessionCookie, unsetSessionCookie } from '../networking/session';

import { authService } from '../auth/authService'

const base_url = process.env.REACT_APP_BASE_URL;

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
const { authUser, authLogout } = authService()


const getAuthStatus = () => {
 const userObj = getSessionCookie();
   if(userObj){
      return userObj.status;
   }
   return false;
}

const getCurrentUserAuth = () =>{
  const userObj = getSessionCookie();
   if(userObj){
    console.log('45555', userObj.userId)
      return {
        userId: userObj.userId,
        sessionToken: userObj.userToken,
      }
   }
   return {userId: null, username: null, sessionToken: null, isAdmin: null};
}

const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus);

const [user, setUser] = useState(getCurrentUserAuth);

const createUser = async (address, email, password) => {
    const formDate = new FormData();
    formDate.append('address', address);
    formDate.append('email', email);
    formDate.append('password', password);
  return await axios.post(`${base_url}/api/users/create`, formDate);
}

const authenticate = async () => {
    await authUser().then(response => {
        if(response.status){           
           createUser(response.address, 'mcjerry73@gmail.com', 'spiderman')
           .then(rs => {
            if(rs.data.status){
                setIsAuthenticated(true); 
                setSessionCookie({
                        userId: rs.data.userId,
                        userToken: rs.data.userToken,
                        status: rs.data.status
              });
              setUser(prevState => ({ ...prevState, 'userId': rs.data.userId, 'sessionToken': rs.data.userToken }));
            }else{
                // disconnect wallet and send approppraite error message
            }
        }).catch(error => (
            console.log(error)
        )) 
        }
  });  
}

const logout = async ()  => {
    await authLogout();
    setIsAuthenticated(false); 
    unsetSessionCookie();
}
  return (
    <AppContext.Provider value={{user, authenticate, isAuthenticated, logout}}>
        {children}
    </AppContext.Provider>
  )
}