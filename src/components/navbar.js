import { Link } from 'react-router-dom';
import './Navigation.scss'

function Navbar() {

  return (
    <nav>
      <Link to="/" className='logo-box' >
        {/* <img src='/images/logo.png' /> */}
        <p className='logo-text'>B</p>
      </Link>
    </nav>
  );
}

export default Navbar;