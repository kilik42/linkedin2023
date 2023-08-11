import React from 'react';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* <h1>Linked In Clone</h1> */}

      {/* header */}
      <Header />
      {/* app body */}
      {/* sidebar */}
      <div className="app__body">
        <Sidebar />
          {/* feed */}
          {/* widgets */}

      </div>
        
        

    </div>
  );
}

export default App;
