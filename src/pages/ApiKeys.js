import React, { useState } from 'react';
import AppShell from '../components/layout/AppShell';

const ApiKeys = () => {
  const [keys, setKeys] = useState([
    { id: '1', name: 'Production App', key: 'cue_prod_8f92j...3k9d', created: 'Oct 12, 2023', lastUsed: '2 mins ago' },
    { id: '2', name: 'Local Development', key: 'cue_test_1m49x...8p2n', created: 'Jan 05, 2024', lastUsed: 'Never' }
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <AppShell activeNavItem="Profile">
      <div className="mb-8 border-b border-outline-variant pb-8 pt-4 flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-display font-bold text-on-background mb-2">API Keys</h1>
           <p className="text-sm text-on-surface-variant font-body">Manage your API keys for authenticating requests to CueAI.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
        >
          Generate New Key
        </button>
      </div>

      <div className="premium-card p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-on-background">Active API Keys</h2>
        </div>
        
        <div className="border border-outline-variant rounded-lg overflow-hidden bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-variant/50 border-b border-outline-variant">
              <tr>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Name</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Secret Key</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Created</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant">Last Used</th>
                <th className="px-4 py-3 font-semibold text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {keys.map((k) => (
                <tr key={k.id} className="hover:bg-surface-variant/30 transition-colors">
                  <td className="px-4 py-4 font-medium text-on-background">{k.name}</td>
                  <td className="px-4 py-4 font-mono text-on-surface-variant tracking-wider">{k.key}</td>
                  <td className="px-4 py-4 text-on-surface-variant">{k.created}</td>
                  <td className="px-4 py-4 text-on-surface-variant">{k.lastUsed}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-error hover:text-red-400 font-medium text-xs transition-colors">Revoke</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="premium-card p-6 border border-outline-variant">
            <h3 className="text-sm font-semibold font-display tracking-tight text-on-background mb-2">Usage Limits</h3>
            <p className="text-sm text-on-surface-variant mb-6">Your current plan limits API requests to 100,000 tokens per month.</p>
            
            <div className="mb-2 flex justify-between text-xs font-semibold text-on-surface">
               <span>45,210 used</span>
               <span>100,000 limit</span>
            </div>
            <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
               <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
            </div>
         </div>
         
         <div className="premium-card p-6 bg-surface-variant/30">
            <h3 className="text-sm font-semibold font-display tracking-tight text-on-background mb-2">Developer Resources</h3>
            <p className="text-sm text-on-surface-variant mb-6">Learn how to authenticate requests and integrate CueAI models.</p>
            
            <a href="/docs" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
               Read the Documentation
               <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
         </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="premium-card w-full max-w-md p-6 bg-surface shadow-elevated border border-outline-variant">
            <h3 className="text-lg font-bold text-on-background mb-2">Generate API Key</h3>
            <p className="text-sm text-on-surface-variant mb-6">Give your new key a descriptive name to track its usage.</p>
            
            <div className="mb-6">
              <label className="block text-xs font-semibold text-on-surface-variant mb-1">Key Name</label>
              <input type="text" placeholder="e.g. My Next.js App" className="w-full bg-background border border-outline-variant rounded-md px-3 py-2 text-sm text-on-background focus:outline-none focus:border-primary" />
            </div>
            
            <div className="flex justify-end gap-3">
               <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-semibold text-on-surface-variant hover:text-on-background transition-colors">Cancel</button>
               <button onClick={() => setShowModal(false)} className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Create Secret Key</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
};

export default ApiKeys;
