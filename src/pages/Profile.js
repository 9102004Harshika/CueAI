import React from 'react';
import { Link } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';

const Profile = () => {
  return (
    <AppShell activeNavItem="Profile">
      <div className="mb-8 border-b border-outline-variant pb-8 pt-4">
        <h1 className="text-3xl font-display font-bold text-on-background mb-2">My Account</h1>
        <p className="text-sm text-on-surface-variant font-body">Manage your profile, billing, and purchased prompts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <nav className="flex flex-col gap-1">
            <Link to="#" className="px-3 py-2 text-sm font-semibold bg-surface border border-outline-variant rounded-md text-on-background">
              General
            </Link>
            <Link to="#" className="px-3 py-2 text-sm font-semibold text-on-surface-variant hover:text-on-background transition-colors rounded-md hover:bg-surface/50">
              Purchases
            </Link>
            <Link to="#" className="px-3 py-2 text-sm font-semibold text-on-surface-variant hover:text-on-background transition-colors rounded-md hover:bg-surface/50">
              Billing
            </Link>
            <Link to="/api-keys" className="px-3 py-2 text-sm font-semibold text-on-surface-variant hover:text-on-background transition-colors rounded-md hover:bg-surface/50">
              API Keys
            </Link>
          </nav>
        </div>

        <div className="md:col-span-3 space-y-8">
          <div className="premium-card p-6">
            <h2 className="text-lg font-semibold text-on-background mb-4 border-b border-outline-variant pb-2">Profile Information</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  H
                </div>
                <button className="text-sm font-semibold text-on-surface bg-surface border border-outline-variant px-4 py-2 rounded-md hover:bg-surface-variant transition-colors">
                  Change Avatar
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Username</label>
                  <input type="text" defaultValue="Harshika" className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 text-sm text-on-background focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Email</label>
                  <input type="email" defaultValue="harshika@example.com" className="w-full bg-surface border border-outline-variant rounded-md px-3 py-2 text-sm text-on-background focus:outline-none focus:border-primary" />
                </div>
              </div>
              <button className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <div className="premium-card p-6">
            <h2 className="text-lg font-semibold text-on-background mb-4 border-b border-outline-variant pb-2">Danger Zone</h2>
            <p className="text-sm text-on-surface-variant mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="text-sm font-semibold text-error bg-error/10 border border-error/30 px-4 py-2 rounded-md hover:bg-error/20 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Profile;
