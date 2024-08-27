import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DashboardOperasional from "./pages/operasional/dashboard/DashboardOperasional";
// import DashboardNonOperasional from './components/DashboardNonOperasional';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/operasional" element={<DashboardOperasional />} />
        {/* <Route path="/non-operasional" element={<DashboardNonOperasional />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
