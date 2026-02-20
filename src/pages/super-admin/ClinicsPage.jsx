import React, { useState } from 'react';
import {
    Plus, Search, RotateCcw, Building2, User, MapPin,
    Activity, ArrowRight, MoreVertical,
    Stethoscope, Users, Calendar, ShieldCheck
} from 'lucide-react';

const ClinicsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const clinics = [
        { id: 'CLN001', name: 'Elite Trading Clinic', doctor: 'Dr. John Smith', location: 'Mumbai, IN', patients: 1240, status: 'Active', growth: '+12%' },
        { id: 'CLN002', name: 'Global Traders Hub', doctor: 'Dr. Sarah Wilson', location: 'London, UK', patients: 850, status: 'Active', growth: '+8%' },
        { id: 'CLN003', name: 'Prime Health Clinic', doctor: 'Dr. Mike Ross', location: 'New York, US', patients: 2100, status: 'Suspended', growth: '0%' },
        { id: 'CLN004', name: 'NextGen Medical', doctor: 'Dr. Amy Adams', location: 'Singapore, SG', patients: 150, status: 'Active', growth: '+25%' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#1a2035] p-6 space-y-8 overflow-y-auto custom-scrollbar">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(76, 175, 80, 0.3); border-radius: 10px; }
            `}</style>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-[#1f283e] to-[#151c2c] p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 text-white">
                    <Building2 className="w-64 h-64" />
                </div>
                <div className="relative z-10 space-y-2">
                    <h1 className="text-4xl font-black text-white tracking-tighter flex items-center gap-4">
                        <div className="p-3 bg-[#4CAF50]/10 border border-[#4CAF50]/20 rounded-2xl shadow-inner">
                            <Stethoscope className="w-10 h-10 text-[#4CAF50]" />
                        </div>
                        Clinic Management
                    </h1>
                    <p className="text-[#4CAF50] text-[10px] font-black uppercase tracking-[0.2em] mt-1 italic border-l-2 border-[#4CAF50]/30 pl-4">Super Admin Enterprise Surveillance / Clinics</p>
                </div>
                <button className="btn-success-gradient text-white px-10 py-4 rounded-2xl font-black text-xs tracking-[0.2em] flex items-center gap-4 shadow-2xl transition-all uppercase active:scale-95 group relative z-10 border border-white/10">
                    <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                    REGISTER NEW ENTITY
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: 'Total Clinics', value: '42', icon: Building2, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                    { label: 'Total Patients', value: '12,840', icon: Users, color: 'text-[#4CAF50]', bg: 'bg-[#4CAF50]/10' },
                    { label: 'Active Appointments', value: '156', icon: Calendar, color: 'text-purple-400', bg: 'bg-purple-400/10' },
                    { label: 'System Health', value: '99.9%', icon: ShieldCheck, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#1f283e] p-8 rounded-3xl border border-white/5 shadow-2xl group hover:border-[#4caf50]/30 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
                            <stat.icon className="w-16 h-16 text-white" />
                        </div>
                        <div className="flex justify-between items-start relative z-10">
                            <div className={`p-4 ${stat.bg} ${stat.color} rounded-2xl shadow-inner border border-white/5`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black text-[#4CAF50] bg-[#4CAF50]/10 px-3 py-1.5 rounded-full border border-[#4CAF50]/10 tracking-widest">+2.5%</span>
                        </div>
                        <div className="mt-6 relative z-10">
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                            <h3 className="text-white text-4xl font-black tracking-tighter mt-2">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Table Area */}
            <div className="relative pt-12 pb-10">
                <div className="bg-[#1f283e] rounded-3xl border border-white/5 shadow-3xl overflow-hidden flex flex-col relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-20"></div>

                    {/* Table Offset Header */}
                    <div className="absolute -top-6 left-8 right-8 btn-success-gradient p-6 rounded-2xl shadow-2xl z-10 flex justify-between items-center border border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-white text-lg font-black uppercase tracking-tighter">Global Clinic Directory</h2>
                        </div>
                        <span className="text-white font-black text-[10px] uppercase tracking-[0.3em] opacity-80 flex items-center gap-2">
                            <Activity className="w-4 h-4 animate-pulse" /> Live Node Surveillance
                        </span>
                    </div>

                    {/* Table Filter Bar */}
                    <div className="p-10 pt-16 border-b border-white/5 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="relative w-full md:w-[450px] group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-[#4CAF50] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by clinic name, doctor or ID..."
                                className="w-full bg-[#151c2c] border-2 border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-[#4caf50] transition-all shadow-inner placeholder:text-slate-700 font-medium"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <div className="relative group">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[#4CAF50]" />
                                <select
                                    className="bg-[#151c2c] border-2 border-white/5 text-white text-sm rounded-2xl pl-12 pr-10 py-4 focus:outline-none focus:border-[#4caf50] appearance-none cursor-pointer shadow-inner font-bold uppercase tracking-widest text-[10px]"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">ALL ENTITIES</option>
                                    <option value="active">ONLINE STATUS</option>
                                    <option value="suspended">OFFLINE STATUS</option>
                                </select>
                            </div>
                            <button
                                onClick={() => { setSearchTerm(''); setStatusFilter('all'); }}
                                className="p-4 bg-[#151c2c] border-2 border-white/5 rounded-2xl text-slate-500 hover:text-[#4CAF50] hover:border-[#4CAF50]/30 transition-all shadow-inner group"
                            >
                                <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[1100px]">
                            <thead>
                                <tr className="bg-[#151c2c]/30 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                                    <th className="px-10 py-8">Node ID</th>
                                    <th className="px-10 py-8">Clinic Entity</th>
                                    <th className="px-10 py-8">Primary Specialist</th>
                                    <th className="px-10 py-8 text-center">Patients</th>
                                    <th className="px-10 py-8">System Status</th>
                                    <th className="px-10 py-8 text-right">Surveillance</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                {clinics.map((clinic, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-10 py-8 font-mono text-[10px] font-black text-slate-600 tracking-tighter group-hover:text-[#4CAF50] transition-colors">{clinic.id}</td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-5">
                                                <div className="p-3 bg-gradient-to-br from-[#4caf50]/20 to-transparent rounded-xl border border-[#4caf50]/10 shadow-lg group-hover:scale-110 transition-transform">
                                                    <Building2 className="w-6 h-6 text-[#4caf50]" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-white font-black text-base tracking-tight">{clinic.name}</span>
                                                    <span className="text-[10px] text-slate-500 font-bold flex items-center gap-2">
                                                        <MapPin className="w-3 h-3" /> {clinic.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-white/5 flex items-center justify-center text-[#4CAF50] font-black text-sm">
                                                    {clinic.doctor.split(' ').pop().charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-black text-white text-sm tracking-tight">{clinic.doctor}</span>
                                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Medical Lead</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col items-center">
                                                <span className="text-white font-black text-xl tracking-tight">{clinic.patients}</span>
                                                <div className="flex items-center gap-1 text-[10px] text-[#4caf50] font-black uppercase tracking-tighter">
                                                    <Activity className="w-3 h-3" /> {clinic.growth}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-inner border ${clinic.status === 'Active' ? 'bg-[#4caf50]/10 text-[#4caf50] border-[#4caf50]/20' : 'bg-red-400/10 text-red-400 border-red-400/20'
                                                }`}>
                                                <div className={`w-2 h-2 rounded-full animate-pulse ${clinic.status === 'Active' ? 'bg-[#4caf50]' : 'bg-red-400'}`}></div>
                                                {clinic.status}
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                                <button className="p-3 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all border border-transparent hover:border-white/10">
                                                    <MoreVertical className="w-5 h-5" />
                                                </button>
                                                <button className="flex items-center gap-3 bg-white hover:bg-slate-100 text-[#1a2035] px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all">
                                                    Full Audit <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-10 bg-[#151c2c]/30 flex items-center justify-between border-t border-white/5">
                        <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
                            Showing 4 of 48 entities in active surveillance
                        </span>
                        <div className="flex gap-3">
                            <button className="w-10 h-10 flex items-center justify-center bg-[#4caf50] text-white text-xs font-black rounded-xl shadow-lg shadow-[#4caf50]/20">1</button>
                            <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-500 text-xs font-black hover:text-white hover:bg-white/10 transition-all">2</button>
                            <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-500 text-xs font-black hover:text-white hover:bg-white/10 transition-all">3</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicsPage;
