import React, { useState, useEffect } from "react";
import { Play, Settings2, Code, FileJson, Clock, ChevronDown, Cpu, Thermometer, Zap } from 'lucide-react';

const MODELS = ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Llama 3.1 70B'];

const Playground = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2048);
  const [prompt, setPrompt] = useState("Generate a minimalist UI dashboard component for {{app_name}} using {{framework}}.");
  const [variables, setVariables] = useState({});
  const [activeTab, setActiveTab] = useState('preview');
  const [selectedModel, setSelectedModel] = useState('GPT-4o');
  const [modelOpen, setModelOpen] = useState(false);

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
    <div className="flex h-[calc(100vh-64px)] bg-background text-on-background overflow-hidden">

      {/* ── Left Panel ── */}
      <div className="w-1/2 border-r border-outline-variant flex flex-col bg-surface/30">

        {/* Panel Header */}
        <div className="px-5 py-3.5 border-b border-outline-variant bg-surface/60 backdrop-blur-sm flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-on-background">Playground</span>
          </div>

          {/* Model Selector */}
          <div className="relative">
            <button
              onClick={() => setModelOpen(!modelOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant bg-surface text-xs font-mono font-semibold text-on-surface hover:border-blue-500/40 transition-all"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              {selectedModel}
              <ChevronDown className={`w-3 h-3 text-on-surface-variant transition-transform ${modelOpen ? 'rotate-180' : ''}`} />
            </button>
            {modelOpen && (
              <div className="absolute right-0 top-full mt-1 w-52 rounded-xl border border-outline-variant bg-surface shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50 overflow-hidden">
                {MODELS.map(m => (
                  <button
                    key={m}
                    onClick={() => { setSelectedModel(m); setModelOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-mono transition-colors ${selectedModel === m ? 'bg-primary/15 text-blue-300' : 'text-on-surface hover:bg-surface-variant'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Textarea */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full flex-1 bg-transparent p-5 text-sm font-mono text-on-surface resize-none focus:outline-none leading-relaxed placeholder-on-surface-variant/40"
            placeholder="Enter your prompt. Use {{variable}} syntax to extract dynamic values..."
          />

          {/* Variables */}
          {Object.keys(variables).length > 0 && (
            <div className="border-t border-outline-variant bg-surface/50 p-4 shrink-0">
              <p className="text-[10px] font-mono font-bold text-on-surface-variant uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Extracted Variables
              </p>
              <div className="space-y-2.5">
                {Object.keys(variables).map(v => (
                  <div key={v} className="flex items-center gap-3">
                    <label className="w-28 text-xs font-mono text-amber-400 shrink-0">{`{{${v}}}`}</label>
                    <input
                      type="text"
                      value={variables[v]}
                      onChange={(e) => setVariables({ ...variables, [v]: e.target.value })}
                      placeholder="value..."
                      className="flex-1 bg-surface border border-outline-variant rounded-md px-2.5 py-1.5 text-xs font-mono text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Config Bar */}
        <div className="p-4 border-t border-outline-variant bg-surface/60 backdrop-blur-sm shrink-0 grid grid-cols-2 gap-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="flex items-center gap-1.5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                <Thermometer className="w-3 h-3" /> Temperature
              </label>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded">
                {temperature.toFixed(2)}
              </span>
            </div>
            <input
              type="range" min="0" max="2" step="0.01"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>
          <div>
            <label className="flex items-center gap-1.5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
              <Zap className="w-3 h-3" /> Max Tokens
            </label>
            <input
              type="number"
              value={maxTokens}
              onChange={(e) => setMaxTokens(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-md px-2.5 py-1.5 text-xs font-mono text-on-surface focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="w-1/2 flex flex-col bg-[#08090e]">

        {/* Output Header */}
        <div className="px-5 py-3.5 border-b border-[#1e2030] bg-[#0d0e17] flex justify-between items-center shrink-0">
          <div className="flex gap-1">
            {[
              { id: 'preview', label: 'Preview' },
              { id: 'code', icon: <Code className="w-3.5 h-3.5" />, label: 'Code' },
              { id: 'json', icon: <FileJson className="w-3.5 h-3.5" />, label: 'Raw JSON' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === t.id
                    ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                    : 'text-[#6b7280] hover:text-[#d1d5db]'
                }`}
              >
                {t.icon}{t.label}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-[0_0_16px_rgba(37,99,235,0.5)] hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">
            <Play className="w-3.5 h-3.5" /> Run
          </button>
        </div>

        {/* Output Content */}
        <div className="flex-1 p-5 overflow-y-auto">
          {activeTab === 'preview' && (
            <div className="rounded-xl border border-[#1e2030] bg-[#0d0e17] p-5 h-full">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#1e2030]">
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">Output Stream</span>
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#6b7280]">
                  <Clock className="w-3 h-3" /> 1.2s · 842 tokens
                </div>
              </div>
              <div className="font-mono text-sm leading-loose text-[#abb2bf]">
                <span className="text-[#c678dd]">import</span> React <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'react'</span>;<br />
                <span className="text-[#c678dd]">import</span> {`{ `}<span className="text-[#e5c07b]">Card</span>{` }`} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'@/components/ui/card'</span>;<br /><br />
                <span className="text-[#c678dd]">export default function</span> <span className="text-[#61afef]">Dashboard</span>() {'{'}<br />
                &nbsp;&nbsp;<span className="text-[#c678dd]">return</span> (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#abb2bf]">&lt;</span><span className="text-[#e06c75]">Card</span> <span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"p-6 bg-zinc-950 border-zinc-800"</span><span className="text-[#abb2bf]">&gt;</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#abb2bf]">&lt;</span><span className="text-[#e06c75]">h1</span> <span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"text-white text-2xl font-bold"</span><span className="text-[#abb2bf]">&gt;</span>Analytics<span className="text-[#abb2bf]">&lt;/</span><span className="text-[#e06c75]">h1</span><span className="text-[#abb2bf]">&gt;</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#abb2bf]">&lt;/</span><span className="text-[#e06c75]">Card</span><span className="text-[#abb2bf]">&gt;</span><br />
                &nbsp;&nbsp;);<br />
                {'}'}
                <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-1 align-middle rounded-sm" />
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="rounded-xl border border-[#1e2030] bg-[#0d0e17] p-5 h-full font-mono text-xs">
              <p className="text-[#6b7280] mb-4">// Integration Code (Node.js)</p>
              <p><span className="text-[#c678dd]">import</span> {`{ `}<span className="text-[#e5c07b]">CueAI</span>{` }`} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'cueai'</span>;</p>
              <br />
              <p><span className="text-[#c678dd]">const</span> cue = <span className="text-[#c678dd]">new</span> <span className="text-[#61afef]">CueAI</span>({'{'} apiKey: process.env.<span className="text-[#e5c07b]">CUE_API_KEY</span> {'}'});</p>
              <br />
              <p><span className="text-[#c678dd]">const</span> response = <span className="text-[#c678dd]">await</span> cue.prompts.<span className="text-[#61afef]">execute</span>({'{'}</p>
              <p>&nbsp;&nbsp;prompt: <span className="text-[#98c379]">`{prompt.replace(/{{/g, '${').replace(/}}/g, '}')}`</span>,</p>
              <p>&nbsp;&nbsp;model: <span className="text-[#98c379]">'gpt-4o'</span>,</p>
              <p>&nbsp;&nbsp;temperature: <span className="text-[#d19a66]">{temperature}</span></p>
              <p>{'}'});</p>
            </div>
          )}

          {activeTab === 'json' && (
            <div className="rounded-xl border border-[#1e2030] bg-[#0d0e17] p-5 h-full font-mono text-xs">
              <p className="text-[#6b7280] mb-4">// Raw API Response</p>
              <pre className="text-[#abb2bf] overflow-x-auto leading-relaxed">{`{
  "id": "gen_123abc",
  "object": "generation",
  "created": 1700000000,
  "model": "${selectedModel.toLowerCase().replace(/ /g, '-')}",
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
}`}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
