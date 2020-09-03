import React, {Component} from 'react'


class Calculator extends Component {
    render() {
        return(
            <React.Fragment>
                <div>
                    <input type="text" className="display" class="screen" size="27.5"></input>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn cancel">C</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn operators">()</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn operators">%</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn operators">÷</button>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">7</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn"class="btn">8</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">9</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn"class="btn operators">x</button>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">4</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">5</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">6</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn"class="btn operators">-</button>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">1</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">2</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">3</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn operators">+</button>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">+/-</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">0</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn">.</button>
                    <button onClick={e => this.props.onClick(e.target.name)} className="numbers-btn" class="btn equal">=</button>
                </div>
            </React.Fragment>
        );
        
    }
}

export default Calculator;