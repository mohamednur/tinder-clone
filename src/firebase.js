import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1vLZ-kFXMk1nh1_6s1quCY_QfqGD8lMw",
  authDomain: "tinder-clone-18c58.firebaseapp.com",
  databaseURL: "https://tinder-clone-18c58.firebaseio.com",
  projectId: "tinder-clone-18c58",
  storageBucket: "tinder-clone-18c58.appspot.com",
  messagingSenderId: "456960182826",
  appId: "1:456960182826:web:eb8a95420769281a7ed153",
  measurementId: "G-FEH2DWDT6X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
