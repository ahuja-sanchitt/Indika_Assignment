import React from 'react';
import { Table, Button, Pagination, Container, Row, Col } from 'react-bootstrap';

const data = [
  {
    id: 1,
    roadName: '144301, India → 144301, India, India',
    roadLength: '0.51',
    surveyorName: 'Sukanta Pramanik',
    surveyDate: 'Sep 30, 2023',
    assetCount: 10,
    assetList: ['Road Signboard: 2'],
  },
  {
    id: 1,
    roadName: '144301, India → 144301, India, India',
    roadLength: '0.51',
    surveyorName: 'Sukanta Pramanik',
    surveyDate: 'Sep 30, 2023',
    assetCount: 10,
    assetList: ['Road Signboard: 2'],
  },
  {
    id: 1,
    roadName: '144301, India → 144301, India, India',
    roadLength: '0.51',
    surveyorName: 'Sukanta Pramanik',
    surveyDate: 'Sep 30, 2023',
    assetCount: 10,
    assetList: ['Road Signboard: 2'],
  },
  
  
];

const AssetTable = () => {
  return (
    <Container className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Road Name</th>
            <th>Road Length</th>
            <th>Surveyor Name</th>
            <th>Survey Date</th>
            <th>Total Asset Count</th>
            <th>Asset List</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" /></td>
              <td>{item.roadName}</td>
              <td>{item.roadLength}</td>
              <td>{item.surveyorName}</td>
              <td>{item.surveyDate}</td>
              <td>{item.assetCount}</td>
              <td>
                {item.assetList.map((asset, index) => (
                  <div key={index}>{asset}</div>
                ))}
              </td>
              <td>
                <Button variant="outline-primary">Download</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default AssetTable;
