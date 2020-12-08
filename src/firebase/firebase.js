import * as firebase from 'firebase';

  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config);

  const db = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, db as default};

  // db.ref().remove();

  //   db.ref('expenses').push({
  //   description: 'utility',
  //   note: 'electricity',
  //   amount: 2344,
  //   createdOn: 234234
  // });

  // db.ref('expenses').push({
  //   description: 'entertainment',
  //   note: 'dancing',
  //   amount: 500,
  //   createdOn: 234234
  // });

  // db.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // db.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // db.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // db.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  //   });

  // db.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenseList = [];
  //     snapshot.forEach((childSnapshot) => {
  //       expenseList.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenseList);
  //   });

  // db.ref('notes').push({
  //      title: 'Second note!',
  //       body: 'More notes...'
  // })

  // db.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   const name = val.name;
  //   const job = val.job.title;
  //   const company = val.job.company;
  //   console.log(name + ' is a ' + job + ' at ' + company);
  // });

  // setTimeout(() => {
  //   db.ref().update({
  //     'job/title': 'CEO'
  //   });
  // },3500);

  // const onValChange = db.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (e) => {
  //   console.log('Error w data fetching', e);
  // });

  // setTimeout(() => {
  //   db.ref('age').set(28);
  // }, 3500);

  // setTimeout(() => {
  //   db.ref().off(onValChange);
  // }, 7000);

  // setTimeout(() => {
  //   db.ref('age').set(29);
  // }, 10500);

  // db.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //       const val = snapshot.val();
  //       console.log(val);
  //   })
  //   .catch((e) => {
  //       console.log('Error fetching data', e);
  //   })

//   db.ref().set({
//       name: 'Adrian McMillian',
//       age: 51,
//       stressLevel: 6,
//       job: {
//           title: 'Software Dev',
//           company: 'Google'
//       },
//       location: {
//           city: 'Marina del Rey',
//           country: 'US'
//       }
//   }).then(() => {
//     console.log('data saved!');
//   }).catch((e) => {
//     console.log('error',e);
//   });

//   db.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   })

// db.ref()
// .remove()
// .then(() => {
//     console.log('data removed');
// }).catch((e) => {
//     console.log('error', e);
// })