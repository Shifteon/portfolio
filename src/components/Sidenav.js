import "./SideNav.css";

function Sidenav({links}) {
  return (
    <div className="side-nav">
      <ul>
        {links.map(link => (
          <li><a href="link.href">{link.text}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default Sidenav;