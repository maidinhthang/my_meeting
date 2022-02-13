import { Container, Row, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

import "./Meeting.css";

function Meeting() {
  return (
    <Container fluid className="main px-0 mx-0">
      <Row className="m-4 pt-4 pb-4 ">
        <Col md={3} className="px-0">
          <span className="mainheadercard">Today's Meeting</span>
        </Col>
        <Col md={2}>
          <span className="texttitle text-muted">02 Nov 2021</span>
        </Col>
      </Row>
      <Row className="meeting m-4 pt-4 pb-4 meeting ">
        <Col md={2} className="cardd">
          <Row>
            <span className="texttitle pb-4">3:30PM</span>
          </Row>
          <Row>
            <span className="textsubtitle">30 minites</span>
          </Row>
        </Col>

        <Col md={4}>
          <Row className="persons">
            <Col md={3}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle person"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </Col>
            <Col>
              <Row>
                <span className="texttitle pb-4">Maria James</span>
              </Row>
              <Row>
                <span className="textsubtitle">
                  <IC.GeoAltFill />
                  <span style={{ padding: "0 5px" }}>Copenhagen, Denmark</span>
                </span>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <Row>
            <span className="texttitle pb-4" style={{ color: "#919191" }}>
              September 10th
            </span>
          </Row>
          <Row>
            <span
              className={`textsubtitle3
              }`}
            >
              <IC.Dot className="dot" />
              Active Call
            </span>
          </Row>
        </Col>
        <Col md={3} className={"control"}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
export default Meeting;
