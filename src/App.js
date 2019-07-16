import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery numBalls={5} />
    </div>
  );
}
export default App;
