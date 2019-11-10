// Action "handleNumber"

const handleNumberFun = ({ numberValue, summation }) =>
{
    console.log(
        'Action "handleNumber"',
        'numberValue: ' + numberValue + ' / summation: ' + summation
    )

    return {
        type:    'ADD_NUMBER',
        payload: {
            numberValue,
            summation: summation + numberValue,
        }
    };
}

export default handleNumberFun;
