import Rebase from 're-base'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDr3cKtszUWfAXHd5uBNANZlILWYU22sVs",
  authDomain: "task-manager-1-e7f4f.firebaseapp.com",
  databaseURL: "https://task-manager-1-e7f4f.firebaseio.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
