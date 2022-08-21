import { useEffect, useState} from 'react'

const Effectevent = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []) 
    return (
        <div>
            {width}
        </div>
    )
}

export default Effectevent