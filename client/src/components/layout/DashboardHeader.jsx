import React from 'react';

export default function DashboardHeader({ searchTerm, setSearchTerm, user }) {
  return (
    <div className='w-full h-[10vh] bg-zinc-100 mb-[1vh] rounded-3xl flex items-center justify-between px-4'>
      <h2 className='text-5xl text-zinc-950 font-bold rounded-xl'>Url_Manager</h2>
      <div className='flex items-center gap-4'>
        <div className='w-45 h-10 skew-x-12 rounded-b-xl bg-zinc-900 flex items-center justify-center text-white text-md text-center'>
          {new Date().toLocaleString('en-US', {weekday: 'long'})} || {new Date().toLocaleDateString()}
        </div>

        <div className="relative w-64">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-64 px-4 py-2 rounded-full bg-zinc-50 shadow-zinc-400 focus:outline-none shadow-lg focus:bg-white/50 focus:shadow-fuchsia-200"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div className='w-10 h-10 rounded-full bg-zinc-800'></div>
        <h2 className='text-lg'>
          {user ? user.username || user.name : "Loading..."}
        </h2>
      </div>
    </div>
  );
}
