import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC6PH5ro0UOhtXTCldX9aNv4T4kwoFm5BE",
    authDomain: "facebook5-5a208.firebaseapp.com",
    projectId: "facebook5-5a208",
    storageBucket: "facebook5-5a208.appspot.com",
    messagingSenderId: "472036225493",
    appId: "1:472036225493:web:2fa17e404469dd65158d5c",
    measurementId: "G-J4V0NZBNM9"

});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };