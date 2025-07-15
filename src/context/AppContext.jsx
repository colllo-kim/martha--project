
import React, {  createContext,  useEffect,  useState } from 'react'

export  const AppContext = createContext();

const  AppContextProvider = (props)  => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(currentUser))
  },[currentUser])


   //register function
   const register = () =>{

   }

   //login function
   const login = () =>{
     
   }

   const logOut = () =>{
    setCurrentUser(null);

   }

   

   
 
   const value = {
    //variables

      
      currentUser,
      setCurrentUser,
  
      //functions
      
      register,
      logOut,
      login,
  
   }
  
  return (
    <AppContext.Provider value={value}>
    {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;