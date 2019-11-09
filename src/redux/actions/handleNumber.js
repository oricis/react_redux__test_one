// Action "handleNumber"

const handleNumberFun = (numberValue=0) =>
{
    console.log('Action "handleNumber" -> numberValue: ' + numberValue)

    return {
        type:    'ADD_NUMBER',
        payload: { numberValue: numberValue }
    };
}

export default handleNumberFun;
