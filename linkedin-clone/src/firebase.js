import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMdxfH5XI9C_V2DU5GxFJBm-YQIdssSxQ",
  authDomain: "linkedin-clone-de7c4.firebaseapp.com",
  projectId: "linkedin-clone-de7c4",
  storageBucket: "linkedin-clone-de7c4.appspot.com",
  messagingSenderId: "54004410567",
  appId: "1:54004410567:web:4fa35f880a7f2e5a2cb6e2",
  measurementId: "G-6WEZW5M3DV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// // Initialize app
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
// // Connect to database
//   const db = firebaseApp.firestore();
// // Get google authentication
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   // Connect to storage expecially to store images
//   const storage = firebase.storage()

//   export { auth, provider, storage };
//   export default db;