// Import the necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
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
