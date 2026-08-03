import { FileText, Download, Calendar, Filter, PieChart } from 'lucide-react';

export function Reports() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Generate Reports</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Create custom reports for classes, exams, or individual students.</p>
      </div>

      <div className="glass p-8 rounded-3xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary-500" />
          Report Configuration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Report Type</label>
            <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500">
              <option>Daily Classroom Summary</option>
              <option>Exam Integrity Report</option>
              <option>Student Performance Analytics</option>
              <option>Monthly Attendance Log</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date Range</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="date" className="w-full pl-9 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <span className="flex items-center text-slate-400">to</span>
              <div className="relative flex-1">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="date" className="w-full pl-9 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Target Group</label>
            <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500">
              <option>All Classes</option>
              <option>Class 10-A (Computer Science)</option>
              <option>Class 12-B (Physics)</option>
              <option>Individual Student</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Include Metrics</label>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap gap-2">
               <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-medium cursor-pointer">Focus Score</span>
               <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-medium cursor-pointer">Incidents</span>
               <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium cursor-pointer">Attendance</span>
               <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium cursor-pointer">+ Add Metric</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <button className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors flex items-center gap-2">
            <PieChart className="w-4 h-4" />
            Preview
          </button>
          <button className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors flex items-center gap-2 shadow-lg shadow-primary-500/30">
            <Download className="w-4 h-4" />
            Generate PDF
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Recent Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass p-4 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white line-clamp-1">Midterm Exam Report</h4>
                <p className="text-xs text-slate-500 mt-1">Generated: 2 days ago</p>
                <div className="mt-2 text-xs font-medium text-primary-500 hover:underline">Download PDF</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
