// import {initializeApp} from 'firebase/app'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJ0aWNPu0kjVJY2wkEPIuBfhb4aqvjegE",
    authDomain: "bq-api-client-503fd.firebaseapp.com",
    projectId: "bq-api-client-503fd",
    storageBucket: "bq-api-client-503fd.appspot.com",
    messagingSenderId: "998062376830",
    appId: "1:998062376830:web:e96d4248d4b7f0cdb3152f",
    measurementId: "G-8519DTNV1S"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth }
