import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARxPFlhmn-W_hnVHbuO6yYdFJWVbSQKx4",
  authDomain: "dbremote-1bbf7.firebaseapp.com",
  projectId: "dbremote-1bbf7",
  storageBucket: "dbremote-1bbf7.firebasestorage.app",
  messagingSenderId: "183373072150",
  appId: "1:183373072150:web:d1da91e326436a049c7237"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
