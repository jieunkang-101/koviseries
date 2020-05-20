import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"
import { FIREBASE_API_KEY } from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "koviseries.firebaseapp.com",
  databaseURL: "https://koviseries.firebaseio.com",
  projectId: "koviseries",
  storageBucket: "koviseries.appspot.com",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase