import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card, Select, Input, Row, Col } from "antd";
const { Option } = Select;

const TableFilter = ({}) => {
  const [showAddBtn, setShowAddBtn] = useState(true);

  const columnVals = [
    { name: "Name" },
    { screen_name: "Screen Name" },
    { followers_count: "Followers Count" },
    { following_count: "Following Count" },
    { location: "Location" },
    { verified: "Verified" }
  ];

  const filterVals = [
    { CONTAINS: "Contains" },
    { GTE: ">=" },
    { LTE: "<=" },
    { EQ: "Equals" }
  ];

  return (
    <>
      <h4>Filters </h4>
      <Card style={{ width: "60%", textAlign: "center" }}>
        {showAddBtn ? (
          <>
            <PlusOutlined onClick={() => setShowAddBtn(false)} /> Add Filter
          </>
        ) : (
          <Row justify="center">
            <Col span={4}>
              <p> Where </p>
            </Col>
            <Col span={4}>
              <Select style={{ width: 120 }} onChange={val => console.log(val)}>
                {columnVals.map(itm => (
                  <Option value={Object.keys(itm)[0]}>
                    {Object.values(itm)[0]}
                  </Option>
                ))}
              </Select>
            </Col>

            <Col span={4}>
              <Select
                placeholder=""
                style={{ width: 120 }}
                onChange={val => console.log(val)}
              >
                {filterVals.map(itm => (
                  <Option value={Object.keys(itm)[0]}>
                    {Object.values(itm)[0]}
                  </Option>
                ))}
              </Select>
            </Col>

            <Col span={4}>
              <Input.Group size="medium">
                <Input placeholder="value" />
              </Input.Group>
            </Col>

            <Col span={4}>
              <DeleteOutlined onClick={() => console.log("delete this")} />
            </Col>
          </Row>
        )}
      </Card>
    </>
  );
};

export default TableFilter;
