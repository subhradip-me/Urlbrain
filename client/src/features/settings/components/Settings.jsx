import React, { useState } from 'react';
import { FaUser, FaCog, FaShieldAlt, FaBell } from 'react-icons/fa';

export default function Settings() {
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');

  return (
    <div className='w-full h-full bg-zinc-300 p-6'>
      <div className='w-full h-full bg-white rounded-lg shadow-lg p-6'>
        <h2 className='text-3xl font-bold text-zinc-800 mb-6'>Settings</h2>
        
        {/* Settings Navigation */}
        <div className='flex gap-4 mb-6 border-b'>
          <button
            onClick={() => setActiveSettingsTab('profile')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
              activeSettingsTab === 'profile' 
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaUser className="inline mr-2" />
            Profile
          </button>
          <button
            onClick={() => setActiveSettingsTab('preferences')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
              activeSettingsTab === 'preferences' 
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaCog className="inline mr-2" />
            Preferences
          </button>
          <button
            onClick={() => setActiveSettingsTab('security')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
              activeSettingsTab === 'security' 
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaShieldAlt className="inline mr-2" />
            Security
          </button>
          <button
            onClick={() => setActiveSettingsTab('notifications')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
              activeSettingsTab === 'notifications' 
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaBell className="inline mr-2" />
            Notifications
          </button>
        </div>

        {/* Settings Content */}
        <div className='mt-6'>
          {activeSettingsTab === 'profile' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-700'>Profile Settings</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-zinc-700 mb-1'>Username</label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-500'
                    placeholder='Enter username'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-zinc-700 mb-1'>Email</label>
                  <input
                    type='email'
                    className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-500'
                    placeholder='Enter email'
                  />
                </div>
              </div>
              <button className='px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-700'>
                Save Changes
              </button>
            </div>
          )}
          
          {activeSettingsTab === 'preferences' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-700'>Preferences</h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Dark Mode</span>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' className='sr-only peer' />
                    <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600'></div>
                  </label>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Auto-save URLs</span>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' className='sr-only peer' defaultChecked />
                    <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600'></div>
                  </label>
                </div>
              </div>
            </div>
          )}
          
          {activeSettingsTab === 'security' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-700'>Security Settings</h3>
              <div className='space-y-4'>
                <button className='w-full md:w-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700'>
                  Change Password
                </button>
                <button className='w-full md:w-auto px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700'>
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>
          )}
          
          {activeSettingsTab === 'notifications' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-700'>Notification Settings</h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Email Notifications</span>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' className='sr-only peer' defaultChecked />
                    <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600'></div>
                  </label>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Browser Notifications</span>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' className='sr-only peer' />
                    <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600'></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
