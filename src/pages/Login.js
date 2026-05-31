
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../utility/authToken';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
  const [loading, setLoading] = useState(false); // To handle loading states 
  // Step 1: Send OTP to user's email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/send-otp-for-login', { email });
      if (response.status === 200) {
        alert('OTP sent to your email');
        setOtpSent(true); // Show OTP input form
      } else {
        alert('Failed to send OTP');
      }
    } catch (err) {
      console.error('OTP request error:', err);
      alert('Error sending OTP');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and login
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/verify-otp-and-login', { email, otp });
      if (response.status === 200) {
        alert('Logged In Successfully!!!');
        const { user, token } = response.data;
        setAuthToken(user.fname, token);;
        // Use the user information to navigate
        if (user.accountType === 'admin') {
          navigate('/admin');
        } else {
          navigate(`/${user.fname}`);
        }
      } else {
        alert('Invalid OTP');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Login | Cue AI</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@600;700&family=JetBrains+Mono:wght@400;500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .glass-card {\n            background: rgba(22, 22, 30, 0.6);\n            backdrop-filter: blur(24px);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05);\n        }\n        .glow-border:focus-within {\n            border-color: #d0bcff;\n            box-shadow: 0 0 15px rgba(208, 188, 255, 0.2);\n        }\n        .primary-glow:hover {\n            box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);\n        }\n        .bg-mesh {\n            background-color: #0B0B0F;\n            background-image: \n                radial-gradient(at 0% 0%, rgba(60, 0, 145, 0.15) 0px, transparent 50%),\n                radial-gradient(at 100% 0%, rgba(3, 181, 211, 0.1) 0px, transparent 50%);\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n    "
        }}
      />
      {/* Navigation suppressed for transactional page */}
      <main className="flex-grow min-h-screen bg-background flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-xl relative">
        {/* Decorative Ambient Element */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="w-full max-w-[440px] z-10">
          {/* Brand Identity */}
          <div className="flex flex-col items-center mb-stack-md">
            <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center mb-stack-sm shadow-lg shadow-primary/20">
              <span
                className="material-symbols-outlined text-on-primary-container text-3xl"
                data-icon="electric_bolt"
              >
                electric_bolt
              </span>
            </div>
            <h1 className="font-headline-md text-headline-md tracking-tighter text-on-surface">
              Cue AI
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Enter the creator ecosystem
            </p>
          </div>
          {/* Login Card */}
          <div className="glass-card rounded-xl p-stack-md md:p-stack-lg">
            {!otpSent ? (
            <form onSubmit={handleEmailSubmit} className="space-y-stack-md">
              {/* Email Field */}
              <div className="space-y-stack-xs">
                <label
                  className="font-label-md text-label-md text-on-surface-variant ml-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span
                      className="material-symbols-outlined text-outline text-lg"
                      data-icon="mail"
                    >
                      mail
                    </span>
                  </div>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-3 pl-10 pr-4 font-label-caps placeholder:text-outline focus:outline-none glow-border transition-all duration-300"
                    id="email"
                    name="email"
                    placeholder="name@domain.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Send OTP Button */}
              <button
                className="w-full py-3.5 px-6 bg-gradient-to-r from-primary-container to-primary rounded-lg font-body-lg text-body-lg font-bold text-on-primary-container primary-glow transition-all duration-300 active:scale-[0.98]"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
            ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-stack-md">
              {/* Email Field (Disabled) */}
              <div className="space-y-stack-xs">
                <label
                  className="font-label-md text-label-md text-on-surface-variant ml-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span
                      className="material-symbols-outlined text-outline text-lg"
                      data-icon="mail"
                    >
                      mail
                    </span>
                  </div>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-3 pl-10 pr-4 font-label-caps placeholder:text-outline focus:outline-none glow-border transition-all duration-300 opacity-50 cursor-not-allowed"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    disabled
                  />
                </div>
              </div>
              {/* Password Field */}
              <div className="space-y-stack-xs">
                <div className="flex justify-between items-center ml-1">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant"
                    htmlFor="password"
                  >
                    One Time Password (OTP)
                  </label>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span
                      className="material-symbols-outlined text-outline text-lg"
                      data-icon="lock"
                    >
                      lock
                    </span>
                  </div>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg py-3 pl-10 pr-10 font-label-caps placeholder:text-outline focus:outline-none glow-border transition-all duration-300"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              </div>
              {/* Login Button */}
              <button
                className="w-full py-3.5 px-6 bg-gradient-to-r from-primary-container to-primary rounded-lg font-body-lg text-body-lg font-bold text-on-primary-container primary-glow transition-all duration-300 active:scale-[0.98]"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Login'}
              </button>
            </form>
            )}
              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/20" />
                </div>
                <div className="relative flex justify-center text-label-caps uppercase">
                  <span className="bg-transparent px-4 text-outline text-[10px] tracking-widest">
                    Or continue with
                  </span>
                </div>
              </div>
              {/* Social Options */}
              <div className="grid grid-cols-2 gap-stack-sm">
                <button
                  className="flex items-center justify-center gap-2 py-2.5 border border-outline-variant/30 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  type="button"
                >
                  <img
                    alt="Google"
                    className="w-5 h-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLpkAw2N_-dDHX8SaAOJUky79WYLdok8em9-kEIkOrSUP0bDTha3eMnXXwp2RWpArbIYFgbgeAhwdVUZO3ycCApdwwBP9cG_F_ChZQ_hLkzN8O3bK8P1HCQY6-jNBuK1GaEe0aze-_iQUuDrZ6t7xmLk1rqmxLPjvCWnpKkjWQByjMSma_QBx0Bxbv475IlQ2bdREZCtj77fx779zW8FAltpCdcNfS_cIggiYsgtVJi5WuznmYXicNH6BW5zExISvF0D4nFG9iRc"
                  />
                  <span className="font-label-md text-label-md text-on-surface">
                    Google
                  </span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 py-2.5 border border-outline-variant/30 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  type="button"
                >
                  <svg className="w-5 h-5 fill-on-surface" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.11.81 2.235 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="font-label-md text-label-md text-on-surface">
                    GitHub
                  </span>
                </button>
              </div>
            {/* Signup Link */}
            <div className="mt-stack-lg text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Don't have an account?
                <a
                  className="text-primary font-bold hover:underline decoration-primary/30 underline-offset-4"
                  href="#"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
          {/* Global Footer Element */}
          <div className="mt-stack-xl text-center">
            <p className="font-label-caps text-label-caps text-outline/60">
              © 2024 Cue AI. Precision Prompting.
            </p>
          </div>
        </div>
      </main>
      {/* Simple Atmospheric Scripts */}
    </>

  );
};

export default Login;
