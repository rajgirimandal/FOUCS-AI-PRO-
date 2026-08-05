import { BookOpen, Search, Video, FileText, Link as LinkIcon, Download } from 'lucide-react';
import { mockResources } from '../data/mockData';
import { motion } from 'framer-motion';

export function Resources() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary-600" />
            Teacher Resource Center
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Access guides, NCERT materials, and best practices</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {['All Resources', 'NCERT Solutions', 'Pedagogy Guides', 'Exam Setup', 'AI Configuration'].map((cat, i) => (
          <button key={i} className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors ${i === 0 ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' : 'glass hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for study materials, guides, or videos..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl glass text-lg outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResources.map((resource, i) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-3xl hover:shadow-xl transition-all group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${
                resource.type === 'pdf' ? 'bg-red-100 text-red-600' :
                resource.type === 'video' ? 'bg-blue-100 text-blue-600' :
                'bg-emerald-100 text-emerald-600'
              }`}>
                {resource.type === 'pdf' && <FileText className="w-6 h-6" />}
                {resource.type === 'video' && <Video className="w-6 h-6" />}
                {resource.type === 'link' && <LinkIcon className="w-6 h-6" />}
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                {resource.category}
              </span>
            </div>

            <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white line-clamp-2">{resource.title}</h3>
            <p className="text-sm text-slate-500 mb-6 flex-1">Added on {new Date(resource.dateAdded).toLocaleDateString()}</p>

            <button className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors mt-auto">
               <Download className="w-4 h-4" />
               {resource.type === 'link' ? 'Open Link' : 'Download'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
