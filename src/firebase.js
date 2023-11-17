import { initializeApp } from "firebase/app";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyB07EopQl7KFLnj6KtU9LaqQ84qlEP1C-s",
    authDomain: "my-pwa-app-d921e.firebaseapp.com",
    projectId: "my-pwa-app-d921e",
    storageBucket: "my-pwa-app-d921e.appspot.com",
    messagingSenderId: "239145810703",
    appId: "1:239145810703:web:e869532b59d0b14abc1c7a",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const sendRequest = async () =>{
let token = '';
return new Promise((resolve) => {
Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      getToken(messaging, { vapidKey: 'BPINClUVT-arnVupxkjleBpHfYuEiDZHKpAzaH-W6hZB7jb4rDEsy9V78WOb5q4XYwBtMXs_CBIoZBNfUI0jl1Y' }).then((currentToken) => {
        if (currentToken) {
          token = currentToken;
          console.log('hehewrhgh',  currentToken);
          resolve(token);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    } else {
      console.log('No permission granded');
    }
  });
});
}



export const onMessageListener = () => {
    return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('payload', payload);
      resolve(payload);
    });
});
}

    