import React, { memo } from 'react'

const ChildComponent = () => {
    console.log("Render")
    return (
        <div>
            <h1>ChildComponent</h1>
        </div>
    )
}

export default memo(ChildComponent);