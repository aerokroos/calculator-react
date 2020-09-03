import React, {Component} from 'react'

class Calculator extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="button">
                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} name="C" class="btn cancel">C</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="(" class="btn operators">(</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="/" class="btn operators">÷</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="CE" class="btn cancel">CE</button>
                    
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} name="7" class="btn">7</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="8" class="btn">8</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="9" class="btn">9</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="*" class="btn operators">x</button>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} name="4" class="btn">4</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="5" class="btn">5</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="6" class="btn">6</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="-" class="btn operators">-</button>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} name="1" class="btn">1</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="2" class="btn">2</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="3" class="btn">3</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="+" class="btn operators">+</button>
                </div>

                <div>
                    <button onClick={e => this.props.onClick(e.target.name)} name=")" class="btn operators">)</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="0" class="btn">0</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="." class="btn">.</button>
                    <button onClick={e => this.props.onClick(e.target.name)} name="=" class="btn equal">=</button>
                </div>
                </div>
            </React.Fragment>
        );
        
    }
}

export default Calculator;