import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
