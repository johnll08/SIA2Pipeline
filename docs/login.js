// Import Firebase Authentication SDK
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwZaQOLvxAtM_aoO1AqsEOlbRGMBh1JNY",
  authDomain: "sia2pipelineactivity.firebaseapp.com",
  projectId: "sia2pipelineactivity",
  storageBucket: "sia2pipelineactivity.firebasestorage.app",
  messagingSenderId: "732439095208",
  appId: "1:732439095208:web:0d3062c7311471ccba9f9d",
  measurementId: "G-85VMJFVQJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Authenticate user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful, redirect to the user dashboard
      alert('Login successful!');
      window.location.href = 'index.html';  // Redirect to user dashboard
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);  // Show error if login fails
    });
});
