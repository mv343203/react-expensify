import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

//   database.ref().on('value', (snapshot) => {
//      console.log(snapshot.val());
//   });

//   setTimeout(() =>{
//       database.ref('age').set(28);
//   }, 3500);

//   database.ref()
//     .once('value')
//     .then((snapshot) =>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });


//   firebase.database().ref().set({
//     name: 'Max Vome',
//     age: 27,
//     relationship: "Married",
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });

// database.ref().update({
//    name: "Steven",
//    age: 47,
//    job: 'hse manager',
//    relationship: null
// });

// // database.ref('age')
// //     .remove()
// //     .then(( ) => {
// //         console.log('Data is saved');
// //     }).catch((e) => {
// //         console.log('This failed!', e);
// //     });