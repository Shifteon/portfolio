import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {FaUser, FaLaptopCode, FaPencilRuler, FaUserCheck} from "react-icons/fa";
import Navbar from "./components/navbar";
import Bio from './pages/Bio';
import Sidenav from './components/Sidenav';
import './pages/style.scss';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';

function App() {
  const links = [
    {
      href: "/",
      text: "About",
      icon: FaUser
    },
    {
      href: "/projects",
      text: "Projects",
      icon: FaLaptopCode
    },
    {
      href: "/skills",
      text: "Skills",
      icon: FaPencilRuler
    },
    {
      href: "/experience",
      text: "Experience",
      icon: FaUserCheck
    }
  ];
  return (
    <Router>
    <Navbar />
    <div id='main'>
      <Sidenav links={links} />
      <Routes>
          <Route exact path='/' element={<Bio />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/experience' element={<Experience />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
