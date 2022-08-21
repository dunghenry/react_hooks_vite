import React, { useDeferredValue } from 'react'
const Name = ({data}) => {
  const deferedValue = useDeferredValue(data)
  return (
    <div>
        <h1>List Name</h1>
        {deferedValue.map((name, index) => <div key={index}>{name}</div>)}
    </div>
  )
}

export default Name