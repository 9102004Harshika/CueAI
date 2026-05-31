
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', { fname, lname, email })
      .then(result => {
        alert("Created account successfully");
        const joinedDate = result.data.joinedDate;
        localStorage.setItem('joinedDate', new Date(joinedDate).toString());
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Geist:wght@600;700&family=JetBrains+Mono:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-panel {\n            background: rgba(22, 22, 30, 0.6);\n            backdrop-filter: blur(24px);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            border-top: 1px solid rgba(255, 255, 255, 0.15);\n        }\n        .primary-glow {\n            box-shadow: 0 0 20px rgba(208, 188, 255, 0.25);\n        }\n        .input-glow:focus-within {\n            box-shadow: 0 0 0 1px rgba(208, 188, 255, 0.5);\n        }\n        body {\n            background-color: #0B0B0F;\n            color: #e4e1e7;\n            overflow-x: hidden;\n        }\n    "
        }}
      />
      <div className="flex min-h-screen w-full">
        {/* Left Column: Immersive 3D Visual */}
        <aside className="hidden md:flex relative w-1/2 h-screen overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img
            alt="High-fidelity abstract 3D visual"
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
            data-alt="A sophisticated 3D abstract digital sculpture featuring flowing, fluid metallic ribbons in deep violet and neon cyan. The structure is suspended in a dark, infinite void with cinematic volumetric lighting hitting the edges, creating a high-fidelity glassmorphic effect. The scene reflects a futuristic AI aesthetic with sharp technical precision and a deep sense of verticality. Soft atmospheric glows and particle clusters add layers of depth and motion to the minimalist composition."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwVj-UFnwmbEpJ75pPhOIieuPrdc2Rp0Stq70HmFdLlHv-2BSf8zt3vBzQ6igcnVhmnY3DWqK2sBdCNdQQ7BknSnbjySkYdhESw7Tmnb854gj3R4tseAmp8w4aAaBKbMaCIVP3c-QSQV_OXlwbMOxspWa_l6oBI3R1TnWUCaq2bwG4Uarc-eS1d_2-NXlzIE1t2ybbAVxuoachxp8_0iwssC6TkjkXk2DQhmL3ZI0y7T3KB-dtLMF7dWmTFz5w23e7IB74R7drmss"
          />
        </div>
        {/* Subtle Overlay Content */}
        <div className="relative z-10 p-margin-desktop flex flex-col justify-between h-full bg-gradient-to-tr from-surface-container-lowest via-transparent to-transparent">
          <div>
            <h1 className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
              Cue AI
            </h1>
            <p className="font-label-caps text-label-caps text-secondary mt-base">
              PRECISION PROMPTING SYSTEM
            </p>
          </div>
          <div className="max-w-md">
            <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
              The forge for next-generation creators.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Join an elite ecosystem of prompt engineers and digital architects.
              Harness the power of Cue AI to accelerate your creative workflow.
            </p>
          </div>
        </div>
        {/* Ambient Particle Effect (JS) */}
        <canvas
          className="absolute inset-0 pointer-events-none opacity-40"
          id="ambientCanvas"
        />
      </aside>
      {/* Right Column: Signup Form */}
      <main className="flex-1 min-h-screen flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-background">
        <div className="w-full max-w-[440px] flex flex-col gap-stack-lg">
          {/* Mobile Header Only */}
          <div className="md:hidden">
            <h1 className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
              Cue AI
            </h1>
          </div>
          <header className="flex flex-col gap-stack-xs">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Create your account
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Start building with advanced AI tools today.
            </p>
          </header>
          <form
            className="flex flex-col gap-stack-md"
            onsubmit="event.preventDefault();"
          >
            {/* Full Name Field */}
            <div className="flex flex-col gap-base">
              <label
                className="font-label-md text-label-md text-on-surface-variant"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <div className="input-glow flex items-center bg-surface-container-lowest border border-outline-variant/30 rounded-lg h-12 px-stack-sm transition-all duration-300">
                <span
                  className="material-symbols-outlined text-outline text-[20px] mr-stack-sm"
                  data-icon="person"
                >
                  person
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full font-label-caps text-label-caps placeholder:text-outline/50"
                  id="fullname"
                  name="fullname"
                  placeholder="Alan Turing"
                  type="text"
                />
              </div>
            </div>
            {/* Email Field */}
            <div className="flex flex-col gap-base">
              <label
                className="font-label-md text-label-md text-on-surface-variant"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="input-glow flex items-center bg-surface-container-lowest border border-outline-variant/30 rounded-lg h-12 px-stack-sm transition-all duration-300">
                <span
                  className="material-symbols-outlined text-outline text-[20px] mr-stack-sm"
                  data-icon="alternate_email"
                >
                  alternate_email
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full font-label-caps text-label-caps placeholder:text-outline/50"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="flex flex-col gap-base">
              <div className="flex justify-between items-center">
                <label
                  className="font-label-md text-label-md text-on-surface-variant"
                  htmlFor="password"
                >
                  Password
                </label>
                <span className="font-label-md text-label-md text-outline cursor-pointer hover:text-on-surface transition-colors">
                  Show
                </span>
              </div>
              <div className="input-glow flex items-center bg-surface-container-lowest border border-outline-variant/30 rounded-lg h-12 px-stack-sm transition-all duration-300">
                <span
                  className="material-symbols-outlined text-outline text-[20px] mr-stack-sm"
                  data-icon="lock"
                >
                  lock
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full font-label-caps text-label-caps placeholder:text-outline/50"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
            {/* Terms */}
            <p className="font-label-md text-label-md text-on-surface-variant leading-relaxed">
              By clicking "Create Account", you agree to our
              <a className="text-primary hover:underline" href="#">
                Terms of Service
              </a>{" "}
              and
              <a className="text-primary hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </p>
            {/* Primary Action */}
            <button
              className="primary-glow h-12 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline-md text-label-md rounded-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              type="submit"
            >
              Create Account
            </button>
          </form>
          {/* Separator */}
          <div className="flex items-center gap-stack-sm">
            <div className="h-[1px] flex-1 bg-outline-variant/20" />
            <span className="font-label-md text-label-md text-outline">OR</span>
            <div className="h-[1px] flex-1 bg-outline-variant/20" />
          </div>
          {/* Toggle/Secondary Action */}
          <div className="flex flex-col gap-stack-sm items-center">
            <a
              className="group flex items-center gap-base glass-panel px-stack-md py-stack-sm rounded-full transition-all duration-300 hover:bg-surface-container-highest"
              href="#"
            >
              <span
                className="material-symbols-outlined text-secondary text-[20px]"
                data-icon="bolt"
              >
                bolt
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                Sign up as a Creator instead
              </span>
            </a>
            <p className="font-label-md text-label-md text-on-surface-variant mt-stack-sm">
              Already have an account?{" "}
              <a className="text-primary font-bold hover:underline" href="#">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </main>
      </div>
    </>

  );
};

export default Signup;
