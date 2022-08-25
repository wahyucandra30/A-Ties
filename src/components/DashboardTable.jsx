import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardRow from "./DashboardRow";
import { useList } from "react-firebase-hooks/database"
import { ref } from "firebase/database";
import { database } from "../firebase/firebase-config";

const DashboardTable = ({ dataList }) => {
    const [snapshots, loading, error] = useList(ref(database, "pendingin/"))
    useEffect(() => {
        console.log(snapshots)
    }, [])
    return (
        <>
            {loading ?
                <>
                    Loading
                </>
                :
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Gedung
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Ruangan
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Hari Perbaikan
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Pelapor
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Tindak Lanjut
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Deskripsi Penyelesaian
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {snapshots?.map((data) => {
                                return <DashboardRow data={data.val()} />
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </>

    )
}
export default DashboardTable;