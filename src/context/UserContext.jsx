import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}){
    const [userDetails,setUserDetails]=useState({})
    const [userLogin,setUserLogin]=useState(false);

    return(
        <UserContext.Provider value={{userDetails,setUserDetails,userLogin,setUserLogin}}>
          {children}
        </UserContext.Provider>
    )
    
}