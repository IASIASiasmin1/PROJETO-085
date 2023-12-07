import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBvA-pTjXAxt4--2SMtKGku6_A-ibsb2pY",
  authDomain: "ciclista-eletronico-20679.firebaseapp.com",
  projectId: "ciclista-eletronico-20679",
  storageBucket: "ciclista-eletronico-20679.appspot.com",
  messagingSenderId: "947107969053",
  appId: "1:947107969053:web:15c662ec4c78f73215aef4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
