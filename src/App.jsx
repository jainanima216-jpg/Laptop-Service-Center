import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Customer from "./components/Customer";
import Laptop from "./components/Laptops";
import JobCards from "./components/JobCards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/laptops" element={<Laptop />} />
            <Route path="/job-cards" element={<JobCards />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;