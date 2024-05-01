import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Bill from "./components/bill/Bill";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/settings/Settings";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/bill" element={<Bill/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
