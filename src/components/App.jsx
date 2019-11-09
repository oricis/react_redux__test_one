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
                Some content from App component
                <p>Number value in App: <span>{this.props.numberValue}</span>.</p>
                <button onClick={()=>{this.props.handleNumberFun(2);}}>Añado 2</button>

                <hr />
                <Number value="1000"></Number>
            </div>
        );
    }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
    handleNumberFun: (payload) => {
        console.log('App / mapDispatchToProps() - saving ' + payload)//HACK:
        dispatch(
            handleNumberFun(payload)
        );
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
