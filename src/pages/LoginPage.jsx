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
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070')`
      }}
    >
      {/* Darkened Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full max-w-[400px] mx-4">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="bg-[#1f283e] rounded-md shadow-2xl relative mt-16 pb-6">

            {/* Material Card Header - Success */}
            <div className="mx-4 -mt-10 bg-[#4CAF50] p-6 rounded-md shadow-lg flex justify-center items-center mb-8">
              <Contact className="w-10 h-10 text-white" />
            </div>

            <div className="px-8 space-y-8">
              {/* Username Row */}
              <div className="flex items-end gap-4 group">
                <label className="text-slate-200 text-sm font-medium w-24 pb-2">Username</label>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors"
                  />
                  <div className="help-block h-4"></div>
                </div>
              </div>

              {/* Password Row */}
              <div className="flex items-end gap-4 group">
                <label className="text-slate-200 text-sm font-medium w-24 pb-2">Password</label>
                <div className="flex-1 relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors"
                  />
                  <div className="help-block h-4"></div>
                </div>
              </div>

              {/* Login Button Section */}
              <div className="flex justify-start pt-4">
                <button
                  type="submit"
                  className="bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2.5 px-8 rounded shadow-lg uppercase text-[11px] tracking-widest transition-all active:scale-95"
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

