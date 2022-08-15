import { carDataTypes } from "../actionTypes/carDataTypes";

const initialState = {
    carList: [],
    carSelection: {},
    carSpecs: {
        capacity: 4,
        transmission: "Manual",
        productionYear: 2020
    },
    isLoading: false
};
const carDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case carDataTypes.list:
            return {
                ...state,
                carList: action.payload
            };
        case carDataTypes.selection:
            return {
                ...state,
                carSelection: action.payload
            };
        case carDataTypes.loading:
            return {
                ...state,
                isLoading: action.payload
            };
        default: return { ...state };
    }
}

export default carDataReducer;