import React from "react";

const Layout = ({children}) => (

  <React.Fragment>
    <h1>hola desde el layout</h1>
    {children}
  </React.Fragment>
);

export default Layout;