import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAflaLENjQT_kd3UxW3_plwv5CaC9SKvyo',
  authDomain: 'vue-music-c8c58.firebaseapp.com',
  projectId: 'vue-music-c8c58',
  storageBucket: 'vue-music-c8c58.appspot.com',
  appId: '1:283777068383:web:76b4d99b631d98fec5daea',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Creating references
const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
