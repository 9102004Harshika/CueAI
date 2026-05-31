import React from 'react';
import { FiHome, FiShoppingBag, FiBookmark, FiSettings, FiActivity, FiArrowUpRight, FiDollarSign } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0B0B0F] hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent mb-8">
            Cue AI
          </div>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium transition-colors">
              <FiHome /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
              <FiShoppingBag /> Purchases
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
              <FiBookmark /> Saved Prompts
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors">
              <FiActivity /> Subscriptions
            </a>
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-white/5">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors mb-4">
            <FiSettings /> Settings
          </a>
          <div className="flex items-center gap-3 px-4 py-2 bg-[#14141A] rounded-xl border border-white/5">
             <div className="w-8 h-8 rounded-full bg-gray-700" />
             <div className="flex-1 min-w-0">
               <div className="text-sm font-bold truncate">UserName</div>
               <div className="text-xs text-gray-500 truncate">user@email.com</div>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-gray-400">Here's what's happening with your account today.</p>
          </div>
          <button className="px-4 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl text-sm font-bold transition-colors">
            Become a Creator
          </button>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#14141A] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><FiShoppingBag size={64}/></div>
             <p className="text-sm font-medium text-gray-400 mb-2">Total Spent</p>
             <h2 className="text-3xl font-bold mb-2">$124.50</h2>
             <p className="text-xs text-green-400 flex items-center gap-1"><FiArrowUpRight /> +12% this month</p>
          </div>
          <div className="bg-[#14141A] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><FiBookmark size={64}/></div>
             <p className="text-sm font-medium text-gray-400 mb-2">Saved Prompts</p>
             <h2 className="text-3xl font-bold mb-2">48</h2>
             <p className="text-xs text-gray-500">Across 12 collections</p>
          </div>
          <div className="bg-[#14141A] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><FiActivity size={64}/></div>
             <p className="text-sm font-medium text-gray-400 mb-2">Active Subscriptions</p>
             <h2 className="text-3xl font-bold mb-2">3</h2>
             <p className="text-xs text-gray-500">$15.00/month recurring</p>
          </div>
        </div>

        {/* Recent Activity & Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Purchases */}
          <section className="bg-[#14141A]/50 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Recent Purchases</h3>
              <button className="text-sm text-[#06B6D4] hover:text-white transition-colors">View All</button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                    <FiDollarSign className="text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate">SaaS Copywriter Pro</h4>
                    <p className="text-xs text-gray-500">Purchased on Oct 12, 2026</p>
                  </div>
                  <div className="text-sm font-bold">$12.00</div>
                </div>
              ))}
            </div>
          </section>

          {/* Subscribed Creators */}
          <section className="bg-[#14141A]/50 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Subscribed Creators</h3>
              <button className="text-sm text-[#06B6D4] hover:text-white transition-colors">Manage</button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[2px]">
                       <div className="w-full h-full bg-[#1A1A24] rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Alex Chen</h4>
                      <p className="text-xs text-[#06B6D4]">@alexc_ai</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-white/10 px-2 py-1 rounded text-gray-300">Active</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
