import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Architecture from './pages/Architecture';
import AppDemo from './pages/AppDemo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/app" element={<AppDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
