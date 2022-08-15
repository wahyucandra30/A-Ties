const initialState = {
    userData: {},
    role: ""
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                userData: action.payload? action.payload : {},
                role: action.payload?.role? action.payload.role : ""
            };
        default: return { ...state };
    }
}

export default loginReducer;