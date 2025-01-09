// Import Firebase Auth SDK
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcFUp2_ycUB9VCt-RJxEEcZEb4q0sxlsw",
  authDomain: "sia2pipeline-dd376.firebaseapp.com",
  projectId: "sia2pipeline-dd376",
  storageBucket: "sia2pipeline-dd376.firebasestorage.app",
  messagingSenderId: "628717604549",
  appId: "1:628717604549:web:fe1a2f9ce3780080092aac",
  measurementId: "G-H3DQZ5VF9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign out the user
signOut(auth).then(() => {
  // Redirect to login page after logging out
  window.location.href = 'login.html';
}).catch((error) => {
  console.error('Error signing out: ', error);
});
