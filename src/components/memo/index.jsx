import React from 'react'
import ChildComponent from './ChildComponent'

const Memo = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Memo Component</h1>
            {count}
            <ChildComponent />
            <button onClick={handleClick}>count++</button>
        </div>
    )
}

export default Memo