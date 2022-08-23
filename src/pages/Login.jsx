import { useEffect } from "react";
function Login() {
  useEffect(() => {
    document.title = "A-Ties - Login";
  }, []);
  return (
    <main className="flex items-center justify-center">
      <div class="login-content">
        <form id="login-form" method="post">
          <div className="w-96">
            <h1 className="flex items-center justify-center text-3xl pt-40 pb-10">A-Ties</h1>
            <label className="text-sm py-2">Username</label>
            <input type="text" className="w-full py-2 mb-5 px-1 outlinew-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-teal-700" />

            <label className="text-sm pt-2">Password</label>
            <input type="password" className="w-full py-2 px-1 outlinew-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-teal-700" />
          </div>

          <button class="block w-full px-2 py-4 text-sm text-white bg-zinc-900 rounded-full mt-10 hover:bg-zinc-700 transition-all duration-200 delay-200 ease-in-out">Login</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
