// Action "handleNumber"

const handleNumberFun = ({ numberValue }) =>
{
    console.log('Action "handleNumber" -> numberValue: ' + numberValue)

    return {
        type:    'ADD_NUMBER',
        payload: {
            numberValue,
        }
    };
}

export default handleNumberFun;
