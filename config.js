import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
     apiKey: "AIzaSyBi2QGI_lv_Gp_GbaM2BJBkaNPoIZsc858",
        authDomain: "fruit-5cde9.firebaseapp.com",
        databaseURL: "https://fruit-5cde9-default-rtdb.firebaseio.com",
        projectId: "fruit-5cde9",
        storageBucket: "fruit-5cde9.appspot.com",
        messagingSenderId: "414490865414",
        appId: "1:414490865414:web:5c246993b02236f926b887"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();