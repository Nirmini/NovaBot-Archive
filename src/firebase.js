const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, get, update, remove } = require('firebase/database');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz0pb8xNqVIKhQxYeUku5gQy6_1kGHDAg",
  authDomain: "multi-guildcloud.firebaseapp.com",
  databaseURL: "https://multi-guildcloud-default-rtdb.firebaseio.com",
  projectId: "multi-guildcloud",
  storageBucket: "multi-guildcloud.appspot.com",
  messagingSenderId: "705834775110",
  appId: "1:705834775110:web:118cd4866c8869a7ad9047",
  measurementId: "G-RCDNCH4WKQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

module.exports = { db, ref, set, get, update, remove };
