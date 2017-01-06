import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA0w7jhsc9WaqPgTLWtFLktmwIPOok5Rcg",
    authDomain: "todo-app-cef41.firebaseapp.com",
    databaseURL: "https://todo-app-cef41.firebaseio.com",
    storageBucket: "todo-app-cef41.appspot.com",
    messagingSenderId: "241000935959"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: "1.0.0"
  },
  isRunning: true,
  user: {
    name: 'Ajith',
    age: 16
  },
});

var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Walk the dog'
});
