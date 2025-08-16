import React from 'react';
import DashboardContent from './dashboard/DashboardContent';
import { UrlShortener } from '../../features/url-management';
import { Analytics } from '../../features/analytics';
import { Settings } from '../../features/settings';

export default function DashboardContent({ 
  activeTab, 
  urlData, 
  setUrlData, 
  searchTerm, 
  setActiveTab 
}) {
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent data={urlData} setUrlData={setUrlData} searchTerm={searchTerm} />;
      case 'links':
        return <UrlShortener setActiveTab={setActiveTab} />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardContent data={urlData} setUrlData={setUrlData} searchTerm={searchTerm} />;
    }
  };

  return (
    <div className='w-full h-[84vh] bg-zinc-200 rounded-4xl overflow-hidden flex items-center justify-center'>
      {renderContent()}
    </div>
  );
}
