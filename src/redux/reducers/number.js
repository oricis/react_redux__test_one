// reducer "number"

const INITIAL_STATE = {
    numberValue: 0
}

const number = (state = INITIAL_STATE, action) =>
{
    console.log('Reducer "number" - action:', action) //HACK:
    switch (action.type) {
        case 'ADD_NUMBER':
            const { numberValue } = action.payload;
            console.log('entra ADD_NUMBER - state:', state, action)
            return {
                ...state,
                numberValue
            }

        default:
            return state;
    }
}

export default number;
