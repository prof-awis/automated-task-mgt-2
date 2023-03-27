import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
// import { FiLogOut } from "react-icons/fi";

// class LogOut extends Component {
//   render() {
//     return <FiLogOut />;
//   }
// }

// export  default LogOut;

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
