import React, {Component} from 'react';

class Result extends Component {

    render() {
        let {result} = this.props;
        return(
            <div className="result">
                <p type="text" class="screen" size="27.5">{result}</p>
            </div>
        );
    }
}

export default Result;