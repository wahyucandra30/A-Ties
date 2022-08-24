// import axios from "axios";
// import { carDataTypes } from "../actionTypes/carDataTypes";

// export const getCarList = async (dispatch) => {
//     dispatch({ type: carDataTypes.loading, payload: true });
//     return await axios
//         (process.env.REACT_APP_BASE_API_URL + "/admin/car")
//         .then(res => {
//             dispatch({
//                 type: carDataTypes.list,
//                 payload: res.data
//             })
//             .then(dispatch({ type: carDataTypes.loading, payload: false }))
//         })
        
// }
// export const getCarById = async (dispatch, id) => {
//     dispatch({ type: carDataTypes.loading, payload: true });
//     return await axios
//         (process.env.REACT_APP_BASE_API_URL + "/admin/car/" + id)
//         .then(res => {
//             dispatch({
//                 type: carDataTypes.selection,
//                 payload: res.data
//             })
//             .then(dispatch({ type: carDataTypes.loading, payload: false }))
//         })
// }