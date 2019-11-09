import React, { Component } from 'react';

import './styles.css';


class Number extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        
        return (
            <div>
                <h1>The Number component</h1>

                <span class="cblue">
                    {this.props.value}
                </span>
            </div>
        );
    }
}

export default Number;
