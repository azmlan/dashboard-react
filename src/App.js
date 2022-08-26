import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Orders from "./pages/Orders";
import Clients from "./pages/Clients";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App   col-12 d-flex  vh-100">
      <Router>
      <div className="sidebarApp col-2 ">
        <Sidebar />
      </div>
      <div className="col-9    d-flex flex-column flex-grow-1 justify-content-between">
        <div className="  p-4">
          <Navbar />
        </div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/clients" element={<Clients/>}/>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
        <div className=" p-3">
          <Footer />
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
