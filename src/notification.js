import React, { useState, useEffect } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import {  onMessageListener, sendRequest } from './firebase';

const Notification = () => {

const [notification, setNotification] = useState({ title:'', body: '' });
const [token, setToken] = useState('');

useEffect(() => {
 init()
}, []);

const init = async () => {
    const tock = await sendRequest();
    console.log('for toke', tock)
    setToken(tock);
    onMessageListener().then((payload) => {
        setNotification({
            title: payload?.notification?.title,
            body: payload?.notification?.body,
        });
    }).catch((err) => console.log("failed:", err));
}

useEffect(() => {
    if(notification?.title) {
        notify();
    }
}, [notification]);

const notify = () => toast(<ToastDisplay notification={notification} />);
return(
<div style={{backgroundColor: 'red', fontSize: 10, display: 'flex', flexWrap: 'wrap'}}>
    {token}
    <Toaster />
</div>
)

};

function ToastDisplay({ notification }) {
return (
<div>
    <p><b>{notification?.title}</b></p>
    <p>{notification?.body}</p>
</div>
);
}

export default Notification;

