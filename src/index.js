// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Styles.

import style from "./State.css";

// Dependencies.

import StateEditor from "./StateEditor";
class StateReducerEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            states : [{}],
            showStateCreator: false,
        }
    }

    toggleStateEditor () {
        this.setState({
            showStateCreator: !this.state.showStateCreator
        });
    }

    render(){
        return (
            <div>
                <h1>State Reducer Editor</h1>
                <button onClick={this.toggleStateEditor.bind(this)}>Create Default State</button>
                <StateEditor show={this.state.showStateCreator} states={this.states}/>
            </div>  
        );
    }
}

ReactDOM.render(<StateReducerEditor/>, document.getElementById("index"));