export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  status: 'Focused' | 'Distracted' | 'Suspicious' | 'Absent';
  focusScore: number;
  lastActive: string;
}

export interface Alert {
  id: string;
  type: 'cheating' | 'distraction' | 'system';
  message: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  studentId?: string;
}

export interface Stats {
  totalStudents: number;
  focusedStudents: number;
  distractedStudents: number;
  cheatingAlerts: number;
  attendancePercentage: number;
  averageFocusScore: number;
}

export interface Incident {
  id: string;
  studentName: string;
  type: string;
  time: string;
  confidence: number;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  type: 'pdf' | 'video' | 'link';
  dateAdded: string;
}

export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}
