import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { LiveClassroom } from './pages/LiveClassroom';
import { ExamDetection } from './pages/ExamDetection';
import { Reports } from './pages/Reports';
import { Analytics } from './pages/Analytics';
import { Attendance } from './pages/Attendance';
import { Resources } from './pages/Resources';
import { Settings } from './pages/Settings';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/live" element={<LiveClassroom />} />
          <Route path="/exam" element={<ExamDetection />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
