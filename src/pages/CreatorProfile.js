import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppShell from '../components/layout/AppShell';
import MarketingFooter from '../components/layout/MarketingFooter';

const CreatorProfile = () => {
  const [activeTab, setActiveTab] = useState('prompts');

  const creator = {
    name: "VectorMind",
    role: "Lead Prompt Engineer",
    joinDate: "Joined Oct 2023",
    followers: "12.4k",
    sales: "8,942",
    bio: "Specializing in highly structured, deterministic prompts for Midjourney v6 and Stable Diffusion. My work focuses on architectural visualization and UI/UX conceptualization.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiJYEe8MifseNyYAN7KcoQV5ipZX7QHsujjb1q3UKT-a1U1RXwjzCacPGA6pfiU1KjtXxLn-cyIaAtuAylL_K0OdjkpsLzaYGnZ3dLRr8eiad2pxGkD3Ivrk0C-iMXZsFWbwa_c-OKn0nvi3QqS2nzDzKMyguOcRzv88ux-g3rHldmKU6pouspsSajESAgyzOpyvGxeyFKF_LJTuykPG7pIET1i_L5ZDJ3fKRczOsLD3OixHTB_J3oNqQdZE3WR3-kEK1xFfhOMu4"
  };

  const prompts = [
    { id: 1, title: "Neural Architecture v1", price: "$12", model: "Midjourney v6", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSI_1E5S-5aqNSwiNxb57j2Wo131QT_pP_fMTRv-vSIik7QM2fS96pxd07fZgrmOmeqx7Tb2jr7BLX9eZ4RvsbCAyDUISob2U1w8VPaS7mEDOGf9Ctuq4gV5EeZrLKczN67DQfgmzEeEsiTRYbcqM9zUUf4zYrfXHivX-ICsPe6vNTvJ-jUOgq-wIt-Yz_vugRbn6ihyG8y0_-ky6r6CMRBBkstHsuYVLquRsZjkUKWL2Zq6NO7EgP6Wu87RfKV3xdbh_GCSfmt1M" },
    { id: 2, title: "Velvet Sky Abstract", price: "$18", model: "Stable Diffusion", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA95PsmmxcOElS1uA-JN5slvhMY0v_mqe9NvMlEvXQ_1jwd9XWH1y0i29ud-va95F4EpYhPSySln8g8soDRrG8YeWaScJOqchS4U77dfV2TDJ4DHZrHmQ8p_9vsVzVDkFw_5gYHlGGKev4uBqAbfrlBxznKZBYSPMym3JQj33E77eALX3c1clMGc8NICAFSDO2zXqjIO8RTihphs9NGDp1_FGfZfSp3M7R6lYizkwE2TP9OO_EGRUslbuEMrbvg_d6N_YxHliqtc7k" },
    { id: 3, title: "Biotech Portrait #4", price: "$15", model: "Midjourney v6", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8wBiOfbxR50QI21rwZ6TwUqYiedLudQhUi_tU4qtcEfw-KV6xq_NyT4DFwG4Ya6N2FjlKgZYD4caGeEPL0I8Uk77nwaJiE4mC1UKttgyKPGreMaM7LVRYz0Q5CWYSirWN3egHPZJWLyfqhvRG0TmqynNE-iBmd1FGMQW0aaRlN69mDvl6DdsgYsE4XkMAerne8lHxjdsjKHQLcEHouElPXG7Vsiu25csN-dnr64lYIV80KzUhEsi0mIqISg2lVfSYxL7N-tv9j2o" },
    { id: 4, title: "The Monolith Project", price: "$30", model: "Collection", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsUonT9Z-ydceU1ZylXZ6i35uAUVhlqlJNFSg6ATtFZtWukerJmaef8oBxxYpvhjDoNB2P4pxAHX76xU2Iz8a3DFdTbiGaUqXXVcBl8CmW8SGG7pEWWYFj80_bnMOmfoYXf9_r4lP-ChSSWCkwyyx31Ce6p9ruMcMJrp3ekJo9PyQx7r_ncGKOBbv8UXQlQo8Un6KleOzAYMBN4tT_mT4OIpH25bE07XOgYPdtPV9FFu1HJDDxN9rpfxuOYrFH7gKtnfc1wrxsTok" }
  ];

  return (
    <AppShell activeNavItem="Profile">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
        
        {/* Left Sidebar: Profile Info */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <img src={creator.avatar} alt={creator.name} className="w-32 h-32 rounded-lg object-cover border border-outline-variant mb-6 shadow-sm" />
            <h1 className="text-2xl font-display font-bold text-on-background mb-1">{creator.name}</h1>
            <p className="text-sm font-medium text-primary mb-4">{creator.role}</p>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{creator.bio}</p>
            
            <div className="flex flex-col gap-3 mb-8">
              <button className="w-full bg-on-background text-background font-semibold py-2 rounded-md hover:bg-secondary transition-colors">
                Follow Creator
              </button>
              <button className="w-full bg-surface border border-outline-variant text-on-surface font-semibold py-2 rounded-md hover:bg-surface-variant transition-colors">
                Contact
              </button>
            </div>
            
            <div className="border-t border-outline-variant pt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-on-surface-variant">Followers</span>
                <span className="text-sm font-mono font-medium text-on-background">{creator.followers}</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-on-surface-variant">Total Sales</span>
                <span className="text-sm font-mono font-medium text-on-background">{creator.sales}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Member Since</span>
                <span className="text-sm font-medium text-on-background">{creator.joinDate.replace('Joined ', '')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          <div className="flex gap-6 border-b border-outline-variant mb-8">
            {['prompts', 'collections', 'about'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold capitalize transition-colors ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {activeTab === 'prompts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {prompts.map(prompt => (
                <div key={prompt.id} className="premium-card overflow-hidden group cursor-pointer flex flex-col">
                  <div className="aspect-square relative overflow-hidden bg-surface-variant">
                    <img src={prompt.img} alt={prompt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 right-2">
                      <span className="bg-background/90 text-on-background text-[10px] font-mono px-2 py-1 rounded border border-outline-variant">
                        {prompt.model}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm text-on-background line-clamp-1 pr-2">{prompt.title}</h3>
                      <span className="font-semibold text-on-background text-sm">{prompt.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'collections' && (
            <div className="flex items-center justify-center min-h-[300px] border border-dashed border-outline-variant rounded-lg">
              <p className="text-sm text-on-surface-variant">No collections available yet.</p>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="premium-card p-8">
              <h3 className="text-lg font-display font-semibold text-on-background mb-4">Background & Experience</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                VectorMind has been at the forefront of generative AI engineering since 2022. With a background in structural engineering and digital twin simulation, they bring a unique, deterministic approach to prompt crafting. Their work is widely used by top design agencies to rapidly iterate on architectural and product design concepts.
              </p>
              <h3 className="text-lg font-display font-semibold text-on-background mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Midjourney v6', 'Stable Diffusion XL', 'ComfyUI', 'Python', 'DALL-E 3'].map(tech => (
                  <span key={tech} className="bg-surface border border-outline-variant text-on-surface text-xs px-3 py-1.5 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <MarketingFooter />
    </AppShell>
  );
};

export default CreatorProfile;
