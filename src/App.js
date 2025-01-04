import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Challenge from "./pages/Challenges";
import AppLayout from "./components/AppLayout";
import Programming from "./pages/Programming";
import Health from "./pages/Health";

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
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/Health" element={<Health />} />
=======
=======
>>>>>>> 161d159e16fc70a238cea7fa92821c6b5d3cd1d1
            <Route path="Programming/HTML" element={<HTML />} />
            <Route path="Programming/CSS" element={<CSS />} />
            <Route path="Programming/JavaScript" element={<JavaScript />} />
            <Route path="Programming/React" element={<React />} />
<<<<<<< HEAD
>>>>>>> 161d159e16fc70a238cea7fa92821c6b5d3cd1d1
=======
>>>>>>> 161d159e16fc70a238cea7fa92821c6b5d3cd1d1
          </Route>

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
