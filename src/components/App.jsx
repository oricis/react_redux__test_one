import React, { Component } from 'react';

import Number from './number/Number.jsx';

import { connect } from 'react-redux';
import handleNumberFun from '../redux/actions/handleNumber.js';

class App extends Component
{

    render()
    {
        //console.log('store / state', store.getState());
        return (
            <div>
                <h1>Some content from App component</h1>

                <button onClick={() => { this.setNumber(1) }}>
                    Añado 1
                </button>
                <button onClick={() => { this.setNumber(2) }}>
                    Añado 2
                </button>

                <hr />
                <Number value="1000"></Number>
            </div>
        );
    }

    setNumber(num)
    {
        this.props.setNumber(
            {
                numberValue: num,
                summation: this.props.nValue
            }
        )
    }
}

const mapStateToProps = (state) => {
    const nValue = state.NUMBER.summation;

    return {
        nValue,
    };
};
const mapDispatchToProps = dispatch => ({
    setNumber: (payload) => {
        console.log('App / mapDispatchToProps()') //HACK:
        dispatch(
            handleNumberFun(payload)
        );
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
