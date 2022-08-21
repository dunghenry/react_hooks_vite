import React from 'react'
import axios from 'axios';
import Effectevent from './effectevent';
const Effect = () => {
    const [countdown, setCountdown] = React.useState(100);
    const [title, setTitle] = React.useState("comments");
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
    }, [])
    //Cleanup function luôn được gọi trước khi component unmounted
    //Cleanup function luôn được gọi trước khi callback được gọi trừ lần đầu tiên
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         console.log(countdown)
    //         setCountdown(countdown - 1);
    //     }, 1000);
    // }, [countdown])

    React.useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/${title}?_limit=3`);
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        setTimeout(() => {
            fetchData();
        }, 5000);
        return () => controller.abort();
    }, [title])

    const handleChange = () => {
        setTitle("posts");
    }
    return (
        <div>
            {countdown}
            <Effectevent/>
            <button onClick={handleChange}>Change Title</button>
        </div>
    )
}

export default Effect

