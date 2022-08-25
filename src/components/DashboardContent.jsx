import PendinginCard from "./PendinginCard";
import { useList } from "react-firebase-hooks/database"
import { ref } from "firebase/database";
import { database } from "../firebase/firebase-config";
const DashboardContent = () => {
    const [snapshots, loading, error] = useList(ref(database, "pendingin/"))
    return (
        <div className="w-full flex flex-wrap gap-4">
            {snapshots?.map((data, id) => {
                return <PendinginCard data={data.val()} id={data?.key}  />
            })}
        </div>
    )
}
export default DashboardContent;