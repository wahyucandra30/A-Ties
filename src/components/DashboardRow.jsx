const DashboardRow = ({gedung, ruang, hari, pelapor, status, tindak, penyelesaian}) => {
    return (
        <>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {gedung}
                </th>
                <td class="py-4 px-6">
                    {ruang}
                </td>
                <td class="py-4 px-6">
                    {hari}
                </td>
                <td class="py-4 px-6">
                    {pelapor}
                </td>
                <td class="py-4 px-6">
                    {status}
                </td>
                <td class="py-4 px-6">
                    {tindak}
                </td>
                <td class="py-4 px-6">
                    {penyelesaian}
                </td>
            </tr>
        </>
    )
}
export default DashboardRow;