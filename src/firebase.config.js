import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCiP8mCHfG4i-cbNyHzv5d5hTrY72LtMfg",
    authDomain: "commerceapp-fbbba.firebaseapp.com",
    databaseURL: "https://commerceapp-fbbba-default-rtdb.firebaseio.com",
    projectId: "commerceapp-fbbba",
    storageBucket: "commerceapp-fbbba.appspot.com",
    messagingSenderId: "428174984673",
    appId: "1:428174984673:web:6283b563d784eb2076fea0",
    measurementId: "G-4MBCQHB014"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};