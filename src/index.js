// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.

import StateEditor from "./StateEditor";
class Index extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h1>State Reducer Editor</h1>
                <StateEditor/>
            </div>  
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));