import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Settings2, Save, History, Code, FileJson, Clock, ChevronDown } from 'lucide-react';

const Playground = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [prompt, setPrompt] = useState("Generate a minimalist UI dashboard component for {{app_name}} using {{framework}}.");
  const [variables, setVariables] = useState({});
  const [activeTab, setActiveTab] = useState('preview');
  
  // Extract {{variables}} from prompt
  useEffect(() => {
     const regex = /{{(.*?)}}/g;
     const matches = [...prompt.matchAll(regex)];
     const newVars = {};
     matches.forEach(match => {
        newVars[match[1]] = variables[match[1]] || '';
     });
     setVariables(newVars);
  }, [prompt]);

  return (
    <div className="flex h-screen bg-background text-on-background font-body overflow-hidden">
      
      {/* Top Navbar */}
      <header className="absolute top-0 left-0 right-0 h-14 border-b border-outline-variant bg-surface flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-display font-semibold text-lg tracking-tight">CueAI</Link>
          <div className="h-4 w-px bg-outline-variant mx-2"></div>
          <span className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
             <Settings2 size={16} /> Playground
          </span>
        </div>
        <div className="flex items-center gap-3">
           <button className="text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors px-3 py-1.5 flex items-center gap-2">
              <History size={14} /> Version History
           </button>
           <button className="text-xs font-semibold bg-primary text-on-primary px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Save size={14} /> Save Prompt
           </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-14 flex">
        
        {/* Left Panel: Configuration & Input */}
        <div className="w-1/2 border-r border-outline-variant flex flex-col bg-background relative">
          
          <div className="px-6 py-4 border-b border-outline-variant bg-surface flex justify-between items-center">
            <div>
               <h2 className="text-sm font-semibold font-display tracking-tight text-on-surface">System Prompt</h2>
            </div>
            <div className="flex gap-2">
               <button className="text-[10px] uppercase tracking-wider font-semibold text-on-surface-variant border border-outline-variant px-2 py-1 rounded bg-surface-variant/50">GPT-4o</button>
            </div>
          </div>
          
          <div className="flex-1 relative flex flex-col">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full flex-1 bg-transparent p-6 text-sm font-mono text-on-background resize-none focus:outline-none focus:ring-inset focus:ring-1 focus:ring-primary/50 leading-relaxed"
              placeholder="Enter your prompt here. Use {{variable}} to extract variables..."
            />
            
            {/* Variables Extractor */}
            {Object.keys(variables).length > 0 && (
               <div className="border-t border-outline-variant bg-surface p-4">
                  <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Extracted Variables</h3>
                  <div className="space-y-3">
                     {Object.keys(variables).map(v => (
                        <div key={v} className="flex items-center gap-4">
                           <label className="w-24 text-xs font-mono text-on-surface text-right">{v}</label>
                           <input 
                              type="text" 
                              value={variables[v]}
                              onChange={(e) => setVariables({...variables, [v]: e.target.value})}
                              placeholder="Value..."
                              className="flex-1 bg-background border border-outline-variant rounded px-2 py-1 text-xs text-on-surface focus:outline-none focus:border-primary font-mono"
                           />
                        </div>
                     ))}
                  </div>
               </div>
            )}
          </div>

          <div className="p-4 border-t border-outline-variant bg-surface grid grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">Temperature</label>
                <span className="text-xs font-mono text-on-surface">{temperature.toFixed(2)}</span>
              </div>
              <input 
                type="range" min="0" max="2" step="0.01" 
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-primary" 
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Max Tokens</label>
              <input 
                type="number" 
                defaultValue="2048"
                className="w-full bg-background border border-outline-variant rounded px-2 py-1 text-xs text-on-surface focus:outline-none focus:border-primary font-mono" 
              />
            </div>
          </div>
        </div>

        {/* Right Panel: Output */}
        <div className="w-1/2 flex flex-col bg-[#0d0d12]">
          <div className="px-6 py-4 border-b border-[#2d2d3d] bg-[#1a1a24] flex justify-between items-center">
             <div className="flex gap-4">
                <button onClick={() => setActiveTab('preview')} className={`text-xs font-semibold ${activeTab === 'preview' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'} transition-colors flex items-center gap-1`}>
                   Preview
                </button>
                <button onClick={() => setActiveTab('code')} className={`text-xs font-semibold ${activeTab === 'code' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'} transition-colors flex items-center gap-1`}>
                   <Code size={14} /> Code
                </button>
                <button onClick={() => setActiveTab('json')} className={`text-xs font-semibold ${activeTab === 'json' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'} transition-colors flex items-center gap-1`}>
                   <FileJson size={14} /> Raw JSON
                </button>
             </div>
             <div className="flex gap-2">
                <button className="bg-primary text-on-primary px-4 py-1.5 rounded text-xs font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
                  <Play size={14} /> Run Prompt
                </button>
             </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
             {activeTab === 'preview' && (
                <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3d] p-4 text-[#a1a1aa] font-mono text-sm leading-relaxed">
                   <div className="flex justify-between items-center mb-4 border-b border-[#2d2d3d] pb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">Output Stream</span>
                      <span className="text-[10px] flex items-center gap-1"><Clock size={12} /> 1.2s • 842 tokens</span>
                   </div>
                   <p>
                      <span className="text-[#c678dd]">import</span> React <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'react'</span>;<br/>
                      <span className="text-[#c678dd]">import</span> {'{'} Card {'}'} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'@/components/ui/card'</span>;<br/><br/>
                      <span className="text-[#c678dd]">export default function</span> <span className="text-[#61afef]">Dashboard</span>() {'{\n'}
                      &nbsp;&nbsp;<span className="text-[#c678dd]">return</span> (<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;Card className=<span className="text-[#98c379]">"p-6 bg-zinc-950 border-zinc-800"</span>&gt;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className=<span className="text-[#98c379]">"text-white text-xl"</span>&gt;Analytics&lt;/h1&gt;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Card&gt;<br/>
                      &nbsp;&nbsp;);<br/>
                      {'}'}
                   </p>
                   <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1 align-middle"></span>
                </div>
             )}

             {activeTab === 'code' && (
                <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3d] p-4 text-[#a1a1aa] font-mono text-xs">
                   <p className="text-on-surface-variant mb-4">// Integration Code (Node.js)</p>
                   <pre className="overflow-x-auto">
                     <span className="text-[#c678dd]">import</span> {'{'} CueAI {'}'} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'cueai'</span>;<br/><br/>
                     <span className="text-[#c678dd]">const</span> cue = <span className="text-[#c678dd]">new</span> CueAI({'{'}<br/>
                     &nbsp;&nbsp;apiKey: process.env.<span className="text-[#e5c07b]">CUE_API_KEY</span><br/>
                     {'}'});<br/><br/>
                     <span className="text-[#c678dd]">const</span> response = <span className="text-[#c678dd]">await</span> cue.prompts.<span className="text-[#61afef]">execute</span>({'{'}<br/>
                     &nbsp;&nbsp;prompt: <span className="text-[#98c379]">`{prompt.replace(/{{/g, '${').replace(/}}/g, '}')}`</span>,<br/>
                     &nbsp;&nbsp;model: <span className="text-[#98c379]">'gpt-4o'</span>,<br/>
                     &nbsp;&nbsp;temperature: <span className="text-[#d19a66]">{temperature}</span><br/>
                     {'}'});<br/>
                   </pre>
                </div>
             )}

             {activeTab === 'json' && (
                <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3d] p-4 text-[#a1a1aa] font-mono text-xs">
                   <p className="text-on-surface-variant mb-4">// Raw API Response</p>
                   <pre className="overflow-x-auto">
                     {`{
  "id": "gen_123abc",
  "object": "generation",
  "created": 1700000000,
  "model": "gpt-4o",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "import React from 'react'..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 42,
    "completion_tokens": 128,
    "total_tokens": 170
  }
}`}
                   </pre>
                </div>
             )}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Playground;
