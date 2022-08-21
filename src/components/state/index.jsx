import { useState } from 'react'
const products = [1, 2, 3]
const State = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(() =>{
        console.log("Total");
        const price = products.reduce((prev, curr) =>{
            return prev + curr
        })
        return price;
    });
    // const price = products.reduce((prev, curr) =>{
    //     console.log("Total");
    //     return prev + curr
    // })
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleClickDouble = () =>{
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <p>{count}</p>
            <p>{total}</p>
            {/* <p>{price}</p> */}
            <button onClick={handleClick}>count++</button> <br/>
            <button onClick={handleClickDouble}>count + 2</button>
        </div>
    )
}

export default State