
const CreatorSignup = () => {
    return (
    <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Join Cue AI | Creator Onboarding</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@600;700&family=JetBrains+Mono:wght@500&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n        body {\n            background-color: #0B0B0F;\n            color: #e4e1e7;\n            overflow-x: hidden;\n        }\n        .glass-card {\n            background: rgba(22, 22, 30, 0.6);\n            backdrop-filter: blur(24px);\n            border: 1px solid rgba(255, 255, 255, 0.05);\n            border-top: 1px solid rgba(255, 255, 255, 0.15);\n        }\n        .glow-primary {\n            box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);\n        }\n        .step-transition {\n            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n    "
            }}
        />
        {/* Background Atmospheric Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full" />
            {/* Decorative Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#e4e1e7 1px, transparent 1px), linear-gradient(90deg, #e4e1e7 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />
        </div>
        {/* Top Navigation (Shell Rule: Suppressed but Logo remains for Identity) */}
        <header className="fixed top-0 w-full px-margin-desktop h-16 flex items-center z-50">
            <div className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
                Cue AI
            </div>
        </header>
        <main className="relative z-10 w-full max-w-container-max grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center pt-stack-xl">
            {/* Left Column: Visual Impact */}
            <div className="hidden lg:flex lg:col-span-7 flex-col gap-stack-lg pr-stack-xl">
                <div className="space-y-stack-sm">
                    <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full font-label-caps text-label-caps text-secondary">
                        CREATOR PROGRAM
                    </span>
                    <h1 className="font-display-xl text-display-xl text-on-surface">
                        Join the <br />
                        <span className="text-primary">Creator Economy</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Monetize your prompt engineering skills. Join 50,000+ creators
                        building the future of generative intelligence.
                    </p>
                </div>
                {/* Bento Preview Component */}
                <div className="grid grid-cols-2 gap-stack-sm h-[400px]">
                    <div className="glass-card rounded-xl p-stack-md flex flex-col justify-between overflow-hidden relative">
                        <div className="space-y-1">
                            <div className="font-label-caps text-label-caps text-on-surface-variant">
                                MONTHLY EARNINGS
                            </div>
                            <div className="font-headline-md text-headline-md text-primary">
                                $12,480.00
                            </div>
                        </div>
                        {/* Chart Placeholder */}
                        <div className="h-24 w-full flex items-end gap-1 mt-stack-md">
                            <div className="flex-1 bg-primary/20 h-[30%] rounded-t-sm" />
                            <div className="flex-1 bg-primary/30 h-[45%] rounded-t-sm" />
                            <div className="flex-1 bg-primary/40 h-[60%] rounded-t-sm" />
                            <div className="flex-1 bg-primary/60 h-[50%] rounded-t-sm" />
                            <div className="flex-1 bg-primary h-[85%] rounded-t-sm" />
                            <div className="flex-1 bg-primary/80 h-[100%] rounded-t-sm" />
                        </div>
                    </div>
                    <div className="space-y-stack-sm">
                        <div className="glass-card rounded-xl p-stack-md flex items-center gap-stack-sm h-[45%]">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    workspace_premium
                                </span>
                            </div>
                            <div>
                                <div className="font-label-md text-label-md text-on-surface">
                                    Elite Prompt Engineer
                                </div>
                                <div className="text-[12px] text-on-surface-variant">
                                    Top 1% of Creators
                                </div>
                            </div>
                        </div>
                        <div className="glass-card rounded-xl overflow-hidden h-[51%]">
                            <img
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                data-alt="A highly detailed and sophisticated abstract 3D visualization of floating digital nodes and data streams, rendered in a futuristic dark mode aesthetic with glowing purple and cyan neon accents. The scene conveys complex intelligence and speed, featuring crystalline textures that catch a soft, cinematic light against a deep space black background."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUwVZEXXdNsfx_32_BSGIRQwBBpn8N9ZLojztSQZH9hq-o0Z85L5RAv4VNKmFlMHjp15Gm5zOb6Wd08JsfwqYrz1rLPxP2QOFBZW7uheiIfHwNNp9oqWNzgGasnppM2ru0mfj1m9xszXdLBfzCqo0Um-IE7FQ5Iy1pIsrOsg14mPvdrWKhOkIdp3HDCXSB-wkupf0xt73g9E64_mxZQhwFkbrgnGOkt_EV4Wd7H7-n9FHPLUuxXo7dluqQer2Xu5G189erFQENgQI"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Column: Step-Based Form */}
            <div className="lg:col-span-5 w-full flex justify-center">
                <div className="glass-card w-full max-w-[480px] p-stack-lg rounded-xl relative border-primary/20">
                    {/* Progress Header */}
                    <div className="flex items-center gap-4 mb-stack-lg">
                        <div
                            className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden"
                            id="step-indicator"
                        >
                            <div
                                className="w-1/3 h-full bg-primary transition-all duration-500"
                                id="progress-bar"
                            />
                        </div>
                        <span
                            className="font-label-caps text-label-caps text-on-surface-variant"
                            id="step-text"
                        >
                            STEP 1/3
                        </span>
                    </div>
                    {/* Form Steps Container */}
                    <div className="relative min-h-[400px]">
                        {/* Step 1: Basics */}
                        <div
                            className="step-transition opacity-100 translate-x-0 space-y-stack-md"
                            id="step-1"
                        >
                            <div className="space-y-2">
                                <h2 className="font-headline-md text-headline-md text-on-surface">
                                    Let's start with the basics
                                </h2>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    We need a few details to set up your creator profile.
                                </p>
                            </div>
                            <div className="space-y-stack-sm">
                                <div className="space-y-1">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                                        FULL NAME
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border-outline-variant/30 rounded-lg h-12 px-4 font-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                        placeholder="e.g. Satoshi Nakamoto"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                                        WORK EMAIL
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border-outline-variant/30 rounded-lg h-12 px-4 font-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                        placeholder="name@company.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <button
                                className="w-full bg-primary text-on-primary h-14 rounded-lg font-headline-md text-body-md font-bold glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
                                onclick="nextStep(2)"
                            >
                                Continue{" "}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        {/* Step 2: Portfolio */}
                        <div
                            className="step-transition hidden opacity-0 translate-x-8 space-y-stack-md"
                            id="step-2"
                        >
                            <div className="space-y-2">
                                <h2 className="font-headline-md text-headline-md text-on-surface">
                                    Show us your work
                                </h2>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Where can we see your generated outputs or prompts?
                                </p>
                            </div>
                            <div className="space-y-stack-sm">
                                <div className="space-y-1">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                                        PORTFOLIO URL
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border-outline-variant/30 rounded-lg h-12 px-4 font-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                        placeholder="https://behance.net/yourname"
                                        type="url"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                                        SOCIAL LINK (OPTIONAL)
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border-outline-variant/30 rounded-lg h-12 px-4 font-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                        placeholder="Twitter, Instagram, or GitHub"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    className="flex-1 bg-surface-container-highest text-on-surface h-14 rounded-lg font-body-md font-medium hover:bg-white/10 transition-all"
                                    onclick="nextStep(1)"
                                >
                                    Back
                                </button>
                                <button
                                    className="flex-[2] bg-primary text-on-primary h-14 rounded-lg font-headline-md text-body-md font-bold glow-primary hover:opacity-90 transition-all"
                                    onclick="nextStep(3)"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                        {/* Step 3: Selection */}
                        <div
                            className="step-transition hidden opacity-0 translate-x-8 space-y-stack-md"
                            id="step-3"
                        >
                            <div className="space-y-2">
                                <h2 className="font-headline-md text-headline-md text-on-surface">
                                    Primary AI Tool
                                </h2>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Select the model you've mastered.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-stack-sm">
                                <button
                                    className="tool-btn flex flex-col items-center justify-center p-stack-md rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/50 transition-all group"
                                    onclick="selectTool(this)"
                                >
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-2">
                                        image
                                    </span>
                                    <span className="font-label-md text-label-md">Midjourney</span>
                                </button>
                                <button
                                    className="tool-btn flex flex-col items-center justify-center p-stack-md rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/50 transition-all group"
                                    onclick="selectTool(this)"
                                >
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-2">
                                        chat
                                    </span>
                                    <span className="font-label-md text-label-md">ChatGPT</span>
                                </button>
                                <button
                                    className="tool-btn flex flex-col items-center justify-center p-stack-md rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/50 transition-all group"
                                    onclick="selectTool(this)"
                                >
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-2">
                                        auto_awesome
                                    </span>
                                    <span className="font-label-md text-label-md">Stable Diff</span>
                                </button>
                                <button
                                    className="tool-btn flex flex-col items-center justify-center p-stack-md rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/50 transition-all group"
                                    onclick="selectTool(this)"
                                >
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-2">
                                        brush
                                    </span>
                                    <span className="font-label-md text-label-md">DALL-E</span>
                                </button>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    className="flex-1 bg-surface-container-highest text-on-surface h-14 rounded-lg font-body-md font-medium hover:bg-white/10 transition-all"
                                    onclick="nextStep(2)"
                                >
                                    Back
                                </button>
                                <button className="flex-[2] bg-secondary text-on-secondary h-14 rounded-lg font-headline-md text-body-md font-bold shadow-[0_0_20px_rgba(76,215,246,0.2)] hover:opacity-90 transition-all">
                                    Submit Application
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        {/* Footer Identity (Shell Rule: Suppressed links, minimalist Copyright only) */}
        <footer className="fixed bottom-0 w-full py-stack-md flex justify-center z-50">
            <p className="font-label-caps text-[10px] text-on-surface-variant/50 tracking-[0.2em]">
                © 2024 CUE AI. PRECISION PROMPTING. ALL RIGHTS RESERVED.
            </p>
        </footer>
    </>
    );
}
export default CreatorSignup