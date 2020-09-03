import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// import Components
import Calculator from './components/Calculator';
import Result from './components/Result';
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
  var check_result = ''
        if(this.state.result.includes('--')){
          check_result = this.state.result.replace('--','+')
        }
        else {
          check_result = this.state.result
        }
        try {
            this.setState({result: (eval(check_result) || "" ) + ""})
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
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
          <Result result={this.state.result}/>
          <Calculator onClick={this.onClick}/>
        </section>
      </header>
    </div>
    );
}
}

export default App;



