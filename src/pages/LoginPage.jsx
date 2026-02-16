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
      className="page-header min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://shrishreenathjitraders.in/admin/images/cover.jpg')`,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Card Container */}
      <div className="relative w-full max-w-[500px] mx-auto px-4">
        <form onSubmit={handleSubmit} autoComplete="off">
          {/* Material Design Card */}
          <div className="card card-dark relative">

            {/* Card Header - Success Style - Centered with Icon on Left */}
            <div className="card-header-success absolute left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-[70px] flex items-center justify-start px-6">
              <Contact className="w-8 h-8 text-white" />
            </div>

            {/* Card Body */}
            <div className="px-8 pt-16 pb-5">

              {/* Form Fields Container */}
              <div className="space-y-5 mb-4">

                {/* Username Field */}
                <div className="flex items-center gap-4">
                  <label className="text-slate-300 text-sm font-light w-24">
                    Username
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-white/20 text-white pb-1.5 focus:outline-none focus:border-[#4caf50] transition-colors text-sm"
                      style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="flex items-center gap-4">
                  <label className="text-slate-300 text-sm font-light w-24">
                    Password
                  </label>
                  <div className="flex-1">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="new-password"
                      className="w-full bg-transparent border-b border-white/20 text-white pb-1.5 focus:outline-none focus:border-[#4caf50] transition-colors text-sm"
                      style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Footer - Button */}
              <div className="pt-3 flex justify-start pl-0">
                <button
                  type="submit"
                  className="btn-success-gradient text-white font-bold py-2.5 px-8 rounded uppercase text-[11px] tracking-widest"
                  style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
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
