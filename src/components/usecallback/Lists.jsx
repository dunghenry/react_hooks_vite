import React, { memo } from 'react'

const Lists = ({ fetchData }) => {
    const [data, setData] = React.useState([]);
    console.log("Cpn Lists Render");
    React.useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/posts').then((res) => setData(res.data))
    }, [fetchData]);
    return (
        <div>
            Lists

        </div>
    )
}

export default memo(Lists)