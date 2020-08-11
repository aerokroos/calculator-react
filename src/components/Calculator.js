import React, {Component} from 'react'


class Calculator extends Component {
    // function myFunction() {
    //     var x = document.getElementById("myBtn").value;
    //     document.getElementById("demo").innerHTML = x;
    // }
    
    render() {
        return(
            <React.Fragment>
                <div>
                    <input type="text" className="display"></input>;
                </div>;

                <div>
                    <button className="numbers-btn">%</button>;
                    <button className="numbers-btn">CE</button>;
                    <button className="numbers-btn">E</button>;
                    <button className="numbers-btn">Back</button>;
                </div>;

                <div>
                    <button className="numbers-btn">7</button>;
                    <button className="numbers-btn">8</button>;
                    <button className="numbers-btn">9</button>;
                    <button className="numbers-btn">/</button>;
                </div>;

                <div>
                    <button className="numbers-btn">4</button>;
                    <button className="numbers-btn">5</button>;
                    <button className="numbers-btn">6</button>;
                    <button className="numbers-btn">-</button>;
                </div>;

                <div>
                    <button onClick={one} className="numbers-btn">1</button>;
                    <button className="numbers-btn">2</button>;
                    <button className="numbers-btn">3</button>;
                    <button className="numbers-btn">+</button>;
                </div>

                <div>
                    <button className="numbers-btn">+/-</button>;
                    <button className="numbers-btn">0</button>;
                    <button className="numbers-btn">.</button>;
                    <button className="numbers-btn">=</button>;
                </div>
            </React.Fragment>
        );
        
    }

    
}



export default Calculator;