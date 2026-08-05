import { Camera, Maximize, Settings2, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

export function LiveClassroom() {
  const [isSimulating, setIsSimulating] = useState(true);

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Live Classroom Monitoring</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time AI analysis of student attention and behavior</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Settings2 className="w-4 h-4" />
            <span>AI Settings</span>
          </button>
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <Camera className="w-4 h-4" />
            <span>{isSimulating ? 'Stop Camera' : 'Start Camera'}</span>
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Camera Feed */}
        <div className="lg:col-span-3 relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800 flex items-center justify-center">
          {isSimulating ? (
            <>
              {/* Mock Video Feed Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50" />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 p-1">
                 {/* Simulated Student Bounding Boxes */}
                 {[...Array(6)].map((_, i) => (
                   <div key={i} className="relative border-2 border-primary-500/30 rounded-xl overflow-hidden group">
                     <div className="absolute inset-0 bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors" />
                     {/* Bounding Box for Face */}
                     <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] border-2 border-emerald-500 rounded-lg opacity-70 animate-pulse">
                        <div className="absolute -top-6 left-0 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded shadow">
                          Focus: {Math.floor(Math.random() * 20) + 80}%
                        </div>
                     </div>
                     <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                       Student {i + 1}
                     </div>
                   </div>
                 ))}
              </div>

              {/* Overlay UI */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-red-500/80 text-white text-sm font-medium rounded-full flex items-center gap-2 backdrop-blur-md">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </span>
                <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-md border border-white/10">
                  Model: MoveNet + FaceMesh
                </span>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg backdrop-blur-md transition-colors">
                <Maximize className="w-5 h-5" />
              </button>
            </>
          ) : (
            <div className="text-center text-slate-500">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Camera is offline</p>
              <p className="text-sm">Click "Start Camera" to begin monitoring</p>
            </div>
          )}
        </div>

        {/* Real-time Analysis Sidebar */}
        <div className="glass rounded-3xl p-6 flex flex-col gap-6 overflow-y-auto">
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-primary-500" />
              Real-time Analysis
            </h3>

            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Class Focus Level</span>
                  <span className="font-bold text-emerald-500">85%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Active Distractions</span>
                  <span className="font-bold text-amber-500">2</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3 text-sm">Detected Behaviors</h4>
            <div className="space-y-3">
              {[
                { label: 'Head Direction', status: 'Normal', color: 'text-emerald-500' },
                { label: 'Eye Tracking', status: 'Tracking', color: 'text-primary-500' },
                { label: 'Phone Detection', status: 'Clear', color: 'text-emerald-500' },
                { label: 'Multiple Faces', status: 'Warning', color: 'text-amber-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                  <span className={`font-medium ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
             <button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg">
               Generate Snapshot Report
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
