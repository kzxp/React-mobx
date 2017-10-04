import app from 'firebase/app'
import database from 'firebase/database'
import auth from 'firebase/auth'
import config from './config'

let firebaseApp

const firebaseInit = () => app.initializeApp(config.firebase)
const getFirebase = () => (firebaseApp ? firebaseApp : firebaseInit())

export default getFirebase
