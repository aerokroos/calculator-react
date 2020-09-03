import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// import Components
import Calculator from './components/Calculator';

function App() {
  var name = "Alberto Ornelas";
  return (
    <div className="App">
      <header className="App-header">
      <h1>My Calculator</h1>
        <section className="components">
          <Calculator />
        </section>



      </header>
    </div>
  );
}

export default App;
