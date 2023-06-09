import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/missions/Missions';
import Rockets from './components/Rockets/Rockets';
import MyProfile from './components/myProfile/MyProfile';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="container my-5">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route exact path="/myProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
