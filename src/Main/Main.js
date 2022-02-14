import "../App.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./Header";
import Meeting from "./Meeting";
import Upcoming from "./Upcoming";

function Main() {
  return (
    <Container fluid className="main p-3 mx-0">
      <Row className="main px-0 mx-0">
        <Row>
          <Header />
        </Row>
        <Row>
          <Meeting />
        </Row>
        <Row style={{ marginTop: "15%" }}>
          <Upcoming />
        </Row>
      </Row>
    </Container>
  );
}
export default Main;
