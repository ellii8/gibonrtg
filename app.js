

const firebaseConfig = {
    apiKey: "AIzaSyBwtkPa6kfj3O0k6y5WaP_qdn47lMsMWis",
    authDomain: "gibonrtg.firebaseapp.com",
    projectId: "gibonrtg",
    storageBucket: "gibonrtg.firebasestorage.app",
    messagingSenderId: "952449401322",
    appId: "1:952449401322:web:df03abd1966df0a780b293"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const dataForm = document.getElementById('dataForm');
const statusMessage = document.getElementById('status');

// Form submission event
dataForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        await addDoc(collection(db, 'users'), { name, email });
        statusMessage.textContent = 'Data submitted successfully!';
        dataForm.reset();
    } catch (error) {
        statusMessage.textContent = `Error: ${error.message}`;
    }
});
