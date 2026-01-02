import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Game from "./components/Game";
import Attendance from "./components/Attendance";
import Gallery from "./components/Gallery";
import Section from "./components/Section";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DOCUMENTATION from "./components/DOCUMENTATION";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="game" element={<Game />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="section" element={<Section />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="dOCUMENTATION" element={<DOCUMENTATION />} />
    </Routes>
  );
}

export default App;
