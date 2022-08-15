import './App.css';
import React from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./styles/tailwind.css"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    document.title = "Home";
  }, [])

  return (
    <>
      <div className="bg-black fixed w-screen h-screen">

      </div>
      <div className="px-20 py-14 relative">
        <div className="relative flex items-center">
          <img src="/avatar.png" alt="" className="z-10" />
          <div className="bg-white w-3/4 h-40 px-16 py-11 -translate-x-10">
            <h1 className='text-3xl font-bold'>
              MUHAMMAD FACHRI RAMADHAN
            </h1>
            <h2 className="text-2xl text-[#F5C94E] font-bold">
              Fullstack Developer
            </h2>
          </div>
        </div>
        <div className="w-full flex-col items-center justify-center mt-9">
          <h1 className="text-[96px] font-bold text-white text-center">
            ABOUT ME
          </h1>
          <div className="w-full flex justify-center mt-24">
            <p className='text-white text-[28px] w-5/6'>
              Enthusiastic and highly motivated Informatics student with high initiative and looking for new challenges.
              Experienced in website development and information systems Development.
              Able to explain complex software problems in easy to understand terms.
            </p>
          </div>
        </div>
        <div className="w-[2000px] bg-[#F5C94E] h-[59px] absolute -left-10 -rotate-6 mt-24">
        </div>
      </div>
    </>
  );
}

export default App;
