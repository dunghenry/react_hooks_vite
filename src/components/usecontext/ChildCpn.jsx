import React, { useContext } from 'react'
import { AppContext } from '.'
const ChildCpn = () => {
    const data = useContext(AppContext);
    const { count, setCount } = data;
    const handleClick = (e) => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>ChildCpn</h1>
            <p>{count}</p>
            <button onClick={handleClick}>count++</button>
        </div>
    )
}

export default ChildCpn