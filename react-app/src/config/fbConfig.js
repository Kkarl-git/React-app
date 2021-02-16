import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCbyNJJTnUtuGC8iSwt-Fwq7ZRZdJHZXLQ",
    authDomain: "net-react-app.firebaseapp.com",
    projectId: "net-react-app",
    storageBucket: "net-react-app.appspot.com",
    messagingSenderId: "686205950178",
    appId: "1:686205950178:web:f24bcc9bf6ee77b202a6bb",
    measurementId: "G-FVC8N2VTTY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timstampsInSnapshots: true});

export default firebase