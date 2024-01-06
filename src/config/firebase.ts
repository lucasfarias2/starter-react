import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';

let firebaseClient: FirebaseApp | undefined;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

if (!firebaseClient) {
  firebaseClient = initializeApp(firebaseConfig);
  console.log('Firebase initialized.');
}

export default firebaseClient;
