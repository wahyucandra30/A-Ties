import { auth } from "../../firebase/firebase-config"
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth"
import axios from "axios"

// export const loginWithEmailandPassword = async (dispatch, email, password, navigate) => {
//     return setPersistence(auth, browserLocalPersistence)
//         .then(() => {
//             const { data } = await axios.post(process.env.REACT_APP_BASE_API_ADMIN_LOGIN, { "email": email, "password": password })
//             dispatch({ type: "SET_USER_DATA", payload: data });
//         })
//         .catch(err => console.log(err))
//         .then(navigate("/"))
// }
export const loginWithEmailandPassword = async (email, password) => {
    return setPersistence(auth, browserLocalPersistence)
        .then(async () => {
            try {
                await signInWithEmailAndPassword(auth, email, password)
            }
            catch (err) {
                console.log(err.code);
                console.log(err.message);
            }
})
}
export const logOut = async (dispatch, navigate) => {
    return auth.signOut()
        .then(() => {
            dispatch({ type: "SET_USER_DATA", payload: null });
            navigate("/login");
        });
}