import React, { useId } from 'react'

const UseId = () => {
    const id = useId()
    return (
        <div>
            <h1>UseId Component</h1>
            <label htmlFor={id}>Do you like React?</label>
            <input id={id} type="checkbox" name="react" />
            <label htmlFor={id}>Do you like React?</label>
            <input id={id} type="checkbox" name="react" />
        </div>
    )
}

export default UseId;