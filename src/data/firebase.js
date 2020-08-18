import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxhVJJcXraR_1lLz_a_Af-Z4HtJzQID08",
    authDomain: "react-workers-list-app.firebaseapp.com",
    databaseURL: "https://react-workers-list-app.firebaseio.com",
    projectId: "react-workers-list-app",
    storageBucket: "react-workers-list-app.appspot.com",
    messagingSenderId: "332222701693",
    appId: "1:332222701693:web:279282a38ef3773b305114",
    measurementId: "G-D6DNTVQM0J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default firebase;