// reducer "number"

const INITIAL_STATE = {
    numberValue: 0,
    summation:   0,
}

const number = (state = INITIAL_STATE, action) =>
{
    //console.log('Reducer "number" - action:', action) //HACK:
    switch (action.type) {
        case 'ADD_NUMBER':
            console.log('entra ADD_NUMBER - state:', state) //HACK:
            const { numberValue, summation } = action.payload;

            return {
                ...state,
                numberValue,
                summation,
            }

        default:
            return state;
    }
}

export default number;
