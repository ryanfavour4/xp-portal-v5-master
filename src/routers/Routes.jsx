import React from "react";
import { Routes, Route } from "react-router-dom";
import Faculty from "../view/pages/faculty/Faculty";
import Department from "../view/pages/department/Department";
import Sidebar from "../view/layout/Sidebar";
import Navbar from "../view/layout/Navbar";

function Routers() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/department" element={<Department />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Routers;
