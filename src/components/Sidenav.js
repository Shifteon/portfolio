import "./SideNav.scss";
import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidenav({links}) {
  let id = 0;
  return (
    <div className="side-nav">
      <ul>
        {links.map(link => {
          id += 1;
          return (
          <li key={id}><NavLink to={link.href}>{link.icon()} {link.text}</NavLink></li>
        );
        })}
      </ul>
    </div>
  );
}

export default Sidenav;