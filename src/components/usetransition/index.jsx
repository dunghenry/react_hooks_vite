import React, { useTransition, useState } from 'react'
const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    function handleClick() {
        startTransition(() => {
            setCount(c => c + 1);
        })
    }
    if (isPending) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <p> {count}</p>
            <button onClick={handleClick}>count++</button>
        </div>
    )
}

export default UseTransition