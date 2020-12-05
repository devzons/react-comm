import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCauqkEBUsd3UoQEO-fG4ZBeR-z6AZbSnU',
  authDomain: 'recomm-a9f2c.firebaseapp.com',
  projectId: 'recomm-a9f2c',
  storageBucket: 'recomm-a9f2c.appspot.com',
  messagingSenderId: '861996066244',
  appId: '1:861996066244:web:0be1321440e6a7d7623091',
  measurementId: 'G-Z738JV5R8Q',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
