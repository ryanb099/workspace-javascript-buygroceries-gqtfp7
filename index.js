// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyC8YxgOtzn_OanAlh7Q-LpjMN1PFA2_TCM",
  authDomain: "grocerylist-238b9.firebaseapp.com",
  databaseURL: "https://grocerylist-238b9.firebaseio.com",
  projectId: "grocerylist-238b9",
  storageBucket: "grocerylist-238b9.appspot.com",
  messagingSenderId: "206619415585",
  appId: "1:206619415585:web:e839424c83a5c5b780ff60",
  measurementId: "G-NBECYCE2YS"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
  $('li').each(function(){
    var value= $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value
  });
  });
});
