<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b843a51665704229e8d1f657919ce2d1e1395163
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
<<<<<<< HEAD
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
=======
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
>>>>>>> b843a51665704229e8d1f657919ce2d1e1395163
          </button>
          <button
            onClick={() => setActiveSettingsTab('security')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
<<<<<<< HEAD
              activeSettingsTab === 'security'
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaShieldAlt className='inline mr-2' />
=======
              activeSettingsTab === 'security' 
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaShieldAlt className="inline mr-2" />
>>>>>>> b843a51665704229e8d1f657919ce2d1e1395163
            Security
          </button>
          <button
            onClick={() => setActiveSettingsTab('notifications')}
            className={`px-4 py-2 font-medium rounded-t-lg ${
<<<<<<< HEAD
              activeSettingsTab === 'notifications'
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaBell className='inline mr-2' />
=======
              activeSettingsTab === 'notifications' 
                ? 'bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900' 
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <FaBell className="inline mr-2" />
>>>>>>> b843a51665704229e8d1f657919ce2d1e1395163
            Notifications
          </button>
        </div>

        {/* Settings Content */}
<<<<<<< HEAD
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
=======
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
=======
import React, { useState, useRef, useEffect } from 'react';
import { 
  FaUser, FaCog, FaRobot, FaPlug, FaLock, FaCamera, FaEdit, FaSave, 
  FaEye, FaEyeSlash, FaBell, FaPalette, FaGlobe, FaClock, FaKey,
  FaGoogle, FaGithub, FaSlack, FaDiscord, FaTwitter, FaLinkedin,
  FaDownload, FaUpload, FaTrash, FaCheck, FaTimes, FaChevronDown, FaSearch,
  FaSpinner
} from 'react-icons/fa';
import { API } from '../../../api/auth';

// Custom Dropdown Component
function CustomDropdown({ options, value, onChange, placeholder, searchable = false, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          onChange(filteredOptions[focusedIndex].value);
          setIsOpen(false);
          setSearchTerm("");
          setFocusedIndex(-1);
        }
        break;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`
          w-full px-4 py-2 pr-10
          bg-white dark:bg-zinc-600 border-1 rounded-xl
          text-left text-zinc-900 dark:text-zinc-100 font-medium
          transition-all duration-200
          
        
          ${isOpen ? "border-zinc-400 dark:border-zinc-500 ring-1 ring-zinc-300/10 dark:ring-zinc-600/10" : "border-zinc-300 dark:border-zinc-600"}
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {selectedOption?.flag && <span className="text-lg">{selectedOption.flag}</span>}
            <span className="truncate">
              {selectedOption ? selectedOption.label : placeholder}
              {selectedOption?.offset && <span className="text-zinc-500 dark:text-zinc-400 ml-2">({selectedOption.offset})</span>}
            </span>
          </div>
          <FaChevronDown
            className={`w-3 h-4 text-zinc-700 dark:text-zinc-300 text-md transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-xl shadow-lg overflow-hidden">
          {searchable && (
            <div className="p-3 border-b border-zinc-100 dark:border-zinc-700">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-500 w-4 h-4" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setFocusedIndex(-1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm focus:outline-none focus:ring- focus:ring-zinc-300/10 dark:focus:ring-zinc-600/10 focus:border-zinc-300 dark:focus:border-zinc-500"
                />
>>>>>>> b843a51665704229e8d1f657919ce2d1e1395163
              </div>
            </div>
          )}

<<<<<<< HEAD
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
=======
          <div className="max-h-60 overflow-y-auto no-scrollbar">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-zinc-500 dark:text-zinc-400 text-center">No options found</div>
            ) : (
              filteredOptions.map((option, index) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm("");
                    setFocusedIndex(-1);
                  }}
                  className={`
                    w-full px-4 py-2 text-left
                    flex items-center space-x-3
                    transition-colors duration-150
                    ${index === focusedIndex ? "bg-zinc-100 dark:bg-zinc-700" : "hover:bg-zinc-50 dark:hover:bg-zinc-700"}
                    ${option.value === value ? "bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" : "text-zinc-900 dark:text-zinc-100"}
                  `}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.flag && <span className="text-lg flex-shrink-0">{option.flag}</span>}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{option.label}</div>
                    {option.offset && <div className="text-sm text-zinc-500 dark:text-zinc-400">{option.offset}</div>}
                  </div>
                  {option.value === value && <FaCheck className="w-4 h-4 text-zinc-900 dark:text-zinc-100 flex-shrink-0" />}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Settings({ user, setUser }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    bio: '',
    location: '',
    website: '',
    phone: ''
  });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    notifications: true,
    soundEffects: true,
    animations: true
  });
  const [aiSettings, setAiSettings] = useState({
    autoSuggestTags: true,
    autoSummarize: true,
    aiModel: 'gemini-pro',
    summaryLength: 'medium',
    confidenceThreshold: 0.7,
    language: 'english'
  });
  const [integrations, setIntegrations] = useState({
    google: false,
    github: false,
    slack: false,
    discord: false,
    twitter: false,
    linkedin: false
  });
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: '24h',
    passwordLastChanged: '2024-01-15'
  });
  const fileInputRef = useRef(null);

  // Initialize form data when user prop changes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        bio: user.bio || '',
        location: user.location || '',
        website: user.website || '',
        phone: user.phone || ''
      });
    }
    
    // Load saved preferences from localStorage
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      const parsedPreferences = JSON.parse(savedPreferences);
      setPreferences(parsedPreferences);
      applyTheme(parsedPreferences.theme);
    } else {
      // Apply default theme
      applyTheme('light');
    }
    
    const savedAiSettings = localStorage.getItem('aiSettings');
    if (savedAiSettings) {
      setAiSettings(JSON.parse(savedAiSettings));
    }
    
    const savedSecurity = localStorage.getItem('securitySettings');
    if (savedSecurity) {
      setSecurity(JSON.parse(savedSecurity));
    }
  }, [user]);

  // Listen for system theme changes when auto mode is selected
  useEffect(() => {
    if (preferences.theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('auto');
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [preferences.theme]);

  // Show message helper
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  // Save profile data
  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        setIsEditing(false);
        showMessage('success', 'Profile updated successfully!');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      showMessage('error', 'Failed to update profile. Please try again.');
    }
    setLoading(false);
  };

  // Handle password change
  const handlePasswordChange = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      showMessage('error', 'New passwords do not match');
      return;
    }
    
    if (passwords.newPassword.length < 6) {
      showMessage('error', 'Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword
        })
      });

      if (response.ok) {
        setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setSecurity(prev => ({ ...prev, passwordLastChanged: new Date().toISOString().split('T')[0] }));
        showMessage('success', 'Password updated successfully!');
      } else {
        throw new Error('Failed to update password');
      }
    } catch (error) {
      showMessage('error', 'Failed to update password. Please check your current password.');
    }
    setLoading(false);
  };

  // Apply theme function
  const applyTheme = (theme) => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('--bg-primary', '#18181b');
      root.style.setProperty('--bg-secondary', '#27272a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#a1a1aa');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f4f4f5');
      root.style.setProperty('--text-primary', '#09090b');
      root.style.setProperty('--text-secondary', '#71717a');
    } else if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.style.setProperty('--bg-primary', '#18181b');
        root.style.setProperty('--bg-secondary', '#27272a');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#a1a1aa');
      } else {
        root.classList.remove('dark');
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--bg-secondary', '#f4f4f5');
        root.style.setProperty('--text-primary', '#09090b');
        root.style.setProperty('--text-secondary', '#71717a');
      }
    }
  };

  // Save preferences
  const handleSavePreferences = (newPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
    
    // Apply theme immediately
    applyTheme(newPreferences.theme);
    
    showMessage('success', 'Preferences saved successfully!');
  };

  // Save AI settings
  const handleSaveAiSettings = (newAiSettings) => {
    setAiSettings(newAiSettings);
    localStorage.setItem('aiSettings', JSON.stringify(newAiSettings));
    showMessage('success', 'AI settings saved successfully!');
  };

  // Save security settings
  const handleSaveSecuritySettings = (newSecurity) => {
    setSecurity(newSecurity);
    localStorage.setItem('securitySettings', JSON.stringify(newSecurity));
    showMessage('success', 'Security settings saved successfully!');
  };

  // Handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showMessage('error', 'File size must be less than 5MB');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', file);

    setLoading(true);
    try {
      const response = await fetch('/api/user/upload-profile-picture', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        setUser(prev => ({ ...prev, profilePicture: result.profilePictureUrl }));
        showMessage('success', 'Profile picture updated successfully!');
      } else {
        throw new Error('Failed to upload profile picture');
      }
    } catch (error) {
      showMessage('error', 'Failed to upload profile picture. Please try again.');
    }
    setLoading(false);
  };

  // Export user data
  const handleExportData = async () => {
    try {
      const response = await fetch('/api/user/export', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `linkvault-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        showMessage('success', 'Data exported successfully!');
      } else {
        throw new Error('Failed to export data');
      }
    } catch (error) {
      showMessage('error', 'Failed to export data. Please try again.');
    }
  };

  // End all sessions
  const handleEndAllSessions = async () => {
    if (!confirm('Are you sure you want to end all sessions? You will be logged out.')) {
      return;
    }

    try {
      const response = await fetch('/api/auth/logout-all', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      } else {
        throw new Error('Failed to end sessions');
      }
    } catch (error) {
      showMessage('error', 'Failed to end sessions. Please try again.');
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'preferences', label: 'Preferences', icon: FaCog },
    { id: 'ai-features', label: 'AI Features', icon: FaRobot },
    { id: 'integrations', label: 'Integrations', icon: FaPlug },
    { id: 'security', label: 'Security', icon: FaLock }
  ];

  // Loading state
  if (!user) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-100">
        <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 mx-auto mb-4"></div>
          <p className="text-zinc-600 text-lg">Loading settings...</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (e, section = 'formData') => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    if (section === 'formData') {
      setFormData(prev => ({ ...prev, [name]: newValue }));
    } else if (section === 'passwords') {
      setPasswords(prev => ({ ...prev, [name]: newValue }));
    } else if (section === 'preferences') {
      const newPreferences = { ...preferences, [name]: newValue };
      handleSavePreferences(newPreferences);
    } else if (section === 'aiSettings') {
      const newAiSettings = { ...aiSettings, [name]: newValue };
      handleSaveAiSettings(newAiSettings);
    } else if (section === 'security') {
      const newSecurity = { ...security, [name]: newValue };
      handleSaveSecuritySettings(newSecurity);
    }
  };

  const toggleIntegration = async (platform) => {
    const newStatus = !integrations[platform];
    
    try {
      const response = await fetch(`/api/integrations/${platform}`, {
        method: newStatus ? 'POST' : 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        setIntegrations(prev => ({ ...prev, [platform]: newStatus }));
        showMessage('success', `${platform} ${newStatus ? 'connected' : 'disconnected'} successfully!`);
      } else {
        throw new Error(`Failed to ${newStatus ? 'connect' : 'disconnect'} ${platform}`);
      }
    } catch (error) {
      showMessage('error', `Failed to ${newStatus ? 'connect' : 'disconnect'} ${platform}. Please try again.`);
    }
  };

  return (
    <div className="w-full h-full bg-zinc-300 dark:bg-zinc-800 transition-colors duration-300">
      {/* Message Display */}
      {message.text && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 ${
          message.type === 'success' 
            ? 'bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200' 
            : 'bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200'
        }`}>
          <div className="flex items-center">
            {message.type === 'success' ? (
              <FaCheck className="mr-2" size={16} />
            ) : (
              <FaTimes className="mr-2" size={16} />
            )}
            <span className="font-medium">{message.text}</span>
          </div>
        </div>
      )}
      
      <div className="w-full mx-auto h-full flex gap-6">
        {/* Sidebar Navigation */}
        <div className="w-80 bg-zinc-300 dark:bg-zinc-800 rounded-3xl p-6 transition-colors duration-300">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 transition-colors duration-300">Settings</h2>
            <p className="text-zinc-600 dark:text-zinc-400 transition-colors duration-300">Manage your account and preferences</p>
          </div>
          
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-2 rounded-2xl transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                  }`}
                >
                  <Icon className="mr-4" size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="mt-20 pt-4 border-t border-zinc-200 dark:border-zinc-500">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4 transition-colors duration-300">Quick Actions</h3>
            <div className="space-y-0.5">
              <button className="w-full flex items-center px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-xl transition-colors"
                onClick={handleExportData}>
                <FaDownload className="mr-3" size={16} />
                <span className="text-sm">Export Data</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-xl transition-colors">
                <FaUpload className="mr-3" size={16} />
                <span className="text-sm">Import Data</span>
              </button>
              <button className="w-full flex items-center px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                onClick={() => {
                  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                    // Handle account deletion
                    showMessage('error', 'Account deletion is not yet implemented');
                  }
                }}>
                <FaTrash className="mr-3" size={16} />
                <span className="text-sm">Delete Account</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-zinc-300 dark:bg-zinc-800 rounded-3xl p-8 overflow-y-auto no-scrollbar transition-colors duration-300">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-300 transition-colors duration-300">Profile Settings</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 transition-colors duration-300">Update your personal information and profile picture</p>
                </div>
                <button
                  onClick={() => {
                    if (isEditing) {
                      handleSaveProfile();
                    } else {
                      setIsEditing(true);
                    }
                  }}
                  disabled={loading}
                  className={`px-4 h-10 py-3 rounded-lg flex items-center gap-2 transition-all ${
                    isEditing 
                      ? 'bg-green-600 text-white hover:bg-green-700 disabled:opacity-50' 
                      : 'bg-zinc-900 text-white hover:bg-zinc-600 disabled:opacity-50'
                  }`}
                >
                  {loading ? (
                    <FaSpinner className="animate-spin" size={16} />
                  ) : isEditing ? (
                    <FaSave size={16} />
                  ) : (
                    <FaEdit size={16} />
                  )}
                  {loading ? 'Saving...' : isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
              </div>

              {/* Profile Picture Section */}
              <div className="flex items-center mb-8 p-6 bg-zinc-300 dark:bg-zinc-700 rounded-2xl transition-colors duration-300">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-zinc-600 dark:to-zinc-800 flex items-center justify-center text-white text-3xl font-bold shadow-lg transition-colors duration-300">
                    {(user?.name?.charAt(0) || user?.username?.charAt(0) || 'U').toUpperCase()}
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-2 -right-2 w-10 h-10 bg-zinc-900 dark:bg-zinc-600 rounded-full flex items-center justify-center text-white hover:bg-zinc-800 dark:hover:bg-zinc-500 transition-colors shadow-lg"
                    >
                      <FaCamera size={14} />
                    </button>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">Profile Picture</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 transition-colors duration-300">Upload a new profile picture or avatar</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 transition-colors duration-300">JPG, PNG or GIF. Max size 5MB.</p>
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-transparent enabled:bg-zinc-100 dark:enabled:bg-zinc-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-600 dark:disabled:text-zinc-400 text-zinc-900 dark:text-zinc-100"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-transparent enabled:bg-zinc-100 dark:enabled:bg-zinc-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-600 dark:disabled:text-zinc-400 text-zinc-900 dark:text-zinc-100"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-transparent enabled:bg-zinc-100 dark:enabled:bg-zinc-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-600 dark:disabled:text-zinc-400 text-zinc-900 dark:text-zinc-100"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-transparent enabled:bg-zinc-100 dark:enabled:bg-zinc-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-600 dark:disabled:text-zinc-400 text-zinc-900 dark:text-zinc-100"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-transparent enabled:bg-zinc-100 dark:enabled:bg-zinc-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-600 dark:disabled:text-zinc-400 text-zinc-900 dark:text-zinc-100"
                    placeholder="Enter your location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-transparent enabled:bg-zinc-100 dark:enabled:bg-zinc-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-600 dark:disabled:text-zinc-400 text-zinc-900 dark:text-zinc-100"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent enabled:bg-zinc-100 dark:enabled:bg-zinc-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 disabled:text-zinc-500 dark:disabled:text-zinc-400 text-zinc-900 dark:text-zinc-100 resize-none"
                    placeholder="Tell us about yourself..."
                  />
>>>>>>> 5c9b99c11acdb181bb1f938da662b02bbe620673
                </div>
              </div>
            </div>
          )}
