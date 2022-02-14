import { Container, Row, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Meeting() {
  return (
    <Container
      fluid
      className="main px-0 mx-0"
      style={{ position: "relative" }}
    >
      <Row className="m-4 pt-4 pb-4 ">
        <Col md={4} className="px-0">
          <span className="mainheadercard">Today's Meeting</span>
        </Col>
        <Col md={2} className="border-righ">
          <span className="texttitle text-muted">02 Nov 2021</span>
        </Col>
      </Row>
      <Row
        className="meeting mx-4 pt-4 pb-4 d-flex align-items-center "
        style={{ position: "absolute", zIndex: "100", width: "151%" }}
      >
        <Col md={4}>
          <Row className="persons">
            <Col md={3}>
              <IC.PersonCircle className="person"></IC.PersonCircle>
            </Col>
            <Col>
              <Row>
                <span className="texttitle pb-4">Maria James</span>
              </Row>
              <Row>
                <span className="textsubtitle">Copenhagen, Denmark</span>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="px-0 mx-0 d-flex align-items-center">
            <Col md={6} className="p-2 mx-0 border border-rounder">
              <Row className="px-0 mx-0">
                <Col className="px-0 mx-0 d-flex justify-content-center">
                  <IC.PauseFill></IC.PauseFill>
                  <span>Stop</span>
                </Col>
                <Col className=" px-0 mx-0 d-flex justify-content-center">
                  <span>6:24</span>
                </Col>
                <Col className="d-flex justify-content-center px-0 mx-0">
                  <IC.Telephone></IC.Telephone>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="px-0 mx-0 d-flex justify-content-center">
              <IC.Mic></IC.Mic>
            </Col>
            <Col md={3} className=" px-0 mx-0 d-flex justify-content-center">
              <IC.VolumeUpFill></IC.VolumeUpFill>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <Row>
            <span className="texttitle pb-4" style={{ color: "#919191" }}>
              Status
            </span>
          </Row>
          <Row>
            <span></span>
            <span className="textsubtitle px-0 mx-0">
              <IC.Dot className="dot" />
              Active Call
            </span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Meeting;
