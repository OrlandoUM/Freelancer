import * as firebase from 'firebase';

const Config = {
    apiKey: 'AIzaSyA_DmIAoGtuZM3K0O_Zig5V-h8zainlGXs',
      authDomain: 'freelancer-d7275.firebaseapp.com',
      databaseURL: 'https://freelancer-d7275.firebaseio.com',
      projectId: 'freelancer-d7275',
      storageBucket: 'freelancer-d7275.appspot.com',
      messagingSenderId: '1023986495753',
      appId: '1:1023986495753:web:cac63bae085797d098a3d8',
      measurementId: 'G-SPQVBYG4NH',
    };

firebase.initializeApp(Config);

export default firebase;