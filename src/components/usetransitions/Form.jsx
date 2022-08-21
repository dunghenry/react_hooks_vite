import React, { useDeferredValue, useTransition } from 'react'
import Name from './Name'
import names from '../../assets/data/index.json'
const Form = () => {
    const [searchInput, setSearchInput] = React.useState('');
    const [filterText, setFilterText] = React.useState('');
    const [isLoading, startTransition] = useTransition();

    //C1
    // const handleChange = (e) => {
    //     setSearchInput(e.target.value);
    //     startTransition(() => {
    //         setFilterText(e.target.value);
    //     })
    // }
    // const data = React.useMemo(() => {
    //     return names.map((name) => {
    //         const index = name.indexOf(filterText);
    //         return index === -1 ? <p>{name}</p> : <p>{name.slice(0, index)}<span style={{ backgroundColor: 'yellow' }}>{name.slice(index, index + filterText.length)}</span>{name.slice(index + filterText.length)}</p>
    //     })
    // }, [filterText])

    //C1
    // const deferedValue = useDeferredValue(searchInput);
    // const handleChange = (e) => {
    //     setSearchInput(e.target.value);
    // }
    // const data = React.useMemo(() => {
    //     return names.map((name) => {
    //         const index = name.indexOf(deferedValue);
    //         return index === -1 ? <p>{name}</p> : <p>{name.slice(0, index)}<span style={{ backgroundColor: 'yellow' }}>{name.slice(index, index + deferedValue.length)}</span>{name.slice(index + deferedValue.length)}</p>
    //     })
    // }, [deferedValue])

    //C2
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    const data = React.useMemo(() => {
        return names.map((name) => {
            const index = name.indexOf(searchInput);
            return index === -1 ? <p>{name}</p> : <p>{name.slice(0, index)}<span style={{ backgroundColor: 'yellow' }}>{name.slice(index, index + searchInput.length)}</span>{name.slice(index + searchInput.length)}</p>
        })
    }, [searchInput])
    return (
        <div>
            <h1>Form</h1>
            <input onChange={handleChange} value={searchInput} />
            {isLoading ? <p>Loading...</p> : <Name data={data} />}
        </div>
    )
}

export default Form