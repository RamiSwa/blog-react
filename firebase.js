import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCCgl4t5Uuqm9hkT6am69Z6PgA1RndqvI4",
    authDomain: "blogs-app-fd0c8.firebaseapp.com",
    projectId: "blogs-app-fd0c8",
    storageBucket: "blogs-app-fd0c8.appspot.com",
    messagingSenderId: "518741056785",
    appId: "1:518741056785:web:a86d152527d7ffb89f40b0",
    measurementId: "G-43JL7NK20K"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export {auth, db, storage};