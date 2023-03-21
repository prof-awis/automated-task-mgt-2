import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/getstarted" element={<GetStarted />} />
    </Routes>
  );
}

export default App;
