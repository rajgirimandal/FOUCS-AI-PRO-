import type { Student, Alert, Stats, Incident, Resource } from '../types';

export const mockStats: Stats = {
  totalStudents: 124,
  focusedStudents: 98,
  distractedStudents: 15,
  cheatingAlerts: 3,
  attendancePercentage: 92,
  averageFocusScore: 85,
};

export const mockStudents: Student[] = [
  { id: '1', name: 'Alex Johnson', rollNumber: 'CS101', status: 'Focused', focusScore: 92, lastActive: 'Just now' },
  { id: '2', name: 'Sarah Williams', rollNumber: 'CS102', status: 'Distracted', focusScore: 45, lastActive: '2 mins ago' },
  { id: '3', name: 'Michael Chen', rollNumber: 'CS103', status: 'Suspicious', focusScore: 20, lastActive: 'Just now' },
  { id: '4', name: 'Emily Davis', rollNumber: 'CS104', status: 'Focused', focusScore: 88, lastActive: 'Just now' },
  { id: '5', name: 'David Smith', rollNumber: 'CS105', status: 'Absent', focusScore: 0, lastActive: 'N/A' },
  { id: '6', name: 'Jessica Taylor', rollNumber: 'CS106', status: 'Focused', focusScore: 95, lastActive: 'Just now' },
  { id: '7', name: 'Christopher Brown', rollNumber: 'CS107', status: 'Distracted', focusScore: 55, lastActive: '5 mins ago' },
  { id: '8', name: 'Amanda Miller', rollNumber: 'CS108', status: 'Focused', focusScore: 90, lastActive: 'Just now' },
];

export const mockAlerts: Alert[] = [
  { id: '1', type: 'cheating', message: 'Multiple faces detected at Desk 12', timestamp: '10:05 AM', severity: 'high', studentId: '3' },
  { id: '2', type: 'distraction', message: 'Low focus in Row 3', timestamp: '10:15 AM', severity: 'medium' },
  { id: '3', type: 'system', message: 'Camera 2 signal weak', timestamp: '09:50 AM', severity: 'low' },
  { id: '4', type: 'cheating', message: 'Phone detected at Desk 5', timestamp: '10:22 AM', severity: 'high', studentId: '7' },
];

export const mockIncidents: Incident[] = [
  { id: '1', studentName: 'Michael Chen', type: 'Looking Left', time: '10:05 AM', confidence: 95 },
  { id: '2', studentName: 'Christopher Brown', type: 'Phone Usage', time: '10:22 AM', confidence: 88 },
  { id: '3', studentName: 'Unknown', type: 'Multiple Faces', time: '10:45 AM', confidence: 92 },
];

export const mockResources: Resource[] = [
  { id: '1', title: 'Chapter 1: Introduction to Calculus', category: 'Math', type: 'pdf', dateAdded: '2023-10-01' },
  { id: '2', title: 'Physics Experiment Guidelines', category: 'Physics', type: 'pdf', dateAdded: '2023-10-05' },
  { id: '3', title: 'Biology Cell Structure Video', category: 'Biology', type: 'video', dateAdded: '2023-10-10' },
  { id: '4', title: 'NCERT Chemistry Solutions', category: 'Chemistry', type: 'link', dateAdded: '2023-10-12' },
];

export const mockFocusData = [
  { time: '09:00', score: 85 },
  { time: '09:15', score: 88 },
  { time: '09:30', score: 92 },
  { time: '09:45', score: 80 },
  { time: '10:00', score: 75 },
  { time: '10:15', score: 82 },
  { time: '10:30', score: 89 },
];

export const mockAttendanceData = [
  { name: 'Mon', present: 110, absent: 14 },
  { name: 'Tue', present: 115, absent: 9 },
  { name: 'Wed', present: 118, absent: 6 },
  { name: 'Thu', present: 112, absent: 12 },
  { name: 'Fri', present: 120, absent: 4 },
];
