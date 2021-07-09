import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCCtSsdWED0Y6dU81sHexZ9hP9pIz44SdU",
    authDomain: "chit-chat-5ceb4.firebaseapp.com",
    databaseURL: 'https://chit-chat-5ceb4.firebaseio.com',
    projectId: "chit-chat-5ceb4",
    storageBucket: "chit-chat-5ceb4.appspot.com",
    messagingSenderId: "821533016521",
    appId: "1:821533016521:web:c8ea11c5624567effea818",
    measurementId: "G-W1YYB2CQ7B"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
