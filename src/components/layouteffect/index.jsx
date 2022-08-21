
import React from 'react'

const LayoutEffect = () => {
    //Cập nhật lại state
    //Cập nhật DOM
    //Gọi cleanup function nếu deps thay đổi sync
    //Gọi useLayoutEffect callback sync
    //Render lại UI

    const [count, setCount] = React.useState(0);
    const handleCount = () => {
        setCount(count + 1)
    }
    React.useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])

    //Impact on the user interface
    // React.useEffect(() => {
    //     if (count > 3) {
    //         setCount(0)
    //     }
    // }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Count++</button>
        </div>
    )
}

export default LayoutEffect