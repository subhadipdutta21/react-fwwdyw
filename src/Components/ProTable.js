import React from "react";
import { Table } from "antd";

const ProTable = ({dataSource}) => {
 

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Screen Name",
      dataIndex: "screenName",
      key: "name"
    },
    {
      title: "Followers count",
      dataIndex: "followersCount",
      key: "age"
    },
    {
      title: "Following count",
      dataIndex: "followingCount",
      key: "age"
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "address"
    },
    {
      title: "Verified",
      dataIndex: "verified",
      key: "address"
    }
  ];

  return (
    <Table style={{ width: "60%" }} dataSource={dataSource} columns={columns} />
  );
};

export default ProTable;
