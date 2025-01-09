// Import the necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
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
const analytics = getAnalytics(app);
const auth = getAuth();

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailPhone = document.getElementById('emailPhone').value;
  const password = document.getElementById('password').value;

  // Check if the input is a valid email or phone number
  if (emailPhone.includes('@')) {
    // Email registration
    createUserWithEmailAndPassword(auth, emailPhone, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Registration successful! Welcome!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  } else {
    // Phone registration (using Firebase phone number authentication)
    const appVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // Do something when captcha is solved
      }
    }, auth);

    signInWithPhoneNumber(auth, emailPhone, appVerifier)
      .then((confirmationResult) => {
        const verificationCode = prompt("Enter the verification code sent to your phone:");
        return confirmationResult.confirm(verificationCode);
      })
      .then((result) => {
        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  }
});
