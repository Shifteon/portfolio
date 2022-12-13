import React from 'react';

import "./Layout.css";

function Layout({ children, isRows }) {

  const [styles, setStyles] = React.useState({});
  React.useEffect(() => {
    setGrid();
  }, []);

  const setGrid = () => {
    if (isRows) {
      let gridTemplateValue = "";
      for (let i = 1; i <= children.length; i++) {
        gridTemplateValue = gridTemplateValue + "1fr";
        if (i < children.length) {
          gridTemplateValue = gridTemplateValue + " ";
        }
      }
      setStyles({...styles, gridTemplateRows: gridTemplateValue});
    } else {
      let gridTemplateValue = "";
      for (let i = 1; i <= children.length; i++) {
        gridTemplateValue = gridTemplateValue + "1fr";
        if (i < children.length) {
          gridTemplateValue = gridTemplateValue + " ";
        }
      }
      setStyles({...styles, gridTemplateColumns: gridTemplateValue});
    }
  };

  return (
    <div className="layout" style={styles} >
      {children}
    </div>
  );
}

Layout.defaultProps = {
  isRows: false
};

export default Layout;