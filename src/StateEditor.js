// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Styles.

import style from "./State.css";

// Components.
import ReducerEditor from "./ReducerEditor";

class StateEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            states: [],
            storedState: "",
            storeReducer: "",
            showReducerEditor: false
        }
    }

    storeState(e) {
        this.setState({
            storedState: e.target.value
        });
    }

    toggleReducerEditor() {
        this.setState({
            showReducerEditor: !this.state.showReducerEditor
        })
    }

    saveState() {
        let newState = {
            state: this.state.storedState,
            nextStates: [],
            previousStates: [],
            reducers: []
        }

        let newStates = Array.from(this.state.states);
        newStates.push(newState);

        this.setState({
            state: newStates
        });
    }

    storeReducer(e) {
        this.setState({
            storeReducer: e.target.value
        });
    }

    createNextState() {
        // this.validateState();
        // let nextState = this.runReducer(JSON.parse(this.storedState));
        // Need a tree view of state + reducer combination.
        let newState = JSON.parse(this.state.storedState);
        let reducerFunction = new Function("state", this.state.storeReducer + ";return state");
        console.log(reducerFunction(newState));
    }

    render() {

        return (
            <div className={this.props.show ? "" : style.hide}>
                <section className={style.stateEditor}>
                    <h6>State (Expected stringified JSON.)</h6>
                    <textarea className={style.fill} onChange={this.storeState.bind(this)} />
                    <button onClick={this.toggleReducerEditor.bind(this)}>Add reducer</button>
                </section>
                <ReducerEditor onChange={this.storeReducer.bind(this)} onSave={this.createNextState.bind(this)} show={this.state.showReducerEditor}/>
                <button onClick={this.saveState.bind(this)}>Save State</button>
            </div>
        );
    }
}

export default StateEditor;