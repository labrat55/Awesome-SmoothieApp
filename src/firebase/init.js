 import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWFO4Xc7-3AAQxvW-iC1iCzOkFpDbw_kg",
    authDomain: "awesome-smoothies.firebaseapp.com",
    databaseURL: "https://awesome-smoothies.firebaseio.com",
    projectId: "awesome-smoothies",
    storageBucket: "awesome-smoothies.appspot.com",
    messagingSenderId: "181776421212"
  };

  const firebaseApp = firebase.initializeApp(config);

//firebaseApp.firestore().setting({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore()