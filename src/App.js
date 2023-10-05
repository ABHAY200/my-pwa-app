// App.js

import React from 'react';
import './App.css'; // Import your main CSS file
import Dashboard from './pages/dashboard/dashboard.tsx'; // Import the ShopList component

function App() {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }

  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Show install button or prompt here
});

const handleInstallButtonClick = () => {console.log('deferredPrompt', deferredPrompt);
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User installed the PWA');
      }
      deferredPrompt = null;
    });
  }
};

  
  return (
    <div className="App">
      <button onClick={handleInstallButtonClick}>Install PWA</button>
      <Dashboard /> {/* Render the ShopList component */}
    </div>
  );
}

export default App;
