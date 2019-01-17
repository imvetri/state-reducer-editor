// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Styles.

import style from "./State.css";

class ReducerEditor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.show ? "" : style.hide}>
                <h6>Reducer (Access state via "state" variable. Write code to modify it and see what happens.)</h6>
                <section className={style.stateEditor}>
                    <textarea onChange={this.props.onChange} />
                    <button onClick={this.props.onSave}>Create state</button>
                </section>
            </div>
        );
    }
}

export default ReducerEditor;