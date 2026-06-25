import React from 'react';
import { Link } from 'react-router-dom';

const ApiDocs = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-body flex">
      {/* Left Sidebar Navigation */}
      <aside className="w-64 border-r border-outline-variant bg-surface hidden lg:block fixed h-screen overflow-y-auto">
        <div className="p-4 border-b border-outline-variant">
           <Link to="/" className="font-display font-semibold text-lg tracking-tight hover:text-primary transition-colors">CueAI</Link>
           <div className="text-xs font-mono text-on-surface-variant mt-1 uppercase tracking-widest">API Reference</div>
        </div>
        <nav className="p-4 space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">Getting Started</h4>
            <ul className="space-y-2">
               <li><a href="#introduction" className="text-sm text-primary font-medium hover:underline">Introduction</a></li>
               <li><a href="#authentication" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Authentication</a></li>
               <li><a href="#errors" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Errors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">Models</h4>
            <ul className="space-y-2">
               <li><a href="#models-list" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">List Models</a></li>
               <li><a href="#models-retrieve" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Retrieve Model</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">Generations</h4>
            <ul className="space-y-2">
               <li><a href="#generate-image" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Create Image</a></li>
               <li><a href="#generate-text" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Create Text</a></li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content Area (2 columns: Docs + Code) */}
      <main className="flex-1 lg:ml-64 flex flex-col xl:flex-row">
         
         {/* Documentation Column */}
         <div className="flex-1 xl:max-w-3xl px-8 py-12 xl:px-12 xl:py-16">
            <header className="mb-12">
               <h1 className="text-4xl font-display font-bold text-on-background mb-4 tracking-tight">API Reference</h1>
               <p className="text-lg text-on-surface-variant leading-relaxed">
                  The CueAI API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
               </p>
            </header>

            <section id="authentication" className="mb-16">
               <h2 className="text-2xl font-display font-semibold text-on-background mb-4 pb-2 border-b border-outline-variant">Authentication</h2>
               <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  The CueAI API uses API keys to authenticate requests. You can view and manage your API keys in the <Link to="/api-keys" className="text-primary hover:underline">API Keys Dashboard</Link>.
               </p>
               <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
               </p>
               <div className="bg-surface border border-outline-variant rounded-md p-4 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                  <p className="text-sm text-on-background">All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.</p>
               </div>
            </section>

            <section id="generate-image" className="mb-16">
               <h2 className="text-2xl font-display font-semibold text-on-background mb-4 pb-2 border-b border-outline-variant">Create Image</h2>
               <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Creates an image given a prompt. This endpoint routes to our highly optimized Midjourney and Stable Diffusion pipelines depending on the requested `model`.
               </p>
               
               <h3 className="text-sm font-semibold text-on-background uppercase tracking-wider mb-4">Parameters</h3>
               
               <div className="space-y-4 border-t border-outline-variant pt-4">
                  <div>
                     <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm text-on-background font-semibold">prompt</span>
                        <span className="text-xs text-error font-medium">Required</span>
                     </div>
                     <p className="text-sm text-on-surface-variant">A text description of the desired image(s). The maximum length is 1000 characters.</p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/50">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm text-on-background font-semibold">model</span>
                        <span className="text-xs text-on-surface-variant font-medium">Optional</span>
                     </div>
                     <p className="text-sm text-on-surface-variant">The model to use for generation. Defaults to `midjourney-v6`.</p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/50">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm text-on-background font-semibold">n</span>
                        <span className="text-xs text-on-surface-variant font-medium">Optional</span>
                     </div>
                     <p className="text-sm text-on-surface-variant">The number of images to generate. Must be between 1 and 4.</p>
                  </div>
               </div>
            </section>
         </div>

         {/* Code Snippets Column */}
         <div className="xl:w-[450px] bg-[#0d0d12] border-l border-outline-variant px-6 py-12 xl:py-16 xl:sticky xl:top-0 xl:h-screen xl:overflow-y-auto hidden md:block">
            
            <div className="mb-16">
               <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-on-surface-variant uppercase tracking-wider">Authentication Example</span>
               </div>
               <div className="bg-[#1a1a24] rounded-md border border-[#2d2d3d] overflow-hidden">
                  <div className="bg-[#232333] px-4 py-2 flex gap-4 text-xs font-mono text-on-surface-variant border-b border-[#2d2d3d]">
                     <button className="text-primary">cURL</button>
                     <button className="hover:text-on-surface">Node.js</button>
                     <button className="hover:text-on-surface">Python</button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-[#a1a1aa] overflow-x-auto">
                     <code className="language-bash">
                        <span className="text-[#3b82f6]">curl</span> https://api.cueai.com/v1/models \<br/>
                        &nbsp;&nbsp;-H <span className="text-[#10b981]">"Authorization: Bearer cue_prod_abc123"</span>
                     </code>
                  </pre>
               </div>
            </div>

            <div className="mb-16">
               <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-on-surface-variant uppercase tracking-wider">Create Image Request</span>
               </div>
               <div className="bg-[#1a1a24] rounded-md border border-[#2d2d3d] overflow-hidden">
                  <div className="bg-[#232333] px-4 py-2 flex gap-4 text-xs font-mono text-on-surface-variant border-b border-[#2d2d3d]">
                     <button className="hover:text-on-surface">cURL</button>
                     <button className="text-primary">Node.js</button>
                     <button className="hover:text-on-surface">Python</button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-[#a1a1aa] overflow-x-auto">
                     <code className="language-javascript">
                        <span className="text-[#c678dd]">import</span> {'{'} CueAI {'}'} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'cueai'</span>;<br/><br/>
                        <span className="text-[#c678dd]">const</span> cue = <span className="text-[#c678dd]">new</span> CueAI({'{'}<br/>
                        &nbsp;&nbsp;apiKey: process.env.<span className="text-[#e5c07b]">CUE_API_KEY</span><br/>
                        {'}'});<br/><br/>
                        <span className="text-[#c678dd]">const</span> response = <span className="text-[#c678dd]">await</span> cue.images.<span className="text-[#61afef]">generate</span>({'{'}<br/>
                        &nbsp;&nbsp;prompt: <span className="text-[#98c379]">'Minimalist architectural concept...'</span>,<br/>
                        &nbsp;&nbsp;model: <span className="text-[#98c379]">'midjourney-v6'</span>,<br/>
                        &nbsp;&nbsp;n: <span className="text-[#d19a66]">1</span><br/>
                        {'}'});<br/><br/>
                        console.<span className="text-[#61afef]">log</span>(response.data[<span className="text-[#d19a66]">0</span>].url);
                     </code>
                  </pre>
               </div>

               <div className="mt-4">
                  <span className="text-xs font-mono font-semibold text-on-surface-variant uppercase tracking-wider mb-2 block">Response</span>
                  <div className="bg-[#1a1a24] rounded-md border border-[#2d2d3d] p-4">
                     <pre className="text-xs font-mono text-[#a1a1aa] overflow-x-auto">
                        <code className="language-json">
                           {`{
  "created": 1700000000,
  "data": [
    {
      "url": "https://cueai.com/img_abc.png"
    }
  ]
}`}
                        </code>
                     </pre>
                  </div>
               </div>
            </div>

         </div>
      </main>
    </div>
  );
};

export default ApiDocs;
