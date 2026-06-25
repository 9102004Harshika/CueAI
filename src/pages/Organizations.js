import React, { useState } from 'react';
import AppShell from '../components/layout/AppShell';
import { Users, Shield, Plus, MoreVertical, Search, Settings, CreditCard } from 'lucide-react';

const Organizations = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [showInviteModal, setShowInviteModal] = useState(false);

  const members = [
    { id: 1, name: 'Harshika Singh', email: 'harshika@cueai.com', role: 'Owner', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYdbCwbKXxb6CzS4bEDPuonwV9LQgHIpJd8CVxrOjBs_Im_gx78BnYJrRwEeLh1w7HRMkU5Shh_xRzR04JPSdy1E3HIqf74oEgDIILgB86YidZCbobTHS4QDJBwVuVf6fOq5JOojKYUr6UgJPxdT_u_zZoUY3NJ5ym2ktheTlpHwoop5rh6yEDbQrI6TonA1u9EM7VxwIcaidQvm_zv68NsJl8Qni-CaOgRJtolGCdsi1nassNt5SvZONUtiOAdwq-V9qh04J3ES0' },
    { id: 2, name: 'Alex Developer', email: 'alex@cueai.com', role: 'Admin', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvDDGweAxBgzTeMG8gXI45BAwpg3fr5Zf04J984TMqqpaJ3qqlSNbQCxaVHiiW8bi3bhOMTGua5rSy16EM-j0HWBlnZJ1vn9aZl5mTWF_8yFu15uiGY1oqC7NQxVPNBHpHHTU3x4V9zWJHnVYSQZHvFpdhYA1oHgUz7VVeRuNfg4AN18uQn6RzSWBJDwDo7KwU7NncEEvNvKDg9s7pIqzxe2tkERbJ_x4cFtBdwj5VEyXN4uDTnvvc6cvInzFpKrfDM3fDm8Q051U' },
    { id: 3, name: 'Sarah Design', email: 'sarah@cueai.com', role: 'Editor', status: 'Pending', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUG2iWUTcyz1FuIyjXmtMq0mmPz6gh_vPEXb1mJHZRBt6CPDLZP1pL7-GH0q89ul7t-yOYUJzXW97zTt4tJQ5qqlhGhhFQkrL-WngBENKu7gfXAPq0ZGs5O4nFc5Wo0pTxeoIQkUjh6kCyWurU9jVs0z8t_IbSeb4vWZb5pX1mNq0svrrYE76TGzB-2PwwyzvyJhBpnjwaAgEVk1I3E8L2ZqW2X81Hy5NvTL_LtUgJ-i1mjel8JOYHyjhSk6PFCu0sFQBRNjVpxcc' }
  ];

  return (
    <AppShell activeNavItem="Organizations">
      <div className="mb-8 border-b border-outline-variant pb-8 pt-4 flex justify-between items-end">
        <div>
           <div className="flex items-center gap-2 mb-2">
              <span className="bg-surface border border-outline-variant px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">Enterprise Plan</span>
           </div>
           <h1 className="text-3xl font-display font-bold text-on-background mb-2">CueAI Engineering</h1>
           <p className="text-sm text-on-surface-variant font-body">Manage your team workspace, roles, and collaborative AI models.</p>
        </div>
        <button 
          onClick={() => setShowInviteModal(true)}
          className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
        >
          <Plus size={16} /> Invite Members
        </button>
      </div>

      <div className="flex gap-8 mb-8">
         {/* Sidebar Tabs */}
         <div className="w-48 hidden md:block shrink-0">
            <nav className="flex flex-col gap-1">
               <button onClick={() => setActiveTab('members')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'members' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  <Users size={16} /> Members
               </button>
               <button onClick={() => setActiveTab('roles')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'roles' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  <Shield size={16} /> Roles & Permissions
               </button>
               <button onClick={() => setActiveTab('billing')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'billing' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  <CreditCard size={16} /> Billing
               </button>
               <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === 'settings' ? 'bg-surface border border-outline-variant text-on-background' : 'text-on-surface-variant hover:text-on-background hover:bg-surface/50'}`}>
                  <Settings size={16} /> Workspace Settings
               </button>
            </nav>
         </div>

         {/* Content Area */}
         <div className="flex-1">
            {activeTab === 'members' && (
               <div className="premium-card bg-surface overflow-hidden">
                  <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-background">
                     <div className="relative w-64">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                        <input type="text" placeholder="Search members..." className="w-full bg-surface border border-outline-variant rounded-md py-1.5 pl-8 pr-3 text-xs focus:outline-none focus:border-primary" />
                     </div>
                     <div className="text-xs font-semibold text-on-surface-variant">3 Members</div>
                  </div>
                  
                  <table className="w-full text-left text-sm">
                     <thead className="bg-surface-variant/50 border-b border-outline-variant">
                        <tr>
                           <th className="px-4 py-3 font-semibold text-on-surface-variant">User</th>
                           <th className="px-4 py-3 font-semibold text-on-surface-variant">Role</th>
                           <th className="px-4 py-3 font-semibold text-on-surface-variant">Status</th>
                           <th className="px-4 py-3 font-semibold text-on-surface-variant text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-outline-variant">
                        {members.map(member => (
                           <tr key={member.id} className="hover:bg-surface-variant/30 transition-colors bg-background">
                              <td className="px-4 py-3">
                                 <div className="flex items-center gap-3">
                                    <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full object-cover border border-outline-variant" />
                                    <div>
                                       <div className="font-semibold text-on-background">{member.name}</div>
                                       <div className="text-xs text-on-surface-variant">{member.email}</div>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-4 py-3">
                                 <select className="bg-surface border border-outline-variant text-xs text-on-surface rounded px-2 py-1 focus:outline-none focus:border-primary">
                                    <option selected={member.role === 'Owner'}>Owner</option>
                                    <option selected={member.role === 'Admin'}>Admin</option>
                                    <option selected={member.role === 'Editor'}>Editor</option>
                                    <option selected={member.role === 'Viewer'}>Viewer</option>
                                 </select>
                              </td>
                              <td className="px-4 py-3">
                                 <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${member.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                                    {member.status}
                                 </span>
                              </td>
                              <td className="px-4 py-3 text-right">
                                 <button className="text-on-surface-variant hover:text-on-surface"><MoreVertical size={16} /></button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
            
            {activeTab === 'roles' && (
               <div className="premium-card p-6 border border-outline-variant">
                  <h3 className="text-lg font-semibold text-on-background mb-4">Role Permissions</h3>
                  <div className="space-y-4">
                     {['Owner', 'Admin', 'Editor', 'Viewer'].map((role, idx) => (
                        <div key={role} className="border border-outline-variant rounded-md p-4 bg-background flex justify-between items-start">
                           <div>
                              <h4 className="font-semibold text-on-background">{role}</h4>
                              <p className="text-xs text-on-surface-variant mt-1">
                                 {idx === 0 && 'Full access to all workspace settings, billing, and members.'}
                                 {idx === 1 && 'Can manage prompts, invite members, but cannot change billing.'}
                                 {idx === 2 && 'Can create and edit prompts, but cannot manage members.'}
                                 {idx === 3 && 'Can view prompts and run playground models only.'}
                              </p>
                           </div>
                           <button className="text-xs font-semibold text-primary hover:underline">Edit</button>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </div>

      {showInviteModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="premium-card w-full max-w-md p-6 bg-surface shadow-elevated border border-outline-variant">
            <h3 className="text-lg font-bold text-on-background mb-2">Invite to Workspace</h3>
            <p className="text-sm text-on-surface-variant mb-6">Send email invitations to collaborate in your organization.</p>
            
            <div className="mb-4">
              <label className="block text-xs font-semibold text-on-surface-variant mb-1">Email Addresses (comma separated)</label>
              <textarea placeholder="e.g. alice@acme.com, bob@acme.com" className="w-full bg-background border border-outline-variant rounded-md px-3 py-2 text-sm text-on-background focus:outline-none focus:border-primary resize-none h-20" />
            </div>
            
            <div className="mb-6">
               <label className="block text-xs font-semibold text-on-surface-variant mb-1">Assign Role</label>
               <select className="w-full bg-background border border-outline-variant rounded-md px-3 py-2 text-sm text-on-background focus:outline-none focus:border-primary">
                  <option>Editor</option>
                  <option>Admin</option>
                  <option>Viewer</option>
               </select>
            </div>
            
            <div className="flex justify-end gap-3">
               <button onClick={() => setShowInviteModal(false)} className="px-4 py-2 text-sm font-semibold text-on-surface-variant hover:text-on-background transition-colors">Cancel</button>
               <button onClick={() => setShowInviteModal(false)} className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Send Invites</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
};

export default Organizations;
