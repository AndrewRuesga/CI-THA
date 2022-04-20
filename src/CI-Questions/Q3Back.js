import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAFE3ylS4hrMcGyty51qHaH4CoMGCTNr9k',
	authDomain: 'ci-q3-c60ae.firebaseapp.com',
	projectId: 'ci-q3-c60ae',
	storageBucket: 'ci-q3-c60ae.appspot.com',
	messagingSenderId: '835509196299',
	appId: '1:835509196299:web:f54bda8065274b5da6590e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, app };
