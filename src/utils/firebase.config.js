
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAqzKNhZk2Kwi6g0QsmEB8L9OYhxvNTQ7c",
    authDomain: "coinmamba-a3303.firebaseapp.com",
    projectId: "coinmamba-a3303",
    storageBucket: "coinmamba-a3303.appspot.com",
    messagingSenderId: "825741695001",
    appId: "1:825741695001:web:4aafd6b7854790e92ef288"
  };
  

  const app = initializeApp(firebaseConfig);
  export const auth= getAuth(app)
  export const Provider = new GoogleAuthProvider()