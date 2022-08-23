import DashboardRow from "./DashboardRow";

const DashboardTable = () => {
    const dummyDate = new Date(2022, 8, 22, 17, 39, 12);
    return (
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
                    <DashboardRow gedung={"Rektorat"} ruang={"Rapat Utama"} 
                    pelapor={"Sunandar"} hari={dummyDate.toLocaleDateString()}
                    status={0} tindak={0} penyelesaian={"-"}/>
                    <DashboardRow gedung={"Rektorat"} ruang={"Rapat Utama"} 
                    pelapor={"Sunandar"} hari={dummyDate.toLocaleDateString()}
                    status={0} tindak={0} penyelesaian={"-"}/>
                    <DashboardRow gedung={"Rektorat"} ruang={"Rapat Utama"} 
                    pelapor={"Sunandar"} hari={dummyDate.toLocaleDateString()}
                    status={0} tindak={0} penyelesaian={"-"}/>
                </tbody>
            </table>
        </div>

    )
}
export default DashboardTable;