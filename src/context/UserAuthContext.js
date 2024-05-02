import {createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         GoogleAuthProvider,
         signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";



const userAuthContext = createContext();


export function UserAuthContextProvider ({children}) {

    const [user, setUser] = useState("Kot");

    function signUp (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut () {
        return signOut(auth);
    }

    function googleSignIn () {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    

    useEffect(() => {
          /*const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            return () => { unsubscribe(); } */

        onAuthStateChanged(auth, (currentuser) => {
                setUser(currentuser);
                console.dir(user);
        }) 
    
    }, [])


    return (
        <userAuthContext.Provider value={{signUp, logOut, login,googleSignIn, user}}>
        {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth () {
    return useContext(userAuthContext);
}


