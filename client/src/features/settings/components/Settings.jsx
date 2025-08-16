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
            <FaUser className='inline mr-2' />
            Profile
          </button>
          <button
            onClick={() => setActiveSettingsTab('general')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
              activeSettingsTab === 'general'
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaCog className='inline mr-2' />
            General
          </button>
          <button
            onClick={() => setActiveSettingsTab('security')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
              activeSettingsTab === 'security'
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaShieldAlt className='inline mr-2' />
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
            <FaBell className='inline mr-2' />
            Notifications
          </button>
        </div>

        {/* Settings Content */}
        <div className='h-full overflow-y-auto'>
          {activeSettingsTab === 'profile' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-800'>Profile Settings</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-zinc-700 mb-2'>Full Name</label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500'
                    placeholder='Enter your full name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-zinc-700 mb-2'>Email</label>
                  <input
                    type='email'
                    className='w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500'
                    placeholder='Enter your email'
                  />
                </div>
              </div>
            </div>
          )}

          {activeSettingsTab === 'general' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-800'>General Settings</h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Dark Mode</span>
                  <input type='checkbox' className='toggle' />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Auto-save URLs</span>
                  <input type='checkbox' className='toggle' />
                </div>
              </div>
            </div>
          )}

          {activeSettingsTab === 'security' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-800'>Security Settings</h3>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-zinc-700 mb-2'>Current Password</label>
                  <input
                    type='password'
                    className='w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500'
                    placeholder='Enter current password'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-zinc-700 mb-2'>New Password</label>
                  <input
                    type='password'
                    className='w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500'
                    placeholder='Enter new password'
                  />
                </div>
              </div>
            </div>
          )}

          {activeSettingsTab === 'notifications' && (
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-zinc-800'>Notification Settings</h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Email Notifications</span>
                  <input type='checkbox' className='toggle' />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-zinc-700'>Push Notifications</span>
                  <input type='checkbox' className='toggle' />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}