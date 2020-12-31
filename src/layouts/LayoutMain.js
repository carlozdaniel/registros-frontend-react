import React from "react";
import "../assets/styles/LayoutStyles.sass"
const Layout = ({children}) => (

  <React.Fragment>
  <header>
    <div className="content">
      <lu>
        <li>
          <a href="/">home</a>
        </li>
      </lu>
    </div>
  </header>
    {children}
  </React.Fragment>
);

export default Layout;