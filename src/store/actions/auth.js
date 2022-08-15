import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { auth } from "../../firebase/firebase-config"
import { browserLocalPersistence, setPersistence } from "firebase/auth"
import axios from "axios"

export const registerWithEmailandPassword = async (email, password, failed, success) => {
    if (email !== "" || password.length >= 6) {
        return setPersistence(auth, browserLocalPersistence)
            .then(async () => {
                try {
                    let role = "customer"
                    if (email.includes("admin")) {
                        role = "admin"
                    }
                    console.log(role);
                    const data = await axios.post(process.env.REACT_APP_BASE_API_ADMIN_REGISTER, { "email": email, "password": password, "role": role })
                    console.log(data);
                    failed(false);
                    success(true);
                }
                catch (err) {
                    console.log(err)
                    failed(true);
                    success(false);
                }
            })
    }
    else {
        failed(true);
        success(false);
        return null;
    }
}
export const loginWithEmailandPassword = async (dispatch, email, password, navigate, failed) => {
    if (email !== "" || password.length >= 6) {
        failed(false);
        return setPersistence(auth, browserLocalPersistence)
            .then(async () => {
                try {
                    const { data } = await axios.post(process.env.REACT_APP_BASE_API_ADMIN_LOGIN, { "email": email, "password": password })
                    dispatch({ type: "SET_USER_DATA", payload: data });

                    if (data.role === "admin") {
                        navigate("/admin")
                    }
                    else {
                        navigate("/")
                    }
                }
                catch (err) {
                    failed(true);
                    console.log(err);
                }
            })
    }
    else {
        failed(true);
        return null;
    }
}
export const loginWithGoogle = (dispatch, navigate) => {
    const provider = new GoogleAuthProvider();
    return async () => {
        setPersistence(auth, browserLocalPersistence)
            .then(async () => {
                const data = await signInWithPopup(auth, provider)
                dispatch({ type: "SET_USER_DATA", payload: data });
                navigate("/");
            })

    }
}
export const loginWithFacebook = (dispatch, navigate) => {
    const provider = new FacebookAuthProvider();
    return async () => {
        setPersistence(auth, browserLocalPersistence)
            .then(async () => {
                const data = await signInWithPopup(auth, provider)
                dispatch({ type: "SET_USER_DATA", payload: data });
                navigate("/");
            })
    }
}
export const logOut = (dispatch, navigate) => {
    return auth.signOut()
        .then(() => {
            dispatch({ type: "SET_USER_DATA", payload: null });
            navigate("/login");
        });
}