import { useEffect } from "react";
function Dashboard() {
    useEffect(() => {
        document.title = "A-Ties - Dashboard";
    }, [])
    return (
        <div>
            <h1 className="text-2xl">Dashboard</h1>
        </div>
    );
}

export default Dashboard;
