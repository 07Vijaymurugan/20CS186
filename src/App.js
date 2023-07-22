import React, { useEffect, useState } from 'react';
import './App.css';
import TrainDataComponent from './trainComponent/TrainDataComponent';
import RegisterLoginComponent from './authComponent/RegisterLoginComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <TrainDataComponent />
      </header>
      {/* <h1>Welcome to Your App</h1>
      <RegisterLoginComponent /> */}
    </div>
  );
}

export default App;
