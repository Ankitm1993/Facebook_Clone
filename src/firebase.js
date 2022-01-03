// import firebase from "firebase";

import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyAZdmR8lUCpiPTacxRDX1jCdpG8iI3vImM",
  authDomain: "facebook-clone-2cb7e.firebaseapp.com",
  projectId: "facebook-clone-2cb7e",
  storageBucket: "facebook-clone-2cb7e.appspot.com",
  messagingSenderId: "715433521661",
  appId: "1:715433521661:web:28f5d1973bd48c3c83a994",
  measurementId: "G-0Z2WFTDHZ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
