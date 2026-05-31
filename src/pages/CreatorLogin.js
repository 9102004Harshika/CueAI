import React, { useEffect, useState, useRef } from 'react';

const CreatorLogin = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [authStatus, setAuthStatus] = useState('');
    const glow1Ref = useRef(null);
    const glow2Ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            if (glow1Ref.current) {
                glow1Ref.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
            }
            if (glow2Ref.current) {
                glow2Ref.current.style.transform = `translate(${x * -0.05}px, ${y * -0.05}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setAuthStatus('Authorizing...');
        
        setTimeout(() => {
            setAuthStatus('Redirecting...');
        }, 1200);
        
        // Add actual auth logic here later
    };

    return (
        <div className="min-h-screen flex flex-col antialiased selection:bg-primary/30">
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Cue AI | Creator Portal Login</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        `
                        body {
                            background-color: #0B0B0F;
                            color: #e4e1e7;
                            overflow-x: hidden;
                        }

                        .glass-surface {
                            background: rgba(22, 22, 30, 0.6);
                            backdrop-filter: blur(24px);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            border-top: 1px solid rgba(255, 255, 255, 0.15);
                        }

                        .primary-glow-btn {
                            background: linear-gradient(135deg, #d0bcff 0%, #a078ff 100%);
                            box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        }

                        .primary-glow-btn:hover {
                            box-shadow: 0 0 30px rgba(208, 188, 255, 0.4);
                            transform: translateY(-1px);
                        }
                        
                        .success-glow-btn {
                            background: linear-gradient(135deg, #4cd7f6 0%, #03b5d3 100%);
                            box-shadow: 0 0 20px rgba(76, 215, 246, 0.25);
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        }

                        .input-focus-ring:focus {
                            outline: none;
                            border-color: #d0bcff;
                            box-shadow: 0 0 0 1px #d0bcff;
                        }

                        .creator-badge {
                            background: rgba(76, 215, 246, 0.1);
                            color: #4cd7f6;
                            border: 1px solid rgba(76, 215, 246, 0.2);
                        }

                        /* Ambient kinetic light effect */
                        .ambient-glow {
                            position: absolute;
                            width: 600px;
                            height: 600px;
                            background: radial-gradient(circle, rgba(109, 59, 215, 0.08) 0%, rgba(11, 11, 15, 0) 70%);
                            pointer-events: none;
                            z-index: -1;
                        }

                        .material-symbols-outlined {
                            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                        }
                    `
                }}
            />
            {/* Ambient Background Effects */}
            <div className="ambient-glow top-[-20%] left-[-10%]" ref={glow1Ref} />
            <div className="ambient-glow bottom-[-20%] right-[-10%]" ref={glow2Ref} />
            <main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-xl relative z-10">
                <div className="w-full max-w-[1100px] grid md:grid-cols-2 gap-stack-xl items-center">
                    {/* Left Side: Creator Stats & Brand Intro */}
                    <div className="hidden md:flex flex-col space-y-stack-md">
                        <div className="flex items-center gap-base">
                            <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
                                Cue AI
                            </span>
                            <span className="creator-badge px-3 py-1 rounded-full font-label-caps text-label-caps uppercase">
                                Creator Portal
                            </span>
                        </div>
                        <h1 className="font-headline-lg text-headline-lg text-on-surface max-w-md">
                            Turn your prompts into a{" "}
                            <span className="text-primary">thriving ecosystem.</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                            Access high-fidelity analytics, playground testing, and a global
                            marketplace for your AI engineering masterpieces.
                        </p>
                        {/* Micro Stats Grid */}
                        <div className="grid grid-cols-2 gap-gutter pt-stack-sm">
                            <div className="glass-surface p-stack-md rounded-xl space-y-stack-xs">
                                <span className="font-label-caps text-label-caps text-secondary uppercase">
                                    Active Creators
                                </span>
                                <div className="font-headline-md text-headline-md text-on-surface">
                                    12.4k+
                                </div>
                            </div>
                            <div className="glass-surface p-stack-md rounded-xl space-y-stack-xs">
                                <span className="font-label-caps text-label-caps text-secondary uppercase">
                                    Creator Payouts
                                </span>
                                <div className="font-headline-md text-headline-md text-on-surface">
                                    $2.8M
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-stack-sm pt-base">
                            <div className="flex -space-x-3">
                                <img
                                    alt=""
                                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFOM964ADLgzBO91daD5j3vPW-i6vQehJsP0d2DtG0LGwfljJI6fNA-_Jms6CSq_FUugMhFTwL00g4kTS4C8SPPl5Ou5qdMR0ErZf0OxrYZDky7KIWKClfeEXJs1oPu_UqwmMdmicG-xi-rCmCJ1Waotur5vwWX7XIk7mWjgJelk7VHY4KS20dIS2itIJbTUIvM16O8iBYKiNojJOpREUX4ejM7NqOwGQqIsj-gzOUSkoGCbs15dGd5Qj0J2bJR1rg6s3hdIAS4RU"
                                />
                                <img
                                    alt=""
                                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAO5NeTU2hoWp8I6zjMic43Vox8kjOpA5joC_OpPkUdhx8ApQXTz6kLiXcojEIzqqmUlebYRX4yyqCisxtYgv-0M2kf--e3Rd-NV7jhQukaR3ndtTR98HPSEpuNs78u5lrMVkEapmsZNPgDPYlfIUxRJckXTOFvmAnfLANRts2CKLXuXpvXUu8vCG_HzOfQgQefwJDwo7xajjBxmaRKezP92vuUybRI5ktlQJ79tkotiuBRl9LvCi_07qIiybitlEeDCinLc93KM4"
                                />
                                <img
                                    alt=""
                                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe8dMPOtakvNVjYCN2lUGQRXcOgzVkZnEmvzG6E6mRlLVaQSHTnSI-IyiS_OMeI0zLyYjPZdZ7QO26RD2i6GKHtmGFt3iE_F6YYV-wBB2p0HpUPSTfi-TpQ5B5gZUuPrPUvDP6oS4rN5Ljx_CeiaKOaxMZzH9NS5B2Icbre6w8Mf4ifwu0NxBgtD2s_Cb9jlq6NNjacIvOk7kjWI8jybDOv2Eon-3P6C91V37e5kv0e5pI8aKSeC4592k8ClnADmRqZo2OkxHlKr4"
                                />
                            </div>
                            <span className="font-label-md text-label-md text-on-surface-variant">
                                Joined by elite prompt engineers globally.
                            </span>
                        </div>
                    </div>
                    {/* Right Side: Login Card */}
                    <div className="flex justify-center md:justify-end">
                        <div className="glass-surface w-full max-w-md p-stack-lg rounded-xl shadow-2xl space-y-stack-md">
                            <div className="space-y-stack-xs">
                                <h2 className="font-headline-md text-headline-md text-on-surface">
                                    Sign In
                                </h2>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Welcome back, Creator.
                                </p>
                            </div>
                            <form className="space-y-stack-sm" onSubmit={handleSubmit}>
                                <div className="space-y-stack-xs">
                                    <label
                                        className="font-label-md text-label-md text-on-surface-variant block ml-1"
                                        htmlFor="email"
                                    >
                                        Creator Email
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-label-md input-focus-ring placeholder:text-on-surface-variant/30"
                                        id="email"
                                        placeholder="name@creator.cue.ai"
                                        type="email"
                                    />
                                </div>
                                <div className="space-y-stack-xs">
                                    <div className="flex justify-between items-center px-1">
                                        <label
                                            className="font-label-md text-label-md text-on-surface-variant"
                                            htmlFor="password"
                                        >
                                            Security Key
                                        </label>
                                        <a
                                            className="font-label-md text-label-md text-primary hover:underline"
                                            href="#"
                                        >
                                            Forgot?
                                        </a>
                                    </div>
                                    <input
                                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-label-md input-focus-ring placeholder:text-on-surface-variant/30"
                                        id="password"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                </div>
                                <div className="flex items-center gap-base py-base">
                                    <input
                                        className="w-4 h-4 rounded border-outline-variant bg-surface-container-low text-primary focus:ring-primary"
                                        id="remember"
                                        type="checkbox"
                                    />
                                    <label
                                        className="font-label-md text-label-md text-on-surface-variant cursor-pointer"
                                        htmlFor="remember"
                                    >
                                        Stay authenticated for 30 days
                                    </label>
                                </div>
                                <button
                                    className={`w-full py-4 rounded-lg font-label-md text-on-primary font-bold tracking-wide uppercase ${isSubmitting && authStatus === 'Redirecting...' ? 'success-glow-btn' : 'primary-glow-btn'} ${isSubmitting ? 'opacity-80' : ''}`}
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className={authStatus === 'Authorizing...' ? 'animate-pulse' : ''}>
                                            {authStatus}
                                        </span>
                                    ) : 'Access Portal'}
                                </button>
                            </form>
                            <div className="relative flex items-center py-stack-xs">
                                <div className="flex-grow border-t border-outline-variant/20" />
                                <span className="flex-shrink mx-4 font-label-caps text-label-caps text-on-surface-variant/40">
                                    OR ACCESS VIA
                                </span>
                                <div className="flex-grow border-t border-outline-variant/20" />
                            </div>
                            <div className="grid grid-cols-2 gap-stack-sm">
                                <button className="flex items-center justify-center gap-base glass-surface py-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">
                                        account_circle
                                    </span>
                                    <span className="font-label-md text-label-md">GitHub</span>
                                </button>
                                <button className="flex items-center justify-center gap-base glass-surface py-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">
                                        verified
                                    </span>
                                    <span className="font-label-md text-label-md">Wallet</span>
                                </button>
                            </div>
                            <div className="text-center pt-stack-sm">
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    New to the Creator Program? <br className="md:hidden" />
                                    <a
                                        className="text-secondary font-bold hover:text-primary transition-colors underline-offset-4 hover:underline"
                                        href="#"
                                    >
                                        Apply now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Simple Footer (Modified for Transactional View) */}
            <footer className="w-full py-stack-md border-t border-outline-variant/10 relative z-10">
                <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-sm">
                    <span className="font-label-caps text-label-caps text-on-surface-variant/60">
                        © 2024 Cue AI. Precision Prompting.
                    </span>
                    <div className="flex gap-stack-md">
                        <a
                            className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-primary transition-colors"
                            href="#"
                        >
                            Legal
                        </a>
                        <a
                            className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-primary transition-colors"
                            href="#"
                        >
                            Privacy
                        </a>
                        <a
                            className="font-label-caps text-label-caps text-on-surface-variant/60 hover:text-primary transition-colors"
                            href="#"
                        >
                            Guidelines
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default CreatorLogin;