import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Limited" numBalls={3} maxNum={30} />
    </div>
  );
}

export default App;
