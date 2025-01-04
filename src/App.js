import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Challenge from "./pages/Challenges";
import AppLayout from "./components/AppLayout";
import Programming from "./pages/Programming";
import Health from "./pages/Health";

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
            <Route path="/Health" element={<Health />} />
          </Route>

          {/* Catch-all route for 404 Page Not Found */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


