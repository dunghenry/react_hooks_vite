export const initialState = {
    count: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increaseone":
            return {
                ...state,
                count: state.count + 1
            }
        case "increasepayload":
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state
    }
}

export default reducer