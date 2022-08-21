export const increase = () => {
    return (
        {
            type: 'increaseone'
        }
    )
}

export const increaseValue = (payload) => {
    return (
        {
            type: 'increasepayload',
            payload
        }
    )
}