import { useEffect } from "react";
import DashboardTable from "../components/DashboardTable";
function Dashboard() {
    useEffect(() => {
        document.title = "A-Ties - Dashboard";
    }, [])
    return (
        <main className="flex items-center justify-center">
            <div className="flex flex-col items-center max-w-[1500px] w-full py-8 px-32">
                <nav className="flex items-center justify-between w-full">
                    <img src="logo.png" alt="" className="w-36"/>
                    {/* <h1 className="text-2xl">
                        A-Ties
                    </h1> */}
                    <button class="px-12 py-2 text-sm text-white font-bold bg-zinc-900 rounded-full hover:bg-zinc-700">
                        Logout
                    </button>
                </nav>
                <div className="mt-16">
                    <h2 className="w-full text-lg font-bold mb-4">Daftar Pendingin Ruangan</h2>
                    <DashboardTable />
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
