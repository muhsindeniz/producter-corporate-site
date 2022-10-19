import firebase from 'firebase'


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

if (!firebase.apps.length) {
    var firebaseApp = firebase.initializeApp(firebaseConfig)
}
else {
    var firebaseApp = firebase.app(); // if already initialized, use that one
}

var db = firebaseApp.firestore()
var storageRef = firebase.storage().ref();

export { db, storageRef };
