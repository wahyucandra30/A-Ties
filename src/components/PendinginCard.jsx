import { Buildings, Clock, Door, Share, Wrench } from "phosphor-react"
const PendinginCard = ({ data, id }) => {
    return (
        <div className="border border-gray-300 drop-shadow-sm min-w-[128px] lg:w-56 w-full p-4 rounded-md relative flex flex-col gap-1">
            <h1 className="text-base font-bold">
                Pendingin {id ? id : 0}
            </h1>
            <div className={`text-white font-bold px-4 rounded-full w-fit shadow-gray-300 mb-1
            ${data?.status === "Baik" ?
                    "bg-emerald-500" :
                    data?.status === "Bermasalah" ?
                        "bg-orange-400" : "bg-red-500"}`}>
                {data?.status}
            </div>
            <ul className="flex flex-col gap-1">
                <li className="flex items-end text-gray-500 gap-1">
                    <Buildings size={21} className={"text-gray-400"} />
                    <h2 className="text-sm">
                        Gedung {data?.gedung}
                    </h2>
                </li>
                <li className="flex items-end text-gray-500 gap-1">
                    <Door size={21} className={"text-gray-400"} />
                    <h2 className="text-sm">
                        Ruang {data?.ruang}
                    </h2>
                </li>
                <li className={`flex items-end gap-1 ${data?.kadaluarsa > 18 ? "text-green-500"
                    : data?.kadaluarsa > 0 ? "text-yellow-500" : "text-red-500"}`}>
                    <Wrench size={21} />
                    <h2 className={`text-sm `}>
                        {data?.kadaluarsa > 0 ? data?.kadaluarsa : data?.kadaluarsa * -1}
                        {data?.kadaluarsa > 0 ? " hari lagi" : " hari yang lalu"}
                    </h2>
                </li>
            </ul>
            <button className="w-full bg-emerald-500 rounded-md p-2 mt-2 text-white flex items-center justify-center font-bold text-[14px]">
                Detail
            </button>
        </div >
    )
}
export default PendinginCard;