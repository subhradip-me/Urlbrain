import React, {useState, useEffect} from 'react'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { LuLink } from "react-icons/lu";
import { API } from '../api/auth';


import Das from '../components/Das'
import UrlShortner from '../components/UrlShortner';
import Analytics from '../components/Analytics';

export default function Dashboard() {
    
     const[activeTab, setActiveTab] = useState('dashboard');
     const [urlData, setUrlData] = useState([]);
     const [searchTerm, setSearchTerm] = useState('');
     const [user, setUser] = useState(null);


  useEffect(() => {
    async function fetchUrls() {
      try {
        const res = await API.get('/urls'); // 👈 token auto-injected by interceptor
        console.log("Fetched URLs:", res.data); // 🔍 Check what comes back
        const cleaned = res.data.map(item => ({
          ...item,
          tags: Array.isArray(item.tags) ? item.tags : []
        }));
        setUrlData(cleaned); // ✅ sets in UI
      } catch (err) {
        console.error('❌ Failed to fetch URLs:', err.response?.data || err.message);
        alert('Please Login ');
        window.location.href = '/form'; // Redirect to login on error
      }
    }
    fetchUrls();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await API.get('/user/profile'); // Fetch current user
        setUser(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch user:', err.response?.data || err.message);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // or your login route
  };

  return (
    <>
        <div className='w-full h-screen flex items-center gap-5 justify-center bg-zinc-100'>

            {/*  Navigation */}

            <div className='w-[3vw] h-[95vh] relative rounded-4xl rounded-b-3xl bg-zinc-900 overflow-hidden'>
                <div className='w-full h-[10vh] flex items-center mb-4 justify-center'>
                    <h1 className='text-white text-2xl font-bold'>
                        <FaLink className="text-2xl" />
                    </h1>
                </div>
                <ul>
                    <li onClick={() => setActiveTab('dashboard')} className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer 
                      ${activeTab === 'dashboard' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}  `}>
                        <TbLayoutDashboardFilled />
                    </li>
                    <li onClick={() => setActiveTab('links')} className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer
                      ${activeTab === 'links' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}  `}>
                        <LuLink />
                    </li>
                    <li onClick={() => setActiveTab('analytics')} className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer
                      ${activeTab === 'analytics' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}  `}>
                        <SiGoogleanalytics />
                    </li>
                    <li onClick={() => setActiveTab('settings') } className={`text-white text-2xl rounded-4xl p-3 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer
                      ${activeTab === 'settings' ? 'bg-zinc-100 text-zinc-900 font-bold shadow' : ''}  `}>
                        <IoMdSettings />
                    </li>
                    <li onClick={handleLogout} className='absolute bottom-0 text-white text-2xl p-3 hover:bg-zinc-100 hover:text-zinc-900 rounded-2xl cursor-pointer'>
                        <RiLogoutBoxRFill />
                    </li>
                </ul>
            </div>

            {/* Dashboard panel*/}
            <div className='w-[90vw] h-[95vh] rounded-3xl bg-zinc-100'>

                {/* Dashboard header*/}
                <div className='w-full h-[10vh] bg-zinc-100 mb-[1vh] rounded-3xl flex items-center justify-between px-4'>
                    <h2 className='text-5xl text-zinc-950 font-bold rounded-xl'> Url_Manager </h2>
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
                        <h2 className='text-lg '>
                          {user ? user.username || user.name : "Loading..."}
                        </h2>
                    </div>
                </div>

                {/* Dashboard content*/}
                <div className='w-full h-[84vh] bg-zinc-200 rounded-4xl overflow-hidden flex items-center justify-center'>
                    {activeTab === 'dashboard' && <Das data={urlData} setUrlData={setUrlData} searchTerm={searchTerm} />}
                    {activeTab === 'links' && <UrlShortner setActiveTab={setActiveTab} />}
                    {activeTab === 'analytics' && <Analytics />}                
                    {activeTab === 'settings' && <div className='text-2xl text-zinc-800'>Settings Content</div>}
                </div>


            </div>
        </div>

        
    </>
  )
}
