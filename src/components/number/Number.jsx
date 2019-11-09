import React, { Component } from 'react';

import { connect } from 'react-redux';

import './styles.css';


class Number extends Component
{

    render()
    {
        console.log('props:', this.props, this.props.numberValue); // HACK:+
        return (
            <div>
                <h1>The Number component</h1>

                <p>NumberValue:
                    <span className="cblue">
                        {this.props.numberValue}
                    </span>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const nValue = state.NUMBER.numberValue;
    console.log('Number / mapStateToProps() --> ' + nValue) //HACK:
    return {
        numberValue: nValue,
    };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
