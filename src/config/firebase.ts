import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDECRDIaPkfO5qk4D86Z-Vyv5kSXeRewhw',
  appId: '1:371367977977:web:07c3182d9e21fa61031328',
  authDomain: 'online-store-58cf4.firebaseapp.com',
  measurementId: 'G-PQBKSXJ6GX',
  messagingSenderId: '371367977977',
  projectId: 'online-store-58cf4',
  storageBucket: 'online-store-58cf4.appspot.com',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)
