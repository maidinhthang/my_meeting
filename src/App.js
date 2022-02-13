import "./App.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Right from "./Right/Right";
import Main from "./Main/Main";
import Left from "./Left/Left";

function App() {
  return (
    <Container fluid className="mx-0 px-0">
      <Row className="mx-0 px-0">
        <Col md={1} className="mx-0 px-0">
          <Left />
        </Col>
        <Col md={11} className="mx-0 px-0">
          <Row className="mx-0 px-0">
            <Col md={8} className="mx-0 px-0">
              <Main />
            </Col>
            <Col md={4} className="mx-0 px-0">
              <Right />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
