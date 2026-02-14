import React, { useState } from 'react';
import { Contact } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-top bg-no-repeat relative font-sans"
      style={{
        backgroundImage: `url('https://shrishreenathjitraders.in/admin/images/cover.jpg')`,
        backgroundPosition: 'center top'
      }}
    >
      {/* Dark Overlay for contrast - Matching screenshot depth */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative w-full max-w-[450px] mx-4 mt-12">
        <form onSubmit={handleSubmit} autoComplete="off">
          {/* Material Card Container */}
          <div className="bg-[#1f283e] rounded-md shadow-[0_10px_30px_-12px_rgba(0,0,0,0.42),0_4px_25px_0px_rgba(0,0,0,0.12),0_8px_10px_-5px_rgba(0,0,0,0.2)] relative pb-4 pt-20">

            {/* Wide Green Header Card Overlay - Exactly as in Screenshot */}
            <div className="absolute -top-10 left-5 right-5 h-[90px] bg-gradient-to-tr from-[#43a047] to-[#66bb6a] rounded-md shadow-[0_4px_20px_0_rgba(0,0,0,0.14),0_7px_10px_-5px_rgba(76,175,80,0.4)] flex items-center justify-center z-10">
              <Contact className="w-10 h-10 text-white opacity-100" />
            </div>

            <div className="px-8 pb-4 space-y-12">
              <div style={{ color: 'red' }}></div>

              {/* Username Input Row */}
              <div className="flex items-center gap-4">
                <label className="text-slate-200 text-sm font-normal w-28">Username</label>
                <div className="flex-1">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-white/20 text-white pb-1 focus:outline-none focus:border-[#4caf50] transition-colors text-[14px]"
                  />
                </div>
              </div>

              {/* Password Input Row */}
              <div className="flex items-center gap-4">
                <label className="text-slate-200 text-sm font-normal w-28">Password</label>
                <div className="flex-1">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    className="w-full bg-transparent border-b border-white/20 text-white pb-1 focus:outline-none focus:border-[#4caf50] transition-colors text-[14px]"
                  />
                </div>
              </div>

              {/* Card Footer with Sign In Button */}
              <div className="pt-2 pb-2">
                <button
                  type="submit"
                  className="bg-[#5cb85c] hover:bg-[#4caf50] text-white font-bold py-3 px-8 rounded shadow-lg uppercase text-[11px] tracking-widest transition-all active:scale-95"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
