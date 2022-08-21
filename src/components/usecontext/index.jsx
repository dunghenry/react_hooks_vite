import React, { createContext } from 'react'
export const AppContext = createContext();
const UseContext = ({ children }) => {
    const [count, setCount] = React.useState(0)
    const data = { count, setCount };
    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider >
    )
}

export default UseContext