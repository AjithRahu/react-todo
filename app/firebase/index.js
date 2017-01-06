import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyA0w7jhsc9WaqPgTLWtFLktmwIPOok5Rcg",
      authDomain: "todo-app-cef41.firebaseapp.com",
      databaseURL: "https://todo-app-cef41.firebaseio.com",
      storageBucket: "todo-app-cef41.appspot.com",
      messagingSenderId: "241000935959"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
