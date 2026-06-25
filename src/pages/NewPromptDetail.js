import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import AppShell from "../components/layout/AppShell";
import MarketingFooter from "../components/layout/MarketingFooter";

const NewPromptDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [prompt, setPrompt] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  // We use dummy data for visualization purposes if backend isn't connected,
  // but we retain the axios call to maintain functionality
  useEffect(() => {
    axios.get(`http://localhost:5000/prompt/${id}`)
      .then((res) => {
        setPrompt(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch, using fallback data", err);
        setPrompt({
          _id: id,
          title: "Minimalist Architecture Rendering",
          username: "VectorMind",
          price: 14.99,
          model: "Midjourney v6",
          description: "A highly specialized prompt string designed to generate hyper-realistic, minimalist architectural concepts. Focuses on high-key lighting, soft shadows, and limestone/glass materials.",
          exampleInput: "A minimalist desert home made of white limestone and expansive glass, sharp geometric angles, bathed in harsh midday sunlight, soft diffuse shadows, architectural photography style, 8k resolution --v 6.0 --ar 16:9 --style raw",
          exampleOutput: "https://lh3.googleusercontent.com/aida-public/AB6AXuACIOAY3C_LPPL9AeYrRRCt_fHC5YgrCjANxkxvgTkfNv29FVUU4yTLOeZMCionlgaRfEaBtIzXNX-Whm1V5YTi5S8GMgyiSKZzUenvmDTYEPO2Yl3ZznlY1ePFrTFklc1HPMohQvW29dCE4T0x_EDbn5dRjly4EOCUaboB8vY5_4cNdUm2i512weoCaZc0LEVZtgzK5PlSWCd8HKeGbQNnCYV4W9D59yQFshPP3zeYT2UAQYlcnMt0-uexg4y7pQhHIJEnv7yISok",
          createdAt: new Date().toISOString()
        });
      });
  }, [id]);

  const handleCartClick = async () => {
    alert('Prompt added to your Cart, proceed to payment');
  };

  const handleGetPromptClick = () => {
    navigate('/checkout');
  };

  if (!prompt) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-on-surface-variant font-mono text-sm animate-pulse">Loading prompt data...</div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell activeNavItem="Exploration">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8 font-medium">
        <Link to="/marketplace" className="hover:text-on-surface transition-colors">Marketplace</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-on-surface">{prompt.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Column: Image & Previews */}
        <div className="lg:col-span-7">
          <div className="premium-card overflow-hidden bg-surface-variant p-2 mb-4">
            <img 
              src={prompt.exampleOutput} 
              alt={prompt.title} 
              className="w-full h-auto aspect-video md:aspect-[4/3] object-cover rounded-md shadow-sm"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
             {/* Thumbnail placeholders */}
             {[1,2,3,4].map((i) => (
                <div key={i} className={`aspect-square rounded-md overflow-hidden bg-surface-variant cursor-pointer border-2 ${i === 1 ? 'border-primary' : 'border-transparent hover:border-outline'}`}>
                   <img src={prompt.exampleOutput} alt="Thumbnail" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                </div>
             ))}
          </div>
        </div>

        {/* Right Column: Prompt Details & Actions */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-display font-bold text-on-background leading-tight">
              {prompt.title}
            </h1>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full border border-outline-variant transition-colors flex-shrink-0 ml-4 ${isLiked ? 'bg-error/10 text-error border-error/30' : 'bg-surface hover:bg-surface-variant text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isLiked ? '"FILL" 1' : '"FILL" 0' }}>
                favorite
              </span>
            </button>
          </div>
          
          <div className="flex items-center gap-3 mb-6">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">V</div>
                <Link to={`/${prompt.username}`} className="text-sm font-semibold hover:underline">{prompt.username}</Link>
             </div>
             <span className="text-outline-variant">•</span>
             <span className="bg-surface border border-outline-variant text-on-surface text-[10px] font-mono px-2 py-0.5 rounded shadow-sm">
                {prompt.model}
             </span>
          </div>

          <div className="text-3xl font-display font-semibold text-on-background mb-8">
            ${prompt.price}
          </div>

          <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
            {prompt.description}
          </p>

          <div className="flex flex-col gap-3 mb-8">
             <button onClick={handleGetPromptClick} className="w-full bg-primary text-on-primary font-semibold py-3 rounded-md shadow-sm hover:bg-blue-700 transition-colors">
               Purchase Prompt
             </button>
             <button onClick={handleCartClick} className="w-full bg-surface border border-outline-variant text-on-surface font-semibold py-3 rounded-md hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
               <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
               Add to Cart
             </button>
          </div>

          <div className="bg-surface p-4 rounded-md border border-outline-variant flex items-start gap-3">
             <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
             <div>
                <h4 className="text-sm font-semibold text-on-background mb-1">Instant Access & Free Credits</h4>
                <p className="text-xs text-on-surface-variant">Purchasing grants immediate access to the full prompt text and 20 generation credits in the CueAI playground.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Tabs & Technical Details */}
      <div className="mb-16">
         <div className="flex gap-6 border-b border-outline-variant mb-6">
            <button 
              onClick={() => setActiveTab('details')}
              className={`pb-3 text-sm font-semibold transition-colors ${activeTab === 'details' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Technical Specs
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 text-sm font-semibold transition-colors ${activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Reviews (12)
            </button>
         </div>

         {activeTab === 'details' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="premium-card p-6">
                <h3 className="text-sm font-semibold text-on-background mb-4 uppercase tracking-wider font-mono">Example Input</h3>
                <div className="bg-background border border-outline-variant rounded-md p-4 relative group">
                  <pre className="text-xs text-on-surface-variant font-mono whitespace-pre-wrap leading-relaxed">
                    {prompt.exampleInput}
                  </pre>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-on-surface-variant cursor-not-allowed" title="Unlock prompt to copy">lock</span>
                  </div>
                </div>
             </div>
             
             <div className="premium-card p-6">
                <h3 className="text-sm font-semibold text-on-background mb-4 uppercase tracking-wider font-mono">Model Configuration</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-outline-variant pb-2">
                    <span className="text-sm text-on-surface-variant">Base Model</span>
                    <span className="text-sm font-mono text-on-background">{prompt.model}</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant pb-2">
                    <span className="text-sm text-on-surface-variant">Aspect Ratio</span>
                    <span className="text-sm font-mono text-on-background">16:9</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant pb-2">
                    <span className="text-sm text-on-surface-variant">Stylize</span>
                    <span className="text-sm font-mono text-on-background">Raw</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-sm text-on-surface-variant">Complexity</span>
                    <span className="text-sm font-mono text-on-background">Advanced</span>
                  </div>
                </div>
             </div>
           </div>
         )}
      </div>

      <MarketingFooter />
    </AppShell>
  );
};

export default NewPromptDetail;
