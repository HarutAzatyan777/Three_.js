import React from 'react';
import Canvas from './canvasModel/';
import Customaizer from './pages/Costomaizer';
import Home from './pages/Home';
import './App.css'; // Assuming you have an App-specific CSS file

function App() {
  return (
    <div className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customaizer />
    </div>
  );
}

export default App;
