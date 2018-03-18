import Rebase from 're-base'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "your api key goes here",
  authDomain: "your authdomain",
  databaseURL: "your database url goes here"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
