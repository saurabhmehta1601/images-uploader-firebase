import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC9tDy92zP7Y81jFRW1VDABHC_yBD_ahTU",
    authDomain: "firegram-655d6.firebaseapp.com",
    projectId: "firegram-655d6",
    storageBucket: "firegram-655d6.appspot.com",
    messagingSenderId: "529153110596",
    appId: "1:529153110596:web:9310a4097b4b9164698211"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage=firebase.storage()
  const db = firebase.firestore()
  db.settings({ timestampsInSnapshots : true})

  export {firebase,storage,db}