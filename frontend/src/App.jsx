import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Main from "./pages/Main";
import BioData from "./pages/BioData";
import PrayerPoint from "./pages/PrayerPoint"
import AdminDashboard from "./pages/AdminDashboard";
import AdminPrayers from "./pages/AdminPrayers";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<BioData />} />
        <Route path="/prayer" element={<PrayerPoint />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/prayers" element={
          <ProtectedRoute>
            <AdminPrayers />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App