// Import Firebase Authentication SDK
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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

// Function to load user email into the dashboard
function loadUserEmail(user) {
  const emailElement = document.getElementById('email');
  emailElement.textContent = user.email || "Email not available"; // Display user email or a fallback message
}

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
  } else {
    // Load user email if logged in
    loadUserEmail(user);
  }
});
