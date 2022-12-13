import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar";

function App() {
  const links = [
    {
      href: "#",
      text: "About Me"
    },
    {
      href: "#",
      text: "Projects"
    },
    {
      href: "#",
      text: "Skills"
    },
    {
      href: "#",
      text: "Experience"
    }
  ]
  return (
    <Router>
    <Navbar />
    <Routes>
        {/* <Route exact path='/' element={<Home } /> */}
    </Routes>
    </Router>
  );
}

export default App;
