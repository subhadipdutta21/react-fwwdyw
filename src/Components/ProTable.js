import React, { useState } from "react";
import { Table } from "antd";
import TableFilter from "./TableFilter";

const ProTable = ({ }) => {

  const [data, setData] = useState([
    {
      key: "1",
      name: "Mike",
      screenName: "mike",
      followersCount: 25,
      followingCount: 24,
      location: "10 Downing Street",
      verified: "true"
    },
    {
      key: "2",
      name: "Subh",
      screenName: "subh",
      followersCount: 124,
      followingCount: 125,
      location: "10 Downing Street",
      verified: "true"
    },
    {
      key: "3",
      name: "Subh",
      screenName: "subh",
      followersCount: 32,
      followingCount: 72,
      location: "Koramangala 1st block",
      verified: "false"
    },
    {
      key: "4",
      name: "Mike",
      screenName: "mike",
      followersCount: 38,
      followingCount: 33,
      location: "Koramangala 1st block",
      verified: "false"
    },
    {
      key: "5",
      name: "Anne",
      screenName: "anne",
      followersCount: 65,
      followingCount: 45,
      location: "HSR layout",
      verified: "false"
    },
    {
      key: "6",
      name: "Anne",
      screenName: "anne",
      followersCount: 32,
      followingCount: 45,
      location: "HSR layout",
      verified: "true"
    }
  ]);

  const [filteredData, setFilteredData] = useState(data)

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

  const commonChildProps = { filteredData, setFilteredData, data, setData }
  return (
    <>
      <TableFilter {...commonChildProps} />
      <Table style={{ width: "60%", paddingTop: 40 }} dataSource={filteredData} filteredData={filteredData} columns={columns} />
    </>
  );
};

export default ProTable;
