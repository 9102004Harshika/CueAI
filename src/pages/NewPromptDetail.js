import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ChevronRight, Heart, ShieldCheck, ShoppingCart, Lock } from "lucide-react";

const NewPromptDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [prompt, setPrompt] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  // We use dummy data for visualization purposes if backend isn't connected,
  // but we retain the axios call to maintain functionality
  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/prompt/${id}`)
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
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-gray-500 font-mono text-sm animate-pulse">Loading prompt data...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
        <Link to="/marketplace" className="hover:text-gray-900 transition-colors">Marketplace</Link>
        <ChevronRight size={14} />
        <span className="text-gray-900">{prompt.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Column: Image & Previews */}
        <div className="lg:col-span-7">
          <div className="bg-gray-100 rounded-xl overflow-hidden p-2 mb-4 border border-gray-200">
            <img 
              src={prompt.exampleOutput} 
              alt={prompt.title} 
              className="w-full h-auto aspect-video md:aspect-[4/3] object-cover rounded-lg shadow-sm"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
             {/* Thumbnail placeholders */}
             {[1,2,3,4].map((i) => (
                <div key={i} className={`aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer border-2 ${i === 1 ? 'border-indigo-600' : 'border-transparent hover:border-gray-300'}`}>
                   <img src={prompt.exampleOutput} alt="Thumbnail" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                </div>
             ))}
          </div>
        </div>

        {/* Right Column: Prompt Details & Actions */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {prompt.title}
            </h1>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full border transition-colors flex-shrink-0 ml-4 ${isLiked ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-400'}`}
            >
              <Heart size={20} className={isLiked ? "fill-current" : ""} />
            </button>
          </div>
          
          <div className="flex items-center gap-3 mb-6">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">V</div>
                <Link to={`/${prompt.username}`} className="text-sm font-semibold hover:underline">{prompt.username}</Link>
             </div>
             <span className="text-gray-300">•</span>
             <span className="bg-gray-100 border border-gray-200 text-gray-700 text-[10px] font-mono px-2 py-0.5 rounded shadow-sm">
                {prompt.model}
             </span>
          </div>

          <div className="text-3xl font-bold text-gray-900 mb-8">
            ${prompt.price}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {prompt.description}
          </p>

          <div className="flex flex-col gap-3 mb-8">
             <button onClick={handleGetPromptClick} className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl shadow-sm hover:bg-indigo-700 transition-colors">
               Purchase Prompt
             </button>
             <button onClick={handleCartClick} className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
               <ShoppingCart size={18} /> Add to Cart
             </button>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-3">
             <ShieldCheck size={20} className="text-indigo-600 shrink-0" />
             <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Instant Access & Free Credits</h4>
                <p className="text-xs text-gray-600">Purchasing grants immediate access to the full prompt text and 20 generation credits in the CueAI playground.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Tabs & Technical Details */}
      <div className="mb-16">
         <div className="flex gap-6 border-b border-gray-200 mb-6">
            <button 
              onClick={() => setActiveTab('details')}
              className={`pb-3 text-sm font-semibold transition-colors ${activeTab === 'details' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Technical Specs
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 text-sm font-semibold transition-colors ${activeTab === 'reviews' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Reviews (12)
            </button>
         </div>

         {activeTab === 'details' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider font-mono">Example Input</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative group">
                  <pre className="text-xs text-gray-600 font-mono whitespace-pre-wrap leading-relaxed">
                    {prompt.exampleInput}
                  </pre>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Lock size={16} className="text-gray-400 cursor-not-allowed" title="Unlock prompt to copy" />
                  </div>
                </div>
             </div>
             
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider font-mono">Model Configuration</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">Base Model</span>
                    <span className="text-sm font-mono text-gray-900">{prompt.model}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">Aspect Ratio</span>
                    <span className="text-sm font-mono text-gray-900">16:9</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">Stylize</span>
                    <span className="text-sm font-mono text-gray-900">Raw</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-sm text-gray-500">Complexity</span>
                    <span className="text-sm font-mono text-gray-900">Advanced</span>
                  </div>
                </div>
             </div>
           </div>
         )}
      </div>
    </div>
  );
};

export default NewPromptDetail;
