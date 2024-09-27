// src/routing/Router.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../components/login/Login";
import { Navbar } from "../components/navbar/Navbar";
// Import other page components here

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} /> {/* Default route */}
          <Route index element={<Navbar />} />
          {/* Define more routes here as needed */}
          {/* <Route path="other-path" element={<OtherComponent />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterConfig;
