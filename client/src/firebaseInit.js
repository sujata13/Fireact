import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyD2MH-cx9GMRoJ_M7fHxPPueTJBvKYoAAk",
  authDomain: "push-notification-demo-f93ec.firebaseapp.com",
  databaseURL: "https://push-notification-demo-f93ec.firebaseio.com",
  projectId: "push-notification-demo-f93ec",
  storageBucket: "push-notification-demo-f93ec.appspot.com",
  messagingSenderId: "752278633076",
  appId: "1:752278633076:web:036cca618a30fd5fd36f21"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

// next block of code goes here

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });