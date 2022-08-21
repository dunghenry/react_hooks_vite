import React, { useMemo } from 'react'
const UseMemo = () => {
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState([
        {
            id: 1,
            price: 100
        },
        {
            id: 2,
            price: 200
        }
    ])

    //! chang count total recalculation
    // const total = data.reduce((prev, curr) => {
    //     console.log("total recalculation")
    //     return prev + curr.price;
    // }, 0)

    const total = useMemo(() => {
        console.log("total recalculation")
        const rs = data.reduce((prev, curr) => {
            console.log("Total")
            return prev + curr.price;
        }, 0)
        return rs;
    }, [data])

    const handleClick = () => {
        const id = Math.floor(Math.random() * 100 + 2);
        const price = Math.floor(Math.random() * 1000 + 200);
        setData(prev => [...prev, { id, price }]);
    }
    return (
        <div>
            <h1>UseMemo</h1>
            <p>{count}</p>
            <h2>Total: {total}</h2>
            {
                data.map(item => {
                    return (
                        <div key={item.id}>
                            <p>Id: {item.id} - Price : {item.price}</p>
                        </div>
                    )
                })
            }
            <button onClick={handleClick}>Add data</button>
            <button onClick={() => setCount(count + 1)}>Count++</button>
        </div>
    )
}

export default UseMemo