import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDurdejCCPsAcVOzmM7mQ1kEglr3kIka7E",
    authDomain: "catch-of-the-day-jeff-4f8e8.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jeff-4f8e8.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export

export { firebaseApp };

// this is a default export

export default base;