<<<<<<< HEAD
          
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
=======

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div>
              <div className="mb-4 px-6">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Preferences</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">Customize your experience and interface settings</p>
              </div>

              <div className="space-y-4">
                {/* Theme Settings */}
                <div className="p-6 rounded-2xl">
                  <div className="flex items-center mb-3">
                    <FaPalette className="text-zinc-700 dark:text-zinc-300 mr-3" size={20} />
                    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Appearance</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {['light', 'dark', 'auto'].map((theme) => (
                      <button
                        key={theme}
                        onClick={() => {
                          const newPreferences = { ...preferences, theme };
                          handleSavePreferences(newPreferences);
                        }}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          preferences.theme === theme
                            ? 'border-zinc-400 dark:border-zinc-600 bg-zinc-400 dark:bg-zinc-600 text-white'
                            : 'border-zinc-300 dark:border-zinc-600 hover:border-zinc-200 dark:hover:border-zinc-500 text-zinc-900 dark:text-zinc-100'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-12 h-8 rounded mx-auto mb-2 ${
                            theme === 'light' ? 'bg-white border border-zinc-300 dark:border-zinc-600' :
                            theme === 'dark' ? 'bg-zinc-800' : 'bg-gradient-to-r from-white to-zinc-800'
                          }`}></div>
                          <span className="text-sm font-medium capitalize">{theme}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language & Region */}
                <div className="group relative">
                  {/* Background with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 dark:from-zinc-700 to-zinc-300 dark:to-zinc-700 rounded-2xl opacity-60"></div>

                  {/* Main container */}
                  <div className="relative p-6 rounded-2xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-zinc-900 dark:bg-zinc-700 rounded-xl mr-4">
                        <FaGlobe className="text-white" size={18} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Language & Region</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Customize your language and timezone preferences</p>
                      </div>
                    </div>

                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Language Selection */}
                      <div className="space-y-3">
                        <label htmlFor="language-dropdown" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          Language
                        </label>
                        <CustomDropdown
                          id="language-dropdown"
                          options={[
                            { value: "en", label: "English", flag: "🇺🇸" },
                            { value: "es", label: "Español", flag: "🇪🇸" },
                            { value: "fr", label: "Français", flag: "🇫🇷" },
                            { value: "de", label: "Deutsch", flag: "🇩🇪" },
                            { value: "zh", label: "中文", flag: "🇨🇳" },
                            { value: "ja", label: "日本語", flag: "🇯🇵" },
                            { value: "ko", label: "한국어", flag: "🇰🇷" },
                            { value: "pt", label: "Português", flag: "🇵🇹" },
                            { value: "ru", label: "Русский", flag: "🇷🇺" },
                            { value: "it", label: "Italiano", flag: "🇮🇹" },
                          ]}
                          value={preferences.language}
                          onChange={(value) => {
                            const syntheticEvent = {
                              target: { name: "language", value },
                            };
                            handleInputChange(syntheticEvent, "preferences");
                          }}
                          placeholder="Select a language"
                          searchable={true}
                        />
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Choose your preferred display language</p>
                      </div>

                      {/* Timezone Selection */}
                      <div className="space-y-3">
                        <label htmlFor="timezone-dropdown" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                          Timezone
                        </label>
                        <CustomDropdown
                          id="timezone-dropdown"
                          options={[
                            { value: "UTC", label: "Coordinated Universal Time", offset: "UTC+00:00" },
                            { value: "EST", label: "Eastern Standard Time", offset: "UTC-05:00" },
                            { value: "PST", label: "Pacific Standard Time", offset: "UTC-08:00" },
                            { value: "GMT", label: "Greenwich Mean Time", offset: "UTC+00:00" },
                            { value: "CET", label: "Central European Time", offset: "UTC+01:00" },
                            { value: "JST", label: "Japan Standard Time", offset: "UTC+09:00" },
                            { value: "AEST", label: "Australian Eastern Time", offset: "UTC+10:00" },
                            { value: "IST", label: "India Standard Time", offset: "UTC+05:30" },
                            { value: "CST", label: "China Standard Time", offset: "UTC+08:00" },
                            { value: "MST", label: "Mountain Standard Time", offset: "UTC-07:00" },
                          ]}
                          value={preferences.timezone}
                          onChange={(value) => {
                            const syntheticEvent = {
                              target: { name: "timezone", value },
                            };
                            handleInputChange(syntheticEvent, "preferences");
                          }}
                          placeholder="Select a timezone"
                          searchable={true}
                        />
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Set your local timezone for accurate timestamps</p>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="flex items-center justify-center w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full mr-2">
                          <FaCheck className="text-green-600 dark:text-green-400" size={10} />
                        </div>
                        Settings will be applied automatically
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="p-6 bg-zinc-300 dark:bg-zinc-700 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <FaBell className="text-zinc-700 dark:text-zinc-300 mr-3" size={20} />
                    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Notifications</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { key: 'notifications', label: 'Email Notifications', desc: 'Receive email updates about your account' },
                      { key: 'soundEffects', label: 'Sound Effects', desc: 'Play sounds for actions and notifications' },
                      { key: 'animations', label: 'Animations', desc: 'Enable smooth animations and transitions' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-xl">
                        <div>
                          <h5 className="font-medium text-zinc-900 dark:text-zinc-100">{item.label}</h5>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                        </div>
                        <button
                          onClick={() => setPreferences(prev => {
                            const newPrefs = { ...prev, [item.key]: !prev[item.key] };
                            handleSavePreferences(newPrefs);
                            return newPrefs;
                          })}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            preferences[item.key] ? 'bg-zinc-900 dark:bg-zinc-600' : 'bg-zinc-200 dark:bg-zinc-600'
                          }`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences[item.key] ? 'translate-x-7' : 'translate-x-1'
                          }`}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Features Tab */}
          {activeTab === 'ai-features' && (
            <div>
              <div className="mb-4 px-6">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">AI Features</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">Configure AI-powered features and preferences</p>
              </div>

              <div className="space-y-6 p-6">
                {/* AI Model Selection */}
                <div className="w-[60vw] p-6 bg-gradient-to-r from-purple-50 dark:from-purple-900/20 to-blue-50 dark:to-blue-900/20 rounded-2xl border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center mb-4">
                    <FaRobot className="text-purple-600 dark:text-purple-400 mr-3" size={20} />
                    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">AI Model</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'gemini-pro', name: 'Gemini Pro', desc: 'Best performance' },
                      { id: 'gemini-flash', name: 'Gemini Flash', desc: 'Faster responses' },
                      { id: 'gpt-4', name: 'GPT-4', desc: 'OpenAI model' }
                    ].map((model) => (
                      <button
                        key={model.id}
                        onClick={() => setAiSettings(prev => ({ ...prev, aiModel: model.id }))}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          aiSettings.aiModel === model.id
                            ? 'border-purple-600 dark:border-purple-500 bg-purple-600 dark:bg-purple-700 text-white'
                            : 'border-zinc-300 dark:border-zinc-600 hover:border-purple-300 dark:hover:border-purple-500 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                        }`}
                      >
                        <h5 className="font-semibold">{model.name}</h5>
                        <p className="text-sm opacity-75">{model.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* AI Features Toggle */}
                <div className="bg-zinc-300 dark:bg-zinc-700 rounded-2xl py-6">
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Feature Settings</h4>
                  <div className="space-y-4">
                    {[
                      { key: 'autoSuggestTags', label: 'Auto-suggest Tags', desc: 'Automatically suggest relevant tags for URLs' },
                      { key: 'autoSummarize', label: 'Auto-summarize Content', desc: 'Generate summaries for web pages automatically' }
                    ].map((feature) => (
                      <div key={feature.key} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-xl">
                        <div>
                          <h5 className="font-medium text-zinc-900 dark:text-zinc-100">{feature.label}</h5>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
                        </div>
                        <button
                          onClick={() => setAiSettings(prev => {
                            const newSettings = { ...prev, [feature.key]: !prev[feature.key] };
                            handleSaveAiSettings(newSettings);
                            return newSettings;
                          })}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            aiSettings[feature.key] ? 'bg-purple-600 dark:bg-purple-500' : 'bg-zinc-200 dark:bg-zinc-600'
                          }`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            aiSettings[feature.key] ? 'translate-x-7' : 'translate-x-1'
                          }`}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Parameters */}
                <div className="group relative">
                  {/* Background with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-indigo-50 dark:to-indigo-900/20 rounded-2xl opacity-80"></div>

                  {/* Main container */}
                  <div className="relative p-6 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-2xl border border-purple-200/60 dark:border-purple-700/60 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-600 dark:bg-purple-700 rounded-xl mr-4">
                        <FaCog className="text-white" size={18} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">AI Parameters</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400">Fine-tune AI behavior and output settings</p>
                      </div>
                    </div>

                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Summary Length Selection */}
                      <div className="space-y-3">
                        <label htmlFor="summary-length-dropdown" className="block text-sm font-medium text-zinc-700 mb-2">
                          Summary Length
                        </label>
                        <CustomDropdown
                          id="summary-length-dropdown"
                          options={[
                            { value: "short", label: "Short", flag: "📝", offset: "1-2 sentences" },
                            { value: "medium", label: "Medium", flag: "📄", offset: "3-4 sentences" },
                            { value: "long", label: "Long", flag: "📋", offset: "5+ sentences" },
                            { value: "detailed", label: "Detailed", flag: "📚", offset: "Comprehensive summary" }
                          ]}
                          value={aiSettings.summaryLength}
                          onChange={(value) => {
                            const syntheticEvent = {
                              target: { name: "summaryLength", value },
                            };
                            handleInputChange(syntheticEvent, "aiSettings");
                          }}
                          placeholder="Select summary length"
                          searchable={false}
                        />
                        <p className="text-xs text-zinc-500">Control the length of AI-generated summaries</p>
                      </div>

                      {/* Language Selection */}
                      <div className="space-y-3">
                        <label htmlFor="ai-language-dropdown" className="block text-sm font-medium text-zinc-700 mb-2">
                          AI Language
                        </label>
                        <CustomDropdown
                          id="ai-language-dropdown"
                          options={[
                            { value: "english", label: "English", flag: "🇺🇸" },
                            { value: "spanish", label: "Español", flag: "🇪🇸" },
                            { value: "french", label: "Français", flag: "🇫🇷" },
                            { value: "german", label: "Deutsch", flag: "🇩🇪" },
                            { value: "chinese", label: "中文", flag: "🇨🇳" },
                            { value: "japanese", label: "日本語", flag: "🇯🇵" },
                            { value: "portuguese", label: "Português", flag: "🇵🇹" },
                            { value: "russian", label: "Русский", flag: "🇷🇺" }
                          ]}
                          value={aiSettings.language}
                          onChange={(value) => {
                            const syntheticEvent = {
                              target: { name: "language", value },
                            };
                            handleInputChange(syntheticEvent, "aiSettings");
                          }}
                          placeholder="Select AI language"
                          searchable={true}
                        />
                        <p className="text-xs text-zinc-500">Language for AI-generated content</p>
                      </div>
                    </div>

                    {/* Confidence Threshold */}
                    <div className="mt-6 space-y-4">
                      {/* Header with label and value badge */}
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-zinc-700">
                          Confidence Threshold
                        </label>
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                            {Math.round(aiSettings.confidenceThreshold * 100)}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Slider container */}
                      <div className="relative px-1">
                        <input
                          type="range"
                          min="0.1"
                          max="1"
                          step="0.1"
                          value={aiSettings.confidenceThreshold}
                          onChange={(e) => {
                            const newSettings = { ...aiSettings, confidenceThreshold: parseFloat(e.target.value) };
                            handleSaveAiSettings(newSettings);
                            setAiSettings(newSettings);
                          }}
                          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                          style={{
                            background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${aiSettings.confidenceThreshold * 100}%, #e5e7eb ${aiSettings.confidenceThreshold * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        {/* Custom thumb */}
                        <div className="absolute left-0 top-0 w-full h-3 pointer-events-none">
                          <div 
                            className="absolute top-2/2 transform -translate-y-1/2 w-5 h-5 bg-white border-2 border-purple-500 rounded-full shadow-lg transition-all duration-150"
                            style={{ left: `calc(${aiSettings.confidenceThreshold * 100}% - 10px)` }}
                          />
                        </div>
                      </div>
                      
                      {/* Labels and indicators */}
                      <div className="flex items-center justify-between px-1 mt-3">
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                          <span className="text-xs text-zinc-500 font-medium">Less Strict</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-zinc-500 font-medium">More Strict</span>
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-zinc-500 text-center bg-purple-50 px-3 py-2 rounded-lg">
                        Higher values require more confident AI predictions
                      </p>
                    </div>

                    {/* Status indicator */}
                    <div className="mt-6 pt-4 border-t border-purple-100">
                      <div className="flex items-center text-sm text-purple-600">
                        <div className="flex items-center justify-center w-5 h-5 bg-purple-100 rounded-full mr-2">
                          <FaCheck className="text-purple-600" size={10} />
                        </div>
                        AI parameters will be applied to new requests
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {activeTab === 'integrations' && (
            <div className='px-6'>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Integrations</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">Connect your account with external services</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { key: 'google', name: 'Google', icon: FaGoogle, color: 'text-red-800', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
                  { key: 'github', name: 'GitHub', icon: FaGithub, color: 'text-gray-900', bgColor: 'bg-gray-50', borderColor: 'border-gray-200' },
                  { key: 'slack', name: 'Slack', icon: FaSlack, color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
                  { key: 'discord', name: 'Discord', icon: FaDiscord, color: 'text-indigo-600', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-200' },
                  { key: 'twitter', name: 'Twitter', icon: FaTwitter, color: 'text-blue-500', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
                  { key: 'linkedin', name: 'LinkedIn', icon: FaLinkedin, color: 'text-blue-700', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' }
                ].map((integration) => {
                  const Icon = integration.icon;
                  const isConnected = integrations[integration.key];
                  
                  return (
                    <div key={integration.key} className={`p-6 rounded-2xl border-2 ${integration.bgColor} dark:bg-zinc-800 ${integration.borderColor} dark:border-zinc-600`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Icon className={`${integration.color} dark:text-zinc-300 mr-3`} size={24} />
                          <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{integration.name}</h4>
                        </div>
                        <button
                          onClick={() => toggleIntegration(integration.key)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            isConnected
                              ? 'bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800'
                              : 'bg-zinc-900 dark:bg-zinc-700 text-white hover:bg-zinc-800 dark:hover:bg-zinc-600'
                          }`}
                        >
                          {isConnected ? 'Disconnect' : 'Connect'}
                        </button>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {isConnected 
                          ? `Connected to your ${integration.name} account`
                          : `Connect your ${integration.name} account for enhanced features`
                        }
                      </p>
                      {isConnected && (
                        <div className="mt-3 flex items-center text-sm text-green-600 dark:text-green-400">
                          <FaCheck className="mr-2" size={12} />
                          <span>Connected since Jan 15, 2024</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className='px-6'>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Security</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">Manage your account security and privacy settings</p>
              </div>

              <div className="space-y-8">
                {/* Password Security */}
                <div className="py-4 bg-zinc-300 dark:bg-zinc-700 rounded-2xl px-6">
                  <div className="flex items-center mb-4">
                    <FaKey className="text-red-600 dark:text-red-500 mr-3" size={20} />
                    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Password Security</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="currentPassword"
                          value={passwords.currentPassword}
                          onChange={(e) => handleInputChange(e, 'passwords')}
                          className="w-full px-4 py-3 pr-12 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500"
                          placeholder="Enter current password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                        >
                          {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">New Password</label>
                      <input
                        type="password"
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={(e) => handleInputChange(e, 'passwords')}
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={passwords.confirmPassword}
                        onChange={(e) => handleInputChange(e, 'passwords')}
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Last changed: {security.passwordLastChanged}
                    </p>
                    <button 
                      onClick={handlePasswordChange}
                      disabled={loading || !passwords.currentPassword || !passwords.newPassword || !passwords.confirmPassword}
                      className="px-6 py-2 bg-red-600 dark:bg-red-700 text-white rounded-xl hover:bg-red-700 dark:hover:bg-red-800 transition-colors disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <FaSpinner className="animate-spin mr-2" size={14} />
                          Updating...
                        </div>
                      ) : (
                        'Update Password'
                      )}
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="py-4 bg-zinc-300 dark:bg-zinc-700 rounded-2xl px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaLock className="text-green-600 dark:text-green-500 mr-3" size={20} />
                      <div>
                        <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Two-Factor Authentication</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const newSecurity = { ...security, twoFactorAuth: !security.twoFactorAuth };
                        handleSaveSecuritySettings(newSecurity);
                        setSecurity(newSecurity);
                        
                        if (!security.twoFactorAuth) {
                          // Simulate 2FA setup process
                          showMessage('success', '2FA setup initiated. Please check your authenticator app.');
                        } else {
                          showMessage('success', '2FA disabled successfully.');
                        }
                      }}
                      className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                        security.twoFactorAuth
                          ? 'bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800'
                          : 'bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-800'
                      }`}
                    >
                      {security.twoFactorAuth ? 'Disable 2FA' : 'Enable 2FA'}
                    </button>
                  </div>
                  {security.twoFactorAuth && (
                    <div className="flex items-center text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 p-3 rounded-xl">
                      <FaCheck className="mr-2" size={12} />
                      <span>Two-factor authentication is enabled</span>
                    </div>
                  )}
                </div>

                {/* Session Management */}
                <div className="py-4 bg-zinc-300 dark:bg-zinc-700 rounded-2xl px-6">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-zinc-700 dark:text-zinc-300 mr-3" size={20} />
                    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Session Management</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="session-timeout-dropdown" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                        Session Timeout
                      </label>
                      <CustomDropdown
                        id="session-timeout-dropdown"
                        options={[
                          { value: "1h", label: "1 Hour", flag: "⏰", offset: "Short session" },
                          { value: "8h", label: "8 Hours", flag: "🕐", offset: "Work day" },
                          { value: "24h", label: "24 Hours", flag: "📅", offset: "One day" },
                          { value: "7d", label: "7 Days", flag: "📊", offset: "One week" },
                          { value: "30d", label: "30 Days", flag: "📆", offset: "One month" }
                        ]}
                        value={security.sessionTimeout}
                        onChange={(value) => {
                          const syntheticEvent = {
                            target: { name: "sessionTimeout", value },
                          };
                          handleInputChange(syntheticEvent, "security");
                        }}
                        placeholder="Select session timeout"
                        searchable={false}
                      />
                      <p className="text-xs text-zinc-500">Choose how long you stay logged in</p>
                    </div>
                    <div className="flex items-end mb-7">
                      <button 
                        onClick={handleEndAllSessions}
                        className="w-full px-4 h-11 py-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-colors"
                      >
                        End All Sessions
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between p-4 bg-white rounded-xl">
                    <div>
                      <h5 className="font-medium text-zinc-900">Login Notifications</h5>
                      <p className="text-sm text-zinc-600">Get notified when someone logs into your account</p>
                    </div>
                    <button
                      onClick={() => {
                        const newSecurity = { ...security, loginNotifications: !security.loginNotifications };
                        handleSaveSecuritySettings(newSecurity);
                        setSecurity(newSecurity);
                      }}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        security.loginNotifications ? 'bg-zinc-900' : 'bg-zinc-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        security.loginNotifications ? 'translate-x-7' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>
>>>>>>> 5c9b99c11acdb181bb1f938da662b02bbe620673
>>>>>>> b843a51665704229e8d1f657919ce2d1e1395163
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b843a51665704229e8d1f657919ce2d1e1395163
