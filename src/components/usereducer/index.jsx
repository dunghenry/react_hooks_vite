import React from 'react'
import reducer, { initialState } from './reducer';
import logger from './logger';
import { increase, increaseValue } from './actions';
const UseReducer = () => {
    const [state, dispatch] = React.useReducer(logger(reducer), initialState)
    const handleClick = () => {
        // dispatch({
        //     type: "increaseone"
        // })

        //or
        dispatch(increase());
    }

    const handleClickPayload = () => {
        dispatch(increaseValue(2));
    }
    return (
        <div>
            <h1>User Reducer</h1>
            <p>Count : {state.count}</p>
            <button onClick={handleClick}>count++</button><br /><br />
            <button onClick={handleClickPayload}>count+payload</button>
        </div>
    )
}

export default UseReducer