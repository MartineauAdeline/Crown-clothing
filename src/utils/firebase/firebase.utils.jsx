// initializeApp : fonction qui fournit une instance de l'application firebase
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import {
  getFirestore,
  doc, 
  getDoc, 
  setDoc
} from 'firebase/firestore';


//configuration d'un objet qui permet de rattaché l'instance d'application Firebase à l'instance webapp que l'on a en ligne

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoDAdtkJo_E3WnLBd5CEvAL0Aq3Cn4LPU",
  authDomain: "crwn-clothing-db-20170.firebaseapp.com",
  projectId: "crwn-clothing-db-20170",
  storageBucket: "crwn-clothing-db-20170.appspot.com",
  messagingSenderId: "415249423626",
  appId: "1:415249423626:web:548c19a6798c055cdfaef3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,  provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  //permet de vérifier si il existe une instance user dans la bdd
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();  

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      });
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;


  //if userdata exists
  
  //if userdata does not exists
  
  //return userDocRef

};