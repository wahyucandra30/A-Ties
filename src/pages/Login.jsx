import { useEffect } from "react";
function Login() {
    useEffect(() => {
        document.title = "A-Ties - Login";
    }, [])
    return (
        <div>
            <h1 className="text-2xl">
                Login
            </h1>
        </div>
    );
}

export default Login;
