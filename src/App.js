import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App   col-12 d-flex  vh-100">

    <div className="col-2 bg-dark">
      <Sidebar/>
    </div>
<div className="col-9  bg-primary  d-flex flex-column flex-grow-1 justify-content-between">

<div className=" bg-warning p-4">
        <Navbar/>
  </div>

  <div className=" bg-danger h-100 m-3">
        Content
  </div>

  <div className="bg-secondary p-3">
        <Footer/>
  </div>

</div>
    </div>
  );
}

export default App;
