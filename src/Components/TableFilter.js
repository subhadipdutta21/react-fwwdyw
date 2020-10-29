import React, { useState, useEffect } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card, Select, Input, Row, Col, message, Typography } from "antd";
import { QueryBuilder } from "../Helper";
const { Option } = Select;
const { Title } = Typography;


const TableFilter = ({ data, setData, setFilteredData }) => {

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

  const queryFormat = {
    id: '',
    operator: "",
    value: ""
  }

  const [totalRows, setTotalRows] = useState([])


  useEffect(() => {
    console.log(totalRows)
    let alldata = data
    let filteredData = QueryBuilder(alldata, totalRows)
    console.log(filteredData, totalRows)    
    setFilteredData(filteredData)
  }, [totalRows])

  const checkIfPrevEmptyAndCreateNew = rowIdx => {
    console.log(rowIdx)
    console.log(totalRows[rowIdx])
    let prevRow = totalRows[rowIdx]
    if (prevRow.id === "" || prevRow.operator === "" || prevRow.value === "") {
      message.error("Please fill Up all the previus values before adding new!")
      return
    }

    let temp = [...totalRows]
    temp.push(queryFormat)
    console.log(temp)
    setTotalRows(temp)

  }

  const setQueryData = (idx, name, val) => {
    console.log(idx, name, val)
    let temp = [...totalRows]
    temp[idx][name] = val

    setTotalRows(temp)
  }

  const disableRule = (idx, fieldName) => {
    switch (fieldName) {
      case "id":
        return false
        break;

      case "operator":
        if (totalRows[idx].id === "") return true
        else return false

      case "value":
        if (totalRows[idx].operator === "") return true
        else return false

      default:
        break;
    }
  }

  return (
    <>
      <Row justify='start'>
        <Col span={24}>
          <Title level={3}>
            Filters
        </Title>
        </Col>
      </Row>
      <Card style={{ width: "60%", textAlign: "center" }}>
        {!totalRows.length ?
          <>
            <PlusOutlined onClick={() => {
              let temp = [...totalRows]
              temp.push(queryFormat)
              setTotalRows(temp)
            }} /> Add Filter
          </>
          : (
            totalRows.map((rowItm, rowIdx) => (
              <Row gutter={[16, 16]} justify="center" key={rowIdx}>

                <Col span={4}>
                  {rowIdx === 0 ? <p> Where </p> :
                    <Select style={{ width: 120 }} onChange={val => setQueryData(rowIdx, "first", val)}>
                      <Option key={'AND'}> {"AND"} </Option>
                      <Option key={'OR'}> {"OR"} </Option>
                    </Select>}
                </Col>

                <Col span={4}>
                  <Select value={rowItm.id} style={{ width: 120 }} onChange={val => setQueryData(rowIdx, "id", val)} disabled={disableRule(rowIdx, "id")}>
                    {columnVals.map(itm => (
                      <Option key={Object.keys(itm)[0]} value={Object.keys(itm)[0]}>
                        {Object.values(itm)[0]}
                      </Option>
                    ))}
                  </Select>
                </Col>

                <Col span={4}>
                  <Select
                    disabled={disableRule(rowIdx, "operator")}
                    value={rowItm.operator}
                    placeholder=""
                    style={{ width: 120 }}
                    onChange={val => setQueryData(rowIdx, "operator", val)}
                  >
                    {filterVals.map(itm => (
                      <Option key={Object.keys(itm)[0]} value={Object.keys(itm)[0]}>
                        {Object.values(itm)[0]}
                      </Option>
                    ))}
                  </Select>
                </Col>

                <Col span={4}>
                  <Input.Group size="medium">
                    <Input
                      disabled={disableRule(rowIdx, "value")} value={rowItm.value} placeholder="value"
                      onChange={e => setQueryData(rowIdx, "value", e.target.value)} />
                  </Input.Group>
                </Col>

                <Col span={4}>
                  <DeleteOutlined
                    onClick={() => {
                      console.log('remove ', rowIdx)
                      let temp = totalRows.filter((itm, idx) => idx !== rowIdx)
                      console.log(temp)
                      setTotalRows(temp)
                    }} />
                </Col>

                {rowIdx === totalRows.length - 1 &&
                  <Col span={24}>
                    <PlusOutlined onClick={() => checkIfPrevEmptyAndCreateNew(rowIdx)} /> Add Filter
                  </Col>}

              </Row>
            ))
          )}
      </Card>

      <Row justify='end'>
        <Col span={24}>
          <Title level={5}>
            showing 12444 records
        </Title>
        </Col>
      </Row>
    </>
  );
};

export default TableFilter;
