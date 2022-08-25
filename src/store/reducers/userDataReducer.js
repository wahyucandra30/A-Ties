const initialState = {
    email: "",
    password: "",
}

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                email: action.email,
                password: action.password
            };
        default: return { ...state };
    }
}

export default userDataReducer;