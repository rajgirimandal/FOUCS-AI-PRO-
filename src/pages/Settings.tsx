import { Bell, Camera, Lock, Monitor, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SettingSection = ({ title, icon: Icon, children }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass p-6 rounded-3xl"
  >
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-lg">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </motion.div>
);

const Toggle = ({ label, description, defaultChecked = false }: any) => (
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-medium text-slate-800 dark:text-slate-200">{label}</h4>
      {description && <p className="text-sm text-slate-500">{description}</p>}
    </div>
    <div className={cn(
      "w-11 h-6 rounded-full relative cursor-pointer transition-colors",
      defaultChecked ? "bg-primary-500" : "bg-slate-300 dark:bg-slate-600"
    )}>
      <div className={cn(
        "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
        defaultChecked ? "left-6" : "left-1"
      )} />
    </div>
  </div>
);

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">System Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Configure Focus AI Pro to match your institution's needs</p>
      </div>

      <SettingSection title="Hardware & AI Models" icon={Camera}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="font-medium text-slate-800 dark:text-slate-200">Default Camera</label>
            <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none">
              <option>Logitech C920 HD Pro Webcam</option>
              <option>Integrated Camera</option>
              <option>OBS Virtual Camera</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-medium text-slate-800 dark:text-slate-200">AI Processing Mode</label>
            <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none">
              <option>Balanced (Recommended)</option>
              <option>High Performance (Uses more CPU/GPU)</option>
              <option>Battery Saver (Lower frame rate)</option>
            </select>
            <p className="text-xs text-slate-500">Currently using TensorFlow.js with WebGL acceleration.</p>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Notifications & Alerts" icon={Bell}>
        <Toggle label="Push Notifications" description="Receive browser notifications for high-priority alerts" defaultChecked={true} />
        <Toggle label="Email Daily Summary" description="Send a summary report to teacher@school.edu at 5 PM" defaultChecked={true} />
        <Toggle label="Sound Alerts" description="Play a subtle sound when cheating is detected during exams" defaultChecked={false} />
      </SettingSection>

      <SettingSection title="Privacy & Security" icon={Shield}>
        <Toggle label="Blur Student Faces" description="Blur faces on dashboard to maintain privacy (AI still processes underneath)" defaultChecked={false} />
        <Toggle label="Data Retention" description="Automatically delete class recordings after 30 days" defaultChecked={true} />
        <div className="pt-4 flex justify-between items-center">
           <div>
             <h4 className="font-medium text-slate-800 dark:text-slate-200">End-to-End Encryption</h4>
             <p className="text-sm text-slate-500">All data is encrypted in transit and at rest.</p>
           </div>
           <Lock className="w-5 h-5 text-emerald-500" />
        </div>
      </SettingSection>

      <SettingSection title="Appearance" icon={Monitor}>
         <div className="flex gap-4">
           {['Light', 'Dark', 'System Auto'].map((theme, i) => (
             <button key={i} className={`flex-1 py-4 rounded-xl border-2 font-medium transition-all ${i === 1 ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}>
               {theme}
             </button>
           ))}
         </div>
      </SettingSection>

      <div className="flex justify-end gap-4 pt-4 pb-12">
        <button className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 font-medium transition-colors">
          Reset to Defaults
        </button>
        <button className="px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}
