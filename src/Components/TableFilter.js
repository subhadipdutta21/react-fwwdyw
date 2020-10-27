import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Card, Select, Input } from "antd";
const { Option } = Select;

const TableFilter = ({}) => {
  const [showAddBtn, setShowAddBtn] = useState(true);

  return (
    <>
      <h4>Filters </h4>
      <Card style={{ width: "60%", textAlign: "center" }}>
        {showAddBtn ? (
          <>
            <PlusOutlined onClick={() => setShowAddBtn(false)} /> Add Filter
          </>
        ) : (
          <div style={{ display: "flex" }}>
            <p> Where </p>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={val => console.log(val)}
            >
              <Option value="col 1">"col 1"</Option>
              <Option value="col 2">"col 2"</Option>
              <Option value="col 3">"col 3"</Option>
            </Select>

            <Select
              defaultValue="Contains"
              style={{ width: 120 }}
              onChange={val => console.log(val)}
            >
              <Option value="col 1">"Contains"</Option>
              <Option value="col 2">{">="}</Option>
              <Option value="col 3">{"<="}</Option>
              <Option value="col 4">{"Equals"}</Option>
            </Select>
            <Input.Group size="medium">
              <Input defaultValue="0571" style={{ width: "20%" }} />
            </Input.Group>
          </div>
        )}
      </Card>
    </>
  );
};

export default TableFilter;
