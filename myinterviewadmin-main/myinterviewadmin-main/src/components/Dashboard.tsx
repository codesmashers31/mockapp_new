import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from './Overview';
import InterviewsManager from './InterviewsManager';
import CategoriesManager from './CategoriesManager';
import HRManager from './HRManager';
import ExpertsManager from './ExpertsManager';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'interviews':
        return <InterviewsManager />;
      case 'categories':
        return <CategoriesManager />;
      case 'hrs':
        return <HRManager />;
      case 'experts':
        return <ExpertsManager />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="lg:ml-64">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;