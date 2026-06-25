import React from 'react';
import AppShell from '../components/layout/AppShell';
import { Link } from 'react-router-dom';

const ACTIVITY_ITEMS = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAijIu35lUYoAlEMC9wDs7qSZhywZnpn_bg8MjzFq538XvwheFslSI2aQBRONONYwi-vu1488vlZYUe0fokyDpZKsNQGly0NclB1B3VXzAmDmmUeKval_WK9l3c__fkk3NUW1XRAwM9nJNQX8PxwMloKQQNbzTnw6i-hWbzb8SLEqENDTa-5YFh2kjRyEKxGcajFl52mOnVxrLdXzeW3VXHY4vuuT9lbHqWV9KXcZ_-Fi7p6OAHNzHV',
    badge: 'MIDJOURNEY v6',
    time: '2 hours ago',
    title: 'Cybernetic Architecture',
    excerpt: '"Ultra-detailed sprawling megastructure, glowing circuit patterns, volumetric lighting..."',
    price: '$12.00',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDETUBEh_6pV568DuHDzQZpmJbJ648RdfNwXfo6tTclTq6Z0_wHeLnZ-5qgWoULjrmqfiE83Y3p6Vjk9wvLHdCYkhe-2fGNMrpZpz-YTE8bf8qfDo-y0d1Y6Pw87CXOUU9M-0v6f0_6zD80m6yrMRRSresZUxXWpzUE_0-h_hmbnkWw7_lUPmK9HjMSGYc5VZ4PwKLgMt3vmzkDT5MDJZ74aHVm2-JS2RlaNGghNrl59HlBxU9Sn7Oc',
    badge: 'STABLE DIFFUSION',
    time: '5 hours ago',
    title: 'Hyper-Realist UI',
    excerpt: '"Futuristic dashboard design, glassmorphism, depth layers, minimalist typography..."',
    price: 'LOCKED',
  },
];

const Dashboard = () => (
  <AppShell activeNavItem="Personal Library">
    
    <div className="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-outline-variant pb-6 pt-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
           <span className="w-2 h-2 rounded-full bg-primary" />
           <p className="font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">Workspace Active</p>
        </div>
        <h2 className="text-3xl font-display font-bold text-on-background tracking-tight">Creator Dashboard</h2>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-on-background text-background rounded-md text-sm font-semibold hover:bg-secondary transition-colors shadow-sm">
          New Project
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {[
        { label: 'Total Purchases', value: '142', meta: '+12% this week' },
        { label: 'Saved Prompts', value: '856', meta: '8 New' },
      ].map((stat) => (
        <div key={stat.label} className="premium-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm text-on-surface-variant font-medium">{stat.label}</p>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">{stat.meta}</span>
          </div>
          <div>
            <p className="text-3xl font-display font-semibold text-on-background">{stat.value}</p>
          </div>
        </div>
      ))}
      <div className="premium-card p-6 bg-surface-variant border-primary/20">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm text-primary font-medium">Subscription Status</p>
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20 px-2 py-0.5 rounded">RENEWS IN 14D</span>
        </div>
        <div>
          <p className="text-3xl font-display font-semibold text-on-background">Pro Creator</p>
        </div>
      </div>
    </div>

    <div className="flex gap-8 flex-col xl:flex-row">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold font-display text-on-background">Recent Activity</h3>
          <button className="text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">View all history &rarr;</button>
        </div>
        
        <div className="space-y-4">
          {ACTIVITY_ITEMS.map((item) => (
            <div key={item.title} className="premium-card p-4 flex flex-col sm:flex-row gap-4 items-center group cursor-pointer hover:bg-surface/50">
              <div className="w-full sm:w-24 h-24 rounded object-cover overflow-hidden bg-background shrink-0 border border-outline-variant">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase border border-outline-variant px-1.5 py-0.5 rounded">{item.badge}</span>
                  <span className="text-[10px] text-on-surface-variant font-medium">{item.time}</span>
                </div>
                <h4 className="text-sm font-semibold mb-1 text-on-background">{item.title}</h4>
                <p className="text-xs text-on-surface-variant line-clamp-1">{item.excerpt}</p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-2">
                <span className="text-sm font-mono font-semibold text-on-background">{item.price}</span>
                <button className="text-xs font-semibold text-primary hover:underline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full xl:w-80 shrink-0">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold font-display text-on-background">Collections</h3>
          <button className="text-[20px] text-on-surface-variant hover:text-on-surface transition-colors material-symbols-outlined">add_box</button>
        </div>
        
        <div className="premium-card bg-surface p-2">
          {['Concept Art', 'Logo Templates', 'UI Elements'].map((name) => (
            <Link key={name} to="/marketplace" className="flex items-center justify-between p-3 rounded hover:bg-surface-variant transition-colors group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">folder</span>
                <span className="text-sm font-medium text-on-background">{name}</span>
              </div>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </AppShell>
);

export default Dashboard;
