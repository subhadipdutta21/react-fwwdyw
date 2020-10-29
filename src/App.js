import React from "react";
import "./style.css";
import ProTable from "./Components/ProTable";
import TableFilter from "./Components/TableFilter";
import Layout from "./Components/Layout";
import "antd/dist/antd.css";



const App = () => {
  return (
    <Layout>      
      <ProTable/>
    </Layout>
  );
};

export default App;
