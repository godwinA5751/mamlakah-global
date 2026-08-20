import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Main from "./pages/Main";
import BioData from "./pages/BioData";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<BioData />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App