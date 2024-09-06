const initialState = {
    token: null,
    user: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            localStorage.setItem("token", action.payload)
            return {
                ...state,
                token: action.payload
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default reducer