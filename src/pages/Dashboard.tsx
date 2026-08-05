import { motion } from 'framer-motion';
import { Users, Target, BrainCircuit, AlertTriangle, UserCheck, Activity } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { mockStats, mockFocusData, mockAlerts } from '../data/mockData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const StatCard = ({ title, value, icon: Icon, colorClass, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">{value}</h3>
      </div>
      <div className={cn("p-3 rounded-xl", colorClass)}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </motion.div>
);

export function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Classroom Overview</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Real-time monitoring and analytics dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Students"
          value={mockStats.totalStudents}
          icon={Users}
          colorClass="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          delay={0.1}
        />
        <StatCard
          title="Average Focus Score"
          value={`${mockStats.averageFocusScore}%`}
          icon={Target}
          colorClass="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
          delay={0.2}
        />
        <StatCard
          title="Cheating Alerts"
          value={mockStats.cheatingAlerts}
          icon={AlertTriangle}
          colorClass="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          delay={0.3}
        />
        <StatCard
          title="Focused Students"
          value={mockStats.focusedStudents}
          icon={BrainCircuit}
          colorClass="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
          delay={0.4}
        />
        <StatCard
          title="Attendance"
          value={`${mockStats.attendancePercentage}%`}
          icon={UserCheck}
          colorClass="bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
          delay={0.5}
        />
        <StatCard
          title="System Health"
          value="Optimal"
          icon={Activity}
          colorClass="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
          delay={0.6}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2 glass p-6 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Live Focus Trend</h2>
            <select className="bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 text-sm border-none outline-none">
              <option>Today</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockFocusData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="glass p-6 rounded-3xl flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Recent Alerts</h2>
            <button className="text-primary-500 text-sm font-medium hover:underline">View All</button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {mockAlerts.map((alert) => (
              <div key={alert.id} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                <div className={cn(
                  "w-2 rounded-full",
                  alert.severity === 'high' ? "bg-red-500" :
                  alert.severity === 'medium' ? "bg-amber-500" : "bg-blue-500"
                )} />
                <div className="flex-1">
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">{alert.message}</p>
                  <p className="text-xs text-slate-500 mt-1">{alert.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
