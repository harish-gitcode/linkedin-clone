import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAYzaqaFUjR0IBmPVYw8sLoFjdtb0ggVNE",
    authDomain: "linkedin-clone-7de32.firebaseapp.com",
    projectId: "linkedin-clone-7de32",
    storageBucket: "linkedin-clone-7de32.appspot.com",
    messagingSenderId: "316461477423",
    appId: "1:316461477423:web:59d600990b25bc47e720da"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };