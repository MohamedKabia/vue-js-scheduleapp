import firebase from 'firebase/app'
import 'firebase/firestore'
// {<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>}

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDXNRmShK-287EtfMUNC4hlNVl8XY7fJUw",
    authDomain: "schedul-app.firebaseapp.com",
    databaseURL: "https://schedul-app.firebaseio.com",
    projectId: "schedul-app",
    storageBucket: "schedul-app.appspot.com",
    messagingSenderId: "18867407048"
  };
  firebase.initializeApp(config);
  const fb_database=firebase.firestore();
  fb_database.settings({ timestampsInSnapshots: true});
  export default fb_database;
