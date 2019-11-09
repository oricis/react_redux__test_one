import React, { Component } from 'react';

import Number from './number/Number.jsx';


class App extends Component
{
    constructor()
    {
        super();

        this.state = {
            
        };
    }

    render()
    {
        
        return (
            <div>
                Some content from App component

                <hr />
                <Number value="1000"></Number>
            </div>
        );
    }
}

export default App;
