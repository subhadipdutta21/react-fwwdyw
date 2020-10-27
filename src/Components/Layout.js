import React from "react";
import { Layout as AntLayout } from "antd";

const Layout = props => {
  return (
    <AntLayout
      className="site-layout"
      style={{
        alignItems: "center",
        height: "100vh",
        overflow: "auto",
        paddingTop: 40
      }}
    >
      {props.children}
    </AntLayout>
  );
};

export default Layout;
