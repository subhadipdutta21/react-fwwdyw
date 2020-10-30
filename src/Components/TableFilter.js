import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Input, message, Row, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { QueryBuilder } from "../Helper";
const { Option } = Select;
const { Title } = Typography;


const TableFilter = ({ data, setData, setFilteredData, filteredData }) => {

  const columnVals = [
    { name: "Name" },
    { screenName: "Screen Name" },
    { followersCount: "Followers Count" },
    { followingCount: "Following Count" },
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

  // initiating filter for any query change
  useEffect(() => {
    let alldata = data
    let tempfilteredData = QueryBuilder(alldata, totalRows)
    setFilteredData(tempfilteredData)
  }, [totalRows])

  // adding new query rows
  const checkIfPrevEmptyAndCreateNew = rowIdx => {
    let prevRow = totalRows[rowIdx]
    if (prevRow.id === "" || prevRow.operator === "" || prevRow.value === "") {
      message.error("Please fill Up all the previus values before adding new!")
      return
    }

    let temp = [...totalRows]
    temp.push(queryFormat)
    setTotalRows(temp)

  }

  // building the query
  const setQueryData = (idx, name, val) => {
    let temp = [...totalRows]
    temp[idx][name] = val

    setTotalRows(temp)
  }

  // rules for disabling the fields of query input
  const disableRule = (idx, fieldName) => {
    switch (fieldName) {
      case "id":
        return false

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
                      let temp = totalRows.filter((itm, idx) => idx !== rowIdx)
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
            showing {filteredData.length} records
        </Title>
        </Col>
      </Row>
    </>
  );
};

export default TableFilter;
