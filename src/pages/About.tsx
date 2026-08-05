import { ScanEye } from 'lucide-react';
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-12 text-center"
      >
        <div className="w-24 h-24 bg-gradient-to-tr from-primary-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-primary-500/30">
          <ScanEye className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Focus AI Pro
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto">
          The next generation of classroom monitoring and intelligence. Built for educators who demand excellence.
        </p>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-12">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
            <p className="text-sm text-slate-500 mb-1">Version</p>
            <p className="font-bold text-lg">2.4.0</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
            <p className="text-sm text-slate-500 mb-1">License</p>
            <p className="font-bold text-lg">Enterprise</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
          <p>Powered by TensorFlow.js, MoveNet, and MediaPipe.</p>
          <p>© 2024 Focus AI Technologies Inc. All rights reserved.</p>
        </div>

        <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <button className="p-3 rounded-full glass hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <TwitterLogoIcon className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full glass hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <GitHubLogoIcon className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
