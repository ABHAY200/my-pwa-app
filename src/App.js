// App.js

import React from 'react';
import './App.css'; // Import your main CSS file
import Dashboard from './pages/dashboard/dashboard.tsx'; // Import the ShopList component

function App() {
  return (
    <div className="App">
      <Dashboard /> {/* Render the ShopList component */}
    </div>
  );
}

export default App;
