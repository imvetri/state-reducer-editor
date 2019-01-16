// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Styles.

import style from "./State.css";

// Components.
import ReducerEditor from "./ReducerEditor";

class StateEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            states : [],
            storedState: "",
            showStateCreator: false,
            storeReducer: "",
            showReducerCreator: false
        }
    }

    storeState(e) {
        this.setState({
            storedState: e.target.value
        }); 
    }

    toggleStateEditor () {
        this.setState({
            showStateCreator: !this.state.showStateCreator
        });
    }
    toggleReducerEditor () {
        this.setState({
            showReducerCreator: !this.state.showReducerCreator
        })
    }

    saveState(){
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

    createNextState () {
        let newState = JSON.parse(this.state.storedState);
        let reducerFunction = new Function("state", this.state.storeReducer+";return state");
        console.log(reducerFunction(newState));
    }

    render(){

        return (
            <div>
                <button onClick={this.toggleStateEditor.bind(this)}>Create Default State</button>
                <section className={this.state.showStateCreator? "": style.hide}>
                    <section className={style.stateEditor}>
                        <h6>State (Expected stringified JSON.)</h6>
                        <textarea className={style.fill}onChange={this.storeState.bind(this)}/>
                        <button onClick={this.toggleReducerEditor.bind(this)}>Add reducer</button>
                        <section className={this.state.showReducerCreator? "": style.hide} >
                            <ReducerEditor onChange={this.storeReducer.bind(this)} onClick={this.createNextState.bind(this)}/>
                        </section>
                        <button onClick={this.saveState.bind(this)}>Save State</button>
                    </section>
                </section>
            </div>
        );
    }
}

export default StateEditor;