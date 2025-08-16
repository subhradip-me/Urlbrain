import React from 'react';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { LuLink } from "react-icons/lu";

export default function Navigation({ activeTab, setActiveTab, handleLogout }) {
  return (
    <div className='w-[3vw] h-[95vh] relative rounded-4xl rounded-b-3xl bg-zinc-900 overflow-hidden'>
      <div className='w-full h-[10vh] flex items-center mb-4 justify-center'>
        <h1 className='text-white text-2xl font-bold'>
          <FaLink className="text-2xl" />
        </h1>
      </div>
      <ul>
        <li 
          onClick={() => setActiveTab('dashboard')} 
          className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer 
            ${activeTab === 'dashboard' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}`}
        >
          <TbLayoutDashboardFilled />
        </li>
        <li 
          onClick={() => setActiveTab('links')} 
          className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer
            ${activeTab === 'links' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}`}
        >
          <LuLink />
        </li>
        <li 
          onClick={() => setActiveTab('analytics')} 
          className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer
            ${activeTab === 'analytics' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}`}
        >
          <SiGoogleanalytics />
        </li>
        <li 
          onClick={() => setActiveTab('settings')} 
          className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer
            ${activeTab === 'settings' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}`}
        >
          <IoMdSettings />
        </li>
        <li 
          onClick={handleLogout} 
          className='absolute bottom-0 text-white text-2xl p-3 hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl cursor-pointer'
        >
          <RiLogoutBoxRFill />
        </li>
      </ul>
    </div>
  );
}
