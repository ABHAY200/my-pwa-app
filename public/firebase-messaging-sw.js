importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyB07EopQl7KFLnj6KtU9LaqQ84qlEP1C-s",
    authDomain: "my-pwa-app-d921e.firebaseapp.com",
    projectId: "my-pwa-app-d921e",
    storageBucket: "my-pwa-app-d921e.appspot.com",
    messagingSenderId: "239145810703",
    appId: "1:239145810703:web:e869532b59d0b14abc1c7a",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});