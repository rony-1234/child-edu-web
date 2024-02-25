import React, {  useEffect, useState } from 'react';

import app from '../../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import Proptypes from 'prop-types';
export const Authcontext = createContext(null)
const auth = getAuth(app)
const googlProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Google Sign In

    const googleSignIn = () =>{
        setLoading(true)
        signInWithPopup(auth,googlProvider)
    }

        // register 
        const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email,password)
        }
        

        // login 
        const signIn = (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }
       
        // logOut 
        const logOut = () =>{
            return signOut(auth)
        }

      


           useEffect(() =>{
            const unSubcribe = onAuthStateChanged(auth,(user)=>{
                setLoading(false)
                setUser(user)
            });
            return () =>{
                unSubcribe()
            };
          },[])

          const authInfo = {
            googleSignIn,
            createUser,
            signIn,
            logOut,
            user,
            loading

        };
        return (
            <div>
                <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
            </div>
        );
        
    }
   


    AuthProvider.proptypes={
    children:Proptypes.node
}
export default AuthProvider;