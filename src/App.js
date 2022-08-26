import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Orders from "./pages/Orders";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App   col-12 d-flex  vh-100">
      <Router>
      <div className="col-2 bg-dark">
        <Sidebar />
      </div>
      <div className="col-9  bg-primary  d-flex flex-column flex-grow-1 justify-content-between">
        <div className=" bg-warning p-4">
          <Navbar />
        </div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Routes>
        <Route path="/employees" element={<Employees/>}/>
      </Routes>
      <Routes>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      <Routes>
        <Route path="/users" element={<Users/>}/>
      </Routes>

        <div className="bg-secondary p-3">
          <Footer />
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
