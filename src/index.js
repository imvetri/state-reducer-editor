// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.

import State from "./State";
class Index extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h1>State Reducer Editor</h1>
                <State/>
            </div>  
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));