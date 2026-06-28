import React, { useState } from 'react';
import { Users, Activity, DollarSign, AlertCircle, ToggleRight, Database, ShieldAlert, LayoutDashboard, Flag, Server } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="mb-8 border-b border-gray-200 pb-8 pt-4">
         <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <p className="font-mono text-[10px] text-red-600 tracking-widest uppercase">Admin Privileges Active</p>
         </div>
         <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Console</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue', value: '$124,500', trend: '+14%', icon: DollarSign },
          { label: 'Active Users', value: '45.2k', trend: '+5.2%', icon: Users },
          { label: 'API Requests', value: '1.2M', trend: '+22%', icon: Activity },
          { label: 'Reports', value: '12', trend: '-2', icon: AlertCircle, alert: true },
        ].map((stat) => (
          <div key={stat.label} className={`bg-white rounded-xl shadow-sm border p-6 ${stat.alert ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
            <div className="flex justify-between items-start mb-4">
              <span className={`p-2 rounded-lg bg-gray-50 border border-gray-200 ${stat.alert ? 'text-red-600 bg-red-100 border-red-200' : 'text-gray-500'}`}>
                 <stat.icon size={16} />
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${stat.alert ? 'text-red-600' : 'text-green-600'}`}>{stat.trend}</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-8 mb-8">
         <div className="w-48 hidden md:block shrink-0">
            <nav className="flex flex-col gap-1 sticky top-8">
               <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-white border border-gray-200 text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                  <LayoutDashboard size={16} className={activeTab === 'overview' ? 'text-indigo-600' : ''}/> Overview
               </button>
               <button onClick={() => setActiveTab('users')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'users' ? 'bg-white border border-gray-200 text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                  <Users size={16} className={activeTab === 'users' ? 'text-indigo-600' : ''}/> User Management
               </button>
               <button onClick={() => setActiveTab('flags')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'flags' ? 'bg-white border border-gray-200 text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                  <Flag size={16} className={activeTab === 'flags' ? 'text-indigo-600' : ''}/> Feature Flags
               </button>
               <button onClick={() => setActiveTab('infrastructure')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'infrastructure' ? 'bg-white border border-gray-200 text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                  <Server size={16} className={activeTab === 'infrastructure' ? 'text-indigo-600' : ''}/> Infrastructure
               </button>
            </nav>
         </div>

         <div className="flex-1">
            {activeTab === 'overview' && (
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">System Health</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                           <Database size={16} className="text-indigo-600" />
                           <span className="font-semibold text-sm text-gray-900">MongoDB Cluster</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">Operational</span>
                     </div>
                     <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                           <Activity size={16} className="text-indigo-600" />
                           <span className="font-semibold text-sm text-gray-900">AI Execution Gateway</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">Operational</span>
                     </div>
                  </div>
               </div>
            )}
            
            {activeTab === 'flags' && (
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                     <h3 className="text-lg font-bold text-gray-900">Feature Flags</h3>
                     <p className="text-xs text-gray-500 mt-1">Roll out experimental features to specific user segments.</p>
                  </div>
                  <table className="w-full text-left text-sm">
                     <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                           <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-xs">Feature</th>
                           <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-xs">Description</th>
                           <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-xs">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                           <td className="px-4 py-3 font-mono text-xs font-semibold text-gray-900">enable_claude_3_5</td>
                           <td className="px-4 py-3 text-gray-600">Enables the new Anthropic model in the playground.</td>
                           <td className="px-4 py-3"><ToggleRight className="text-indigo-600" /></td>
                        </tr>
                        <tr>
                           <td className="px-4 py-3 font-mono text-xs font-semibold text-gray-900">organizations_beta</td>
                           <td className="px-4 py-3 text-gray-600">Enables workspace collaboration features.</td>
                           <td className="px-4 py-3"><ToggleRight className="text-indigo-600" /></td>
                        </tr>
                        <tr>
                           <td className="px-4 py-3 font-mono text-xs font-semibold text-gray-900">stripe_crypto_payments</td>
                           <td className="px-4 py-3 text-gray-600">Allow paying with USDC.</td>
                           <td className="px-4 py-3"><ToggleRight className="text-gray-300 rotate-180" /></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
