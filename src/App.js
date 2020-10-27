import React from "react";
import "./style.css";
import ProTable from "./Components/ProTable";
import TableFilter from "./Components/TableFilter";
import Layout from "./Components/Layout";
import "antd/dist/antd.css";

let data = [
  {
    key: "1",
    name: "Mike",
    screenName: "mike",
    followersCount: 32,
    followingCount: 32,
    location: "10 Downing Street",
    verified: "true"
  },
  {
    key: "2",
    name: "Mike",
    screenName: "mike",
    followersCount: 32,
    followingCount: 32,
    location: "10 Downing Street",
    verified: "true"
  },
  {
    key: "3",
    name: "Mike",
    screenName: "mike",
    followersCount: 32,
    followingCount: 32,
    location: "10 Downing Street",
    verified: "true"
  },
  {
    key: "4",
    name: "Mike",
    screenName: "mike",
    followersCount: 32,
    followingCount: 32,
    location: "10 Downing Street",
    verified: "true"
  },
  {
    key: "5",
    name: "Mike",
    screenName: "mike",
    followersCount: 32,
    followingCount: 32,
    location: "10 Downing Street",
    verified: "true"
  },
  {
    key: "6",
    name: "Mike",
    screenName: "mike",
    followersCount: 32,
    followingCount: 32,
    location: "10 Downing Street",
    verified: "true"
  }
];

const App = () => {
  return (
    <Layout>
      <TableFilter />
      <ProTable dataSource={data} />
    </Layout>
  );
};

export default App;
