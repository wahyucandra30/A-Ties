import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DashboardTable from "../components/DashboardTable";
import { logOut } from "../store/actions/userDataAction";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import DashboardContent from "../components/DashboardContent";

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pendinginList } = useSelector(state => state.pendinginDataReducer)
    const handleSetData = async () => {
        // const x = await getPendinginList(dispatch);
        // console.log(x)
        // dispatch({ type: pendinginDataTypes.list, payload: getPendinginList() })
    }
    useEffect(() => {
        document.title = "A-Ties - Dashboard";
        onAuthStateChanged(auth, (user) => {
            if (user) {
            }
            else {
                navigate("/login")
            }
            handleSetData();
        })
    }, [])
    return (
        <main className="flex items-center justify-center">
            <div className="flex flex-col items-center max-w-[1500px] w-full py-8 lg:px-32">
                <nav className="flex items-center justify-between w-full px-8 lg:px-0">
                    <img src="logo.png" alt="" className="w-36" />
                    <button onClick={() => logOut(dispatch, navigate)}
                        className="px-12 py-2 text-sm text-white font-bold bg-zinc-900 rounded-full hover:bg-zinc-700">
                        Logout
                    </button>
                </nav>
                <div className="mt-16 w-full px-12">
                    <h2 className="w-full text-lg font-bold mb-4">Daftar Pendingin Ruangan</h2>
                    {/* {getPendinginList(() => {
                        return <DashboardTable />
                    })} */}
                    {/* <DashboardTable dataList={pendinginList} /> */}
                    <DashboardContent />
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
