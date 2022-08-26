import { ref, set, update } from "firebase/database";
import { Buildings, Clock, Door, Share, User, Warning, Wrench, X } from "phosphor-react";
import { useState } from "react";
import { database } from "../firebase/firebase-config";
const PendinginCard = ({ data, id }) => {
  const pendinginRef = ref(database, `pendingin/${id}`);
  const [showModal, setShowModal] = useState();
  const [solusi, setSolusi] = useState();
  const handleRawat = (e) => {
    e.preventDefault();
    update(pendinginRef, {
      ["kadaluarsa"]: "40",
    });
    // .then(() => {
    //     window.location.reload()
    // })
  };
  const handleSolusi = (e) => {
    e.preventDefault();
    update(pendinginRef, {
      ["penyelesaian"]: solusi,
    }).then(() => {
      setShowModal(false);
    });
  };
  const handlePerbaiki = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <div
          className="w-screen h-screen backdrop-blur-[2px] fixed z-10 top-0 left-0 flex justify-center items-center 
                bg-opacity-50 bg-gray-500"
        >
          <div className="bg-white rounded w-full lg:w-80 min-w-[128px] p-8 relative">
            <X size={21} className="text-gray-400 absolute top-6 right-8 cursor-pointer" onClick={() => setShowModal(false)} />
            <div className="flex items-center text-sm text-orange-400 gap-1 leading-0">
              <h1 className="text-lg flex items-end font-bold leading-0">{data?.masalah}</h1>
            </div>
            <h2 className="font-bold text-[14px]">Solusi Perbaikan</h2>
            <textarea
              onChange={(e) => setSolusi(e.target.value)}
              className="rounded-md w-full p-2 border-gray-300 border"
              rows="4"
              cols="50"
              draggable="false"
              placeholder="Beri catatan untuk perbaikan masalah mesin pendingin. Tenaga kerja lapangan akan mendapatkan catatan ini."
            ></textarea>
            <button onClick={handleSolusi} className="w-full bg-teal-600 rounded-md p-2 mt-2 text-white flex items-center justify-center font-bold text-[14px]">
              Kirim
            </button>
          </div>
        </div>
      )}
      <div className="border border-gray-300 drop-shadow-sm min-w-[128px] lg:w-56 w-full p-4 rounded-md relative flex flex-col gap-1 justify-between">
        <div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-none">Pendingin {data?.id}</h1>
            <h2 className="text-[12px] text-gray-400">
              Gedung {data?.gedung}, Ruang {data?.ruang}
            </h2>
          </div>
          <div
            className={`text-white px-4 rounded-full w-fit shadow-gray-300 mb-1
            ${data?.status === "Baik" ? "bg-emerald-500" : data?.status === "Bermasalah" ? "bg-orange-400" : "bg-red-500"}`}
          >
            {data?.status}
          </div>
          <ul className="flex flex-col gap-1">
            {data?.masalah?.length > 1 && (
              <li className="flex items-end text-sm text-orange-400 gap-1">
                <Warning size={21} className={"text-orange-400"} />
                <h2>{data?.masalah}</h2>
              </li>
            )}
            {/* <li className="flex items-end text-gray-500 gap-1">
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
                    </li> */}
            <li className={`flex items-end gap-1 ${data?.kadaluarsa > 18 ? "text-green-500" : data?.kadaluarsa > 0 ? "text-yellow-500" : "text-red-500"}`}>
              <Wrench size={21} />
              <abbr className={`text-sm border-none no-underline`} title={data?.kadaluarsa > 0 ? `${data?.kadaluarsa} hari sebelum jadwal perawatan` : `${data?.kadaluarsa * -1} hari terlambat perawatan`}>
                {data?.kadaluarsa > 0 ? data?.kadaluarsa : data?.kadaluarsa * -1}
                {data?.kadaluarsa > 0 ? " hari lagi" : " hari yang lalu"}
              </abbr>
            </li>
            {data?.masalah?.length > 1 && (
              <li className="flex items-end text-sm gap-1">
                <User size={21} />
                <h2>Pelapor: {data?.pelapor}</h2>
              </li>
            )}
          </ul>
        </div>
        <div className="w-full flex gap-2">
          <button
            onClick={handlePerbaiki}
            className={`w-full rounded-md p-2 mt-2 text-white flex items-center justify-center font-bold text-[14px] 
                ${data?.masalah?.length > 1 ? "bg-zinc-600" : "bg-slate-300"}`}
            disabled={data?.masalah?.length < 2}
          >
            Perbaiki
          </button>
          <button onClick={handleRawat} className="w-full bg-teal-600 rounded-md p-2 mt-2 text-white flex items-center justify-center font-bold text-[14px]">
            Rawat
          </button>
        </div>
      </div>
    </>
  );
};
export default PendinginCard;
