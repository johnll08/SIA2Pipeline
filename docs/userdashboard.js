// Import Firebase Authentication SDK
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
