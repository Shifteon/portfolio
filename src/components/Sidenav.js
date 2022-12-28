import "./SideNav.scss";
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useLocation } from "react-router-dom";

function Sidenav({links}) {
  let id = 0;

  const location = useLocation();

  const [display, setDisplay] = React.useState(false);

  const onMenuClick = () => {
    setDisplay(!display);
  }

  return (
    <div className="side-nav">
      <ul className={display ? "display" : ""}>
        {links.map(link => {
          id += 1;
          return (
          <li key={id} className={link.href === location.pathname ? "active" : ""}>
            <NavLink to={link.href}>{link.icon()} {link.text}</NavLink>
            <FaBars id="menu" onClick={onMenuClick} /> 
          </li>
        );
        })}
      </ul>
    </div>
  );
}

export default Sidenav;