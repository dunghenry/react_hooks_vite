import React, { useCallback } from 'react'
import ChildCpn from './ChildCpn';
import axios from 'axios';
import Lists from './Lists';
const UseCallback = () => {
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState([])

    //Performance influence
    // const handleIncrement = () => {
    //     setCount(count + 1);
    // }

    const handleIncrement = useCallback(() => {
        setCount(prev => prev + 1);
    }, [])


    const fetchData = useCallback((url) => {
        return axios.get(url);
    }, []);

    //! Performance influence
    // const fetchData = ((url) => {
    //     return axios.get(url);
    // });

    const handleClick = () => {
        fetchData('https://jsonplaceholder.typicode.com/users').then((res) => setData(res.data))
    }
    return (
        <div>
            <h1>Memo Component</h1>
            {count}
            <ChildCpn onIncrement={handleIncrement} />
            <Lists fetchData={fetchData} />
            <button onClick={handleClick}>Get data</button>
        </div>
    )
}

export default UseCallback