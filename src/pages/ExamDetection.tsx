import { motion } from 'framer-motion';
import { AlertTriangle, Clock, EyeOff, FileWarning, Search, Shield, UserX } from 'lucide-react';
import { mockIncidents } from '../data/mockData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ExamDetection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary-600" />
            Exam Detection Mode
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">High-sensitivity monitoring for remote and in-person examinations</p>
        </div>
        <div className="flex gap-3">
          <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border-red-500/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="font-medium text-red-600 dark:text-red-400">Strict Mode Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Overall Integrity', value: '94%', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
           { label: 'Active Incidents', value: '3', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10' },
           { label: 'Suspicious Behaviors', value: '12', icon: EyeOff, color: 'text-amber-500', bg: 'bg-amber-500/10' },
           { label: 'Students Flagged', value: '2', icon: UserX, color: 'text-purple-500', bg: 'bg-purple-500/10' },
         ].map((stat, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="glass p-6 rounded-2xl flex items-center gap-4"
           >
             <div className={cn("p-4 rounded-xl", stat.bg, stat.color)}>
               <stat.icon className="w-6 h-6" />
             </div>
             <div>
               <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
               <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</h3>
             </div>
           </motion.div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Incident Timeline</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search incidents..."
                className="pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm border-none outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            {mockIncidents.map((incident, i) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="relative pl-8 before:absolute before:left-[11px] before:top-8 before:bottom-[-24px] before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700 last:before:hidden"
              >
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 border-2 border-red-500 flex items-center justify-center z-10">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-lg">{incident.type}</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">{incident.studentName}</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-slate-500 bg-white dark:bg-slate-900 px-3 py-1 rounded-full shadow-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {incident.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">AI Confidence:</span>
                      <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={cn("h-full", incident.confidence > 90 ? "bg-red-500" : "bg-amber-500")}
                          style={{ width: `${incident.confidence}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium dark:text-slate-300">{incident.confidence}%</span>
                    </div>
                    <button className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center gap-1">
                      <FileWarning className="w-4 h-4" />
                      View Snapshot
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6 h-fit">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Detection Rules</h2>
          <div className="space-y-4">
            {[
              { rule: 'Multiple Faces', active: true },
              { rule: 'Looking Away (Extended)', active: true },
              { rule: 'Phone Detection', active: true },
              { rule: 'Head Down', active: true },
              { rule: 'Leaving Seat', active: true },
              { rule: 'Talking/Audio', active: false },
            ].map((rule, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <span className="font-medium text-slate-700 dark:text-slate-300">{rule.rule}</span>
                <div className={cn(
                  "w-11 h-6 rounded-full relative cursor-pointer transition-colors",
                  rule.active ? "bg-primary-500" : "bg-slate-300 dark:bg-slate-600"
                )}>
                  <div className={cn(
                    "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                    rule.active ? "left-6" : "left-1"
                  )} />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 font-medium hover:border-primary-500 hover:text-primary-500 transition-colors">
            + Add Custom Rule
          </button>
        </div>
      </div>
    </div>
  );
}
