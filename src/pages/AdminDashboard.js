import React, { useState } from 'react';
import AppShell from '../components/layout/AppShell';
import { Users, Activity, DollarSign, AlertCircle, ToggleRight, Database, Search } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <AppShell activeNavItem="Admin">
      <div className="mb-8 border-b border-outline-variant pb-8 pt-4">
         <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-error"></span>
            <p className="font-mono text-[10px] text-error tracking-widest uppercase">Admin Privileges Active</p>
         </div>
         <h1 className="text-3xl font-display font-bold text-on-background mb-2">Platform Console</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue', value: '$124,500', trend: '+14%', icon: DollarSign },
          { label: 'Active Users', value: '45.2k', trend: '+5.2%', icon: Users },
          { label: 'API Requests', value: '1.2M', trend: '+22%', icon: Activity },
          { label: 'Reports', value: '12', trend: '-2', icon: AlertCircle, alert: true },
        ].map((stat) => (
          <div key={stat.label} className={`premium-card p-6 ${stat.alert ? 'border-error/50 bg-error/5' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <span className={`p-2 rounded bg-surface border border-outline-variant ${stat.alert ? 'text-error' : 'text-on-surface-variant'}`}>
                 <stat.icon size={16} />
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${stat.alert ? 'text-error' : 'text-primary'}`}>{stat.trend}</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-display font-semibold text-on-background">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-8 mb-8">
         <div className="w-48 hidden md:block shrink-0">
            <nav className="flex flex-col gap-1">
               <button onClick={() => setActiveTab('overview')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'overview' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  Overview
               </button>
               <button onClick={() => setActiveTab('users')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'users' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  User Management
               </button>
               <button onClick={() => setActiveTab('flags')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'flags' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  Feature Flags
               </button>
               <button onClick={() => setActiveTab('infrastructure')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'infrastructure' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  Infrastructure
               </button>
            </nav>
         </div>

         <div className="flex-1">
            {activeTab === 'overview' && (
               <div className="premium-card p-6 bg-surface">
                  <h3 className="text-lg font-semibold text-on-background mb-4">System Health</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center p-4 border border-outline-variant rounded bg-background">
                        <div className="flex items-center gap-3">
                           <Database size={16} className="text-primary" />
                           <span className="font-semibold text-sm">MongoDB Cluster</span>
                        </div>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">Operational</span>
                     </div>
                     <div className="flex justify-between items-center p-4 border border-outline-variant rounded bg-background">
                        <div className="flex items-center gap-3">
                           <Activity size={16} className="text-primary" />
                           <span className="font-semibold text-sm">AI Execution Gateway</span>
                        </div>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">Operational</span>
                     </div>
                  </div>
               </div>
            )}
            
            {activeTab === 'flags' && (
               <div className="premium-card bg-surface overflow-hidden">
                  <div className="p-4 border-b border-outline-variant">
                     <h3 className="text-lg font-semibold text-on-background">Feature Flags</h3>
                     <p className="text-xs text-on-surface-variant mt-1">Roll out experimental features to specific user segments.</p>
                  </div>
                  <table className="w-full text-left text-sm">
                     <thead className="bg-surface-variant/50 border-b border-outline-variant">
                        <tr>
                           <th className="px-4 py-3 font-semibold text-on-surface-variant">Feature</th>
                           <th className="px-4 py-3 font-semibold text-on-surface-variant">Description</th>
                           <th className="px-4 py-3 font-semibold text-on-surface-variant">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-outline-variant bg-background">
                        <tr>
                           <td className="px-4 py-3 font-mono text-xs font-semibold">enable_claude_3_5</td>
                           <td className="px-4 py-3 text-on-surface-variant">Enables the new Anthropic model in the playground.</td>
                           <td className="px-4 py-3"><ToggleRight className="text-primary" /></td>
                        </tr>
                        <tr>
                           <td className="px-4 py-3 font-mono text-xs font-semibold">organizations_beta</td>
                           <td className="px-4 py-3 text-on-surface-variant">Enables workspace collaboration features.</td>
                           <td className="px-4 py-3"><ToggleRight className="text-primary" /></td>
                        </tr>
                        <tr>
                           <td className="px-4 py-3 font-mono text-xs font-semibold">stripe_crypto_payments</td>
                           <td className="px-4 py-3 text-on-surface-variant">Allow paying with USDC.</td>
                           <td className="px-4 py-3"><ToggleRight className="text-on-surface-variant rotate-180" /></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </div>
    </AppShell>
  );
};

export default AdminDashboard;
