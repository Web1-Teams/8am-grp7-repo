import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Challenge from "./pages/Challenges";
import AppLayout from "./components/AppLayout";
import Programming from "./pages/Programming";

import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";
import React from "./pages/React";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route index path="/home" element={<Home />} />
            <Route path="/challenges" element={<Challenge />} />
            <Route path="/education" element={<Education />} />

            <Route path="/programming" element={<Programming />} />
            <Route path="Programming/HTML" element={<HTML />} />
            <Route path="Programming/CSS" element={<CSS />} />
            <Route path="Programming/JavaScript" element={<JavaScript />} />
            <Route path="Programming/React" element={<React />} />
          </Route>

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
