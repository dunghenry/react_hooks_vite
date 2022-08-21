import React, { useRef } from 'react'
const UseRef = () => {
    const [count, setCount] = React.useState(10)
    const refCount = useRef(count);
    // const refInput = useRef();
    // React.useEffect(() => {
    //     refInput.current.focus();
    // }, []);

    React.useEffect(() => {
        refCount.current = count;
    }, [count])
    console.log(refCount.current);

    React.useEffect(() => {
        setTimeout(() =>{
            setCount(count - 1);
        }, 1000)
    })
    return (
        <div>
            <h1>UseRef</h1>
            <p>Prev state : {refCount.current}</p>
            <p>New state : {count}</p>
            {/* <input type="text" ref={refInput} /> */}
        </div>
    )
}

export default UseRef