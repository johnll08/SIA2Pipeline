// Import Firebase Authentication SDK
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
