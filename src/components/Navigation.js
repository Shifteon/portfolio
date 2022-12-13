import "./Navigation.css";

function Navigation({ logo, logoText, links, color }) {
  const navStyle = {
    backgroundColor: color
  };

  return (
    <div className="navigation" style={navStyle} >
      <div className="logo-box" >
        {logo !== null &&
          <img src={logo.src} alt={logo.alt} />
        }
        {logoText !== null &&
        <p className="logo-text">{logoText}</p>
        }
      </div>
      {links !== null &&
        <div>
          <ul>
            {
              links.map((link) => (<li><a href={link.href}>link.value</a></li>))
            }
          </ul>
        </div>
      }
    </div>
  );
}

Navigation.defaultProps = {
  logo: null,
  links: null,
  logoText: null,
  color: "white"
};

export default Navigation;