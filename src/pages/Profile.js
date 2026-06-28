import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, CreditCard, Key, Shield, Camera, Award } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="mb-8 border-b border-gray-200 pb-8 pt-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Creator Profile</h1>
          <p className="text-sm text-gray-500">Manage your public presence, portfolio, and reputation.</p>
        </div>
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-100">
             <Award size={14} className="text-indigo-600"/> Pro Creator
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <nav className="flex flex-col gap-1 sticky top-8">
            <Link to="#" className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold bg-white border border-gray-200 rounded-lg text-gray-900 shadow-sm">
              <User size={16} className="text-indigo-600" /> Public Profile
            </Link>
            <Link to="#" className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
              <Settings size={16} /> Account Settings
            </Link>
            <Link to="#" className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
              <CreditCard size={16} /> Earnings & Payouts
            </Link>
            <Link to="/api-keys" className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
              <Key size={16} /> Developer API
            </Link>
          </nav>
        </div>

        <div className="md:col-span-3 space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User size={18} className="text-gray-400" /> Personal Information
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-center border-b border-gray-100 pb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-2xl border-2 border-white shadow-sm ring-1 ring-gray-100">
                  H
                </div>
                <div>
                  <button className="text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                    <Camera size={16} /> Change Avatar
                  </button>
                  <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Display Name</label>
                  <input type="text" defaultValue="Harshika" className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Public Email</label>
                  <input type="email" defaultValue="harshika@example.com" className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Bio</label>
                <textarea rows="4" className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm" placeholder="Tell the community about yourself..."></textarea>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-100 p-6">
            <h2 className="text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
              <Shield size={18} className="text-red-600" /> Danger Zone
            </h2>
            <p className="text-sm text-red-700 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="text-sm font-semibold text-red-700 bg-white border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors shadow-sm">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
