import "./App.scss";
import Rockets from "./components/Rockets";
import MyProfile from "./components/myProfile/MyProfile";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container my-5">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/myProfile" element={<MyProfile />} />
      </Routes>
      <Rockets />
    </div>
  );
}

export default App;
