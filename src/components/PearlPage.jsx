import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Pearl from "../photos/Pearl.jpg";

const PearlPage = () => {
  return (
    <Container fluid className="bg-secondary">
      <h2 className="text-center text-white">Fernando's in Pearl</h2>
      <Row>
        <Col className="text-white" sm={6}>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th style={{ textAlign: "right" }}>Hours of Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "white" }}>Monday</td>
                <td style={{ color: "white" }}>10:00am - 9:00pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10:00am - 9:00pm</td>
              </tr>
              <tr>
                <td style={{ color: "white" }}>Wednesday</td>
                <td style={{ color: "white" }}>10:00am - 9:00pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>10:00am - 9:00pm</td>
              </tr>
              <tr>
                <td style={{ color: "white" }}>Friday</td>
                <td style={{ color: "white" }}>10:00am - 10:00pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>11:00am - 10:00pm</td>
              </tr>
              <tr>
                <td style={{ color: "white" }}>Sunday</td>
                <td style={{ color: "white" }}>11:00am - 9:00pm</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col sm={6}>
          <div></div>
        </Col>
      </Row>
    </Container>
  );
};

export default PearlPage;
