import React, { useState } from 'react';
import { Contact } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Allow any email/password as per requirement
    onLogin(username);
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')` 
      }}
    >
      <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}

      <div className="relative w-full max-w-sm mx-4 overflow-hidden rounded shadow-2xl">
        {/* Card Header */}
        <div className="bg-[#4CAF50] p-6 flex justify-center">
          <div className="p-3 bg-[#4CAF50]/20 rounded">
            <Contact className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-[#151c2c] p-8 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors peer placeholder-transparent"
                placeholder="Username"
                id="username"
              />
              <label 
                htmlFor="username"
                className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-400 peer-focus:text-sm"
              >
                Username
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent border-b border-slate-600 text-white py-2 focus:outline-none focus:border-[#4CAF50] transition-colors peer placeholder-transparent"
                placeholder="Password"
                id="password"
              />
              <label 
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-400 peer-focus:text-sm"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="w-24 bg-[#4CAF50] hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all uppercase text-xs shadow-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
