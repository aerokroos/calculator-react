import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// import Components
import Calculator from './components/Calculator';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {result: ""}
  }

  onClick = button => {
    if(button==="="){ this.calculate_btn();
    }else if (button==="C") { this.reset_btn(); 
    }else if (button==="CE") { this.backspace_btn();
    } else {
      this.setState({result: this.state.result + button})
    }
  };

calculate_btn = () => {
  // Calculating...
  this.setState({result: (eval(this.state.result) || "") + ""})
};

reset_btn = () => {
  this.setState({result: ""})
};

backspace_btn = () => {
  this.setState({result: this.state.result.slice(0, -1)})
}

render() {
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
}

export default App;



