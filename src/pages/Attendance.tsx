import { motion } from 'framer-motion';
import { Download, Search, CheckCircle2, XCircle, AlertCircle, Calendar } from 'lucide-react';
import { mockStudents } from '../data/mockData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Attendance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Attendance Register</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and track student presence automatically</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">
            <Calendar className="w-4 h-4" />
            <span>Today, {new Date().toLocaleDateString()}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="glass rounded-3xl overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/20">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="font-medium">Present: <span className="text-emerald-500">118</span></span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <span className="font-medium">Absent: <span className="text-red-500">6</span></span>
            </div>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search student by name or roll no..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Student Name</th>
                <th className="p-4 font-semibold">Roll Number</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Focus Score</th>
                <th className="p-4 font-semibold">Last Active</th>
                <th className="p-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {mockStudents.map((student, i) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-400 to-purple-400 flex items-center justify-center text-white font-bold shadow-sm">
                        {student.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400 font-medium">{student.rollNumber}</td>
                  <td className="p-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold border",
                      student.status === 'Focused' ? "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800" :
                      student.status === 'Distracted' ? "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800" :
                      student.status === 'Suspicious' ? "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800" :
                      "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                    )}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium w-8">{student.focusScore}%</span>
                      <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={cn("h-full",
                            student.focusScore > 80 ? "bg-emerald-500" :
                            student.focusScore > 50 ? "bg-amber-500" : "bg-red-500"
                          )}
                          style={{ width: `${student.focusScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 text-sm">{student.lastActive}</td>
                  <td className="p-4">
                    <button className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors opacity-0 group-hover:opacity-100">
                      <AlertCircle className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
          <span className="text-sm text-slate-500">Showing {mockStudents.length} of 124 students</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 rounded bg-primary-600 text-white text-sm hover:bg-primary-700">1</button>
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm">2</button>
            <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
