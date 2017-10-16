import app from 'firebase/app'
import fireStore from 'firebase/firestore'
import auth from 'firebase/auth'
import config from 'config'

let firebaseApp
let firestore

const firebaseInit = () => app.initializeApp(config.firebase)
const firebaseInstance = firebaseApp ? firebaseApp : firebaseInit()

export const firestoreInit = () =>
  firebaseInstance
    .firestore()
    .enablePersistence()
    .then(() => {
      console.info('Firestore Persistence enabled.')
      firestore = firebaseInstance.firestore()
    })
    .catch(function(err) {
      if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
      } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
      }
    })

export default firebaseInstance

export const fetchStore = from => {
  return firestore
    .collection(from)
    .orderBy('sequence')
    .get()
    .then(snapshot => {
      let hash = {}
      let sequence = []
      snapshot.forEach(doc => {
        hash = {
          ...hash,
          [doc.id]: doc.data()
        }
        sequence.push(doc.id)
      })
      return { hash, sequence }
    })
    .catch(error => console.error(error))
}

// Add a second document with a generated ID.
// db.collection("users").add({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });
