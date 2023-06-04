
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: "coinmamba-a3303.appspot.com",
    messagingSenderId: "825741695001",
    appId: "1:825741695001:web:4aafd6b7854790e92ef288"
  };
  const app = initializeApp(firebaseConfig);
  export const auth= getAuth(app)
  export const Provider = new GoogleAuthProvider()


  
  
