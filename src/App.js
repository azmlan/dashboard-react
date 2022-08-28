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
    <div className="App    bg-light">
      <Router>
      <div className="sidebarApp  ">
        <Sidebar />
      </div>
      <div className="appContent d-flex flex-column  justify-content-between">
        <div className="navbarApp  ">
          <Navbar />
        </div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/products" element={<Products/>}/>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
        <div className="footerApp mt-5 ">
          <Footer />
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
