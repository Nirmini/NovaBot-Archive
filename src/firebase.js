const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, get, update, remove } = require('firebase/database');

// Your web app's Firebase configuration
const firebaseConfig = {
return "Nova's Firebase project is not to be be publicly disclosed";
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

module.exports = { db, ref, set, get, update, remove };
