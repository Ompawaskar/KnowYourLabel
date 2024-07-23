import React, { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../../config/firebase.config';
import axios from 'axios';

export default function Auth() {
  const baseUrl = "http://localhost:3000/";
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const validateUser = async (token) => {
    try {
      const res = await axios.get(`${baseUrl}api/user/signup`, {
        headers: {
          Authorization:  token,
        },
      });
      return res.data;
    } catch (error) {
      console.error("Error during user validation:", error);
      throw error;
    }
  };

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (userCreds) => {
      if (userCreds) {
        try {
          const token = await userCreds.getIdToken();
          window.localStorage.setItem("auth", "true");

          const data = await validateUser(token);
       
          setUser(data);
      
        } catch (error) {
          console.error("Error during token retrieval or user validation:", error);
          setAuth(false);
        }
      } else {
        setAuth(false);
        setUser(null);
        window.localStorage.setItem("auth", "false");
      }
    });

    return () => unsubscribe(); 
  }, [firebaseAuth]);

  const signUpWithGoogle = async () => {
    try {
      const userCreds = await signInWithPopup(firebaseAuth, provider);
      if (userCreds) {
        setAuth(true);
        window.localStorage.setItem("auth", 'true');
      }
    } catch (error) {
      console.error("Error during sign-in with Google:", error);
    }
  };

  return (
    <div>
      {auth ? (
        <>
          <h1>Hello {user?.name}</h1>
          <img src={user?.imageUrl} alt="User Photo" />
        </>
      ) : (
        <button onClick={signUpWithGoogle}>Sign Up</button>
      )}
    </div>
  );
}