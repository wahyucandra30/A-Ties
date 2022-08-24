import { pendinginDataTypes } from "../actionTypes/pendinginDataTypes";
const initialState = {
    pendinginList: []
};
const pendinginDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case pendinginDataTypes.list:
            return {
                ...state,
                pendinginList: action.payload
            };
        default: return { ...state };
    }
}

export default pendinginDataReducer;