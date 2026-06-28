import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Folder, ArrowRight, PlusSquare, Zap, ShoppingBag, BookOpen } from 'lucide-react';

const MOCK_DATA = [
  { name: 'Mon', revenue: 4000, sales: 2400 },
  { name: 'Tue', revenue: 3000, sales: 1398 },
  { name: 'Wed', revenue: 6000, sales: 9800 },
  { name: 'Thu', revenue: 2780, sales: 3908 },
  { name: 'Fri', revenue: 4890, sales: 4800 },
  { name: 'Sat', revenue: 3390, sales: 3800 },
  { name: 'Sun', revenue: 5490, sales: 4300 },
];

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

const STAT_CARDS = [
  { label: 'Total Purchases', value: '142', meta: '+12% this week', icon: <ShoppingBag className="w-4 h-4 text-blue-400" />, glow: 'blue' },
  { label: 'Saved Prompts', value: '856', meta: '8 New', icon: <BookOpen className="w-4 h-4 text-violet-400" />, glow: 'violet' },
  { label: 'Subscription', value: 'Pro Creator', meta: 'Renews in 14d', icon: <Zap className="w-4 h-4 text-amber-400" />, glow: 'amber' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-surface border border-outline-variant rounded-xl px-4 py-3 shadow-xl text-xs">
        <p className="font-semibold text-on-background mb-1">{label}</p>
        <p className="text-blue-400 font-mono">${payload[0]?.value?.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const Dashboard = () => (
  <div className="min-h-screen bg-background text-on-background">
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4 pb-8 border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">Workspace Active</p>
          </div>
          <h1 className="text-3xl font-display font-bold text-on-background tracking-tight">Creator Dashboard</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface border border-outline-variant text-on-surface rounded-lg text-sm font-semibold hover:bg-surface-variant transition-colors">
            View Analytics
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all shadow-[0_0_16px_rgba(37,99,235,0.3)] hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]">
            + New Prompt
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {STAT_CARDS.map((s) => (
          <div
            key={s.label}
            className="relative p-6 rounded-2xl border border-outline-variant bg-surface/60 hover:border-outline transition-all overflow-hidden group"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
              s.glow === 'blue' ? 'from-blue-600/5 to-transparent' :
              s.glow === 'violet' ? 'from-violet-600/5 to-transparent' :
              'from-amber-600/5 to-transparent'
            }`} />
            <div className="flex justify-between items-start mb-5">
              <div className="w-9 h-9 rounded-xl bg-surface-variant border border-outline-variant flex items-center justify-center">
                {s.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5" /> {s.meta}
              </span>
            </div>
            <p className="text-sm text-on-surface-variant font-medium mb-1">{s.label}</p>
            <p className="text-3xl font-display font-bold text-on-background">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-outline-variant bg-surface/40 p-6 mb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-display font-bold text-on-background">Revenue Overview</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">Last 7 days</p>
          </div>
          <span className="text-2xl font-display font-bold text-blue-400">$23,550</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_DATA} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevDark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} dy={8} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} tickFormatter={(v) => `$${v}`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevDark)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col xl:flex-row gap-6">

        {/* Activity Feed */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-display font-bold text-on-background">Recent Activity</h2>
            <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              View all →
            </button>
          </div>
          <div className="space-y-3">
            {ACTIVITY_ITEMS.map((item) => (
              <div key={item.title} className="group flex gap-4 items-center p-4 rounded-2xl border border-outline-variant bg-surface/50 hover:bg-surface hover:border-outline cursor-pointer transition-all">
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-outline-variant shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-blue-400 border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.5 rounded">{item.badge}</span>
                    <span className="text-[10px] text-on-surface-variant">{item.time}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-on-background mb-1">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant line-clamp-1 font-mono">{item.excerpt}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-mono font-bold text-on-background mb-1">{item.price}</p>
                  <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div className="w-full xl:w-72 shrink-0">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-display font-bold text-on-background">Collections</h2>
            <button className="text-on-surface-variant hover:text-blue-400 transition-colors">
              <PlusSquare className="w-5 h-5" />
            </button>
          </div>
          <div className="rounded-2xl border border-outline-variant bg-surface/50 overflow-hidden">
            {['Concept Art', 'Logo Templates', 'UI Elements', 'Code Prompts'].map((name, i) => (
              <Link
                key={name}
                to="/marketplace"
                className={`flex items-center justify-between p-4 hover:bg-surface transition-colors group ${i > 0 ? 'border-t border-outline-variant' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-variant border border-outline-variant flex items-center justify-center">
                    <Folder className="w-3.5 h-3.5 text-on-surface-variant group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-on-surface group-hover:text-on-background transition-colors">{name}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-on-surface-variant opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
