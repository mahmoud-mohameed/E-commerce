
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrlxOm17vWVmtR7atxd660SkpKiOXeE5U",
  authDomain: "react-ecommerce-94939.firebaseapp.com",
  projectId: "react-ecommerce-94939",
  storageBucket: "react-ecommerce-94939.firebasestorage.app",
  messagingSenderId: "676888526587",
  appId: "1:676888526587:web:189aebece2f355d754ba5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);