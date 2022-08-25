import { useEffect } from "react";
import { loginWithEmailandPassword } from "../store/actions/userDataAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    loginWithEmailandPassword(email, password).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  useEffect(() => {
    document.title = "A-Ties - Login";
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
      }
    });
  }, []);

  return (
    <main className="flex items-center justify-center">
      <div className="login-content">
        <form id="login-form" onSubmit={handleLogin}>
          <div className="w-96">
            <h1 className="flex items-center justify-center text-3xl pt-40 pb-10">A-Ties</h1>
            <label className="text-sm py-2">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} className="w-full py-2 mb-5 px-1 outlinew-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-teal-700" />

            <label className="text-sm pt-2">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full py-2 px-1 outlinew-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-teal-700" />
          </div>
          <input type="submit" value={"Login"} className="block w-full px-2 py-4 text-sm text-white bg-zinc-900 rounded-full mt-10 hover:bg-zinc-700 transition-all duration-200 delay-200 ease-in-out" />
        </form>
      </div>
    </main>
  );
}

export default Login;
