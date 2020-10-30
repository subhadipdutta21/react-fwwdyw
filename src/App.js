import "antd/dist/antd.css";
import React from "react";
import Layout from "./Components/Layout";
import ProTable from "./Components/ProTable";
import "./style.css";



const App = () => {
  return (
    <Layout>      
      <ProTable/>
    </Layout>
  );
};

export default App;
