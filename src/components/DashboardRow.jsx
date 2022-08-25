const DashboardRow = ({data}) => {
    return (
        <>
            <tr 
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data?.gedung}
                </th>
                <td class="py-4 px-6">
                    {data?.ruang}
                </td>
                <td class="py-4 px-6">
                    {data?.hari ? data.hari : "-"}
                </td>
                <td class="py-4 px-6">
                    {data?.pelapor ? data.pelapor : "-"}
                </td>
                <td class="py-4 px-6">
                    {data?.status ? data.status : "-"}
                </td>
                <td class="py-4 px-6">
                    {data?.tindak ? data.tindak : "-"}
                </td>
                <td class="py-4 px-6">
                    {data?.penyelesaian ? data.penyelesaian : "-"}
                </td>
            </tr>
        </>
    )
}
export default DashboardRow;