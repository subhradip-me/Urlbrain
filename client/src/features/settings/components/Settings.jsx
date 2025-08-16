import React, { useState } from 'react';
import { FaUser, FaCog, FaShieldAlt, FaBell } from 'react-icons/fa';

export default function Settings() {
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');

  return (
    <div className="w-full h-full bg-zinc-300 p-6">
      <div className="w-full h-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-zinc-800 mb-6">Settings</h2>
        
        {/* Settings Navigation */}
        <div className="flex gap-4 mb-6 border-b">
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
            onClick={() => setActiveSettingsTab('general')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
              activeSettingsTab === 'general'
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaCog className="inline mr-2" />
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
        <div className="h-full overflow-y-auto">
          {activeSettingsTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Profile Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="Tell us about yourself"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="px-6 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeSettingsTab === 'general' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">General Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-zinc-200">
                  <div>
                    <h4 className="font-medium text-zinc-800">Theme</h4>
                    <p className="text-sm text-zinc-600">Choose your preferred theme</p>
                  </div>
                  <select className="px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-zinc-200">
                  <div>
                    <h4 className="font-medium text-zinc-800">Language</h4>
                    <p className="text-sm text-zinc-600">Select your preferred language</p>
                  </div>
                  <select className="px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-zinc-200">
                  <div>
                    <h4 className="font-medium text-zinc-800">Auto-save</h4>
                    <p className="text-sm text-zinc-600">Automatically save your work</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeSettingsTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Security Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-zinc-800 mb-3">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        placeholder="Enter current password"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        placeholder="Enter new password"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  
                  <button className="mt-4 px-6 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500">
                    Update Password
                  </button>
                </div>
                
                <div className="border-t border-zinc-200 pt-6">
                  <h4 className="font-medium text-zinc-800 mb-3">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm text-zinc-600">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-md hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSettingsTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">Notification Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-zinc-200">
                  <div>
                    <h4 className="font-medium text-zinc-800">Email Notifications</h4>
                    <p className="text-sm text-zinc-600">Receive notifications via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-zinc-200">
                  <div>
                    <h4 className="font-medium text-zinc-800">Push Notifications</h4>
                    <p className="text-sm text-zinc-600">Receive push notifications in your browser</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-zinc-200">
                  <div>
                    <h4 className="font-medium text-zinc-800">SMS Notifications</h4>
                    <p className="text-sm text-zinc-600">Receive notifications via SMS</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-zinc-200">
                  <div>
                    <h4 className="font-medium text-zinc-800">Marketing Emails</h4>
                    <p className="text-sm text-zinc-600">Receive promotional and marketing emails</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"></div>
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
