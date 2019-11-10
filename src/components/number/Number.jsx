import React, { Component } from 'react';

import { connect } from 'react-redux';

import './styles.css';


class Number extends Component
{

    render()
    {
        console.log('props:', this.props); // HACK:

        const classToShowClickedButton = this.props.lastNumberValue > 0
            ? 'd-block' : 'd-none';

        return (
            <div>
                <h1>The Number component</h1>

                <p>NumberValue: <span className="cblue">
                        {this.props.nValue}
                    </span>
                </p>

                <p className={classToShowClickedButton}>
                    Clicked: <span className="cblue">
                       +{this.props.lastNumberValue}
                    </span>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    const lastNumberValue = state.NUMBER.numberValue;
    const nValue = state.NUMBER.summation;

    return {
        lastNumberValue,
        nValue,
    };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
