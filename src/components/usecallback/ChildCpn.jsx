import React, { memo } from 'react'
const ChildCpn = ({ onIncrement }) => {
    console.log("Render")
    return (
        <div>
            <button onClick={onIncrement}>Click</button>
        </div>
    )
}

export default memo(ChildCpn)