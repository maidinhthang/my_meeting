import { Container, Row, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

import "./Upcoming.css";

function Upcoming() {
  const upcomming = [
    {
      time: "3:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Meghan Smith",
      place: "Interpid cafe",
      day: "September 10th",
      status: "Comfirmed",
    },
    {
      time: "5:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Julia Husa",
      place: "Glasshouse",
      day: "September 15th",
      status: "Pending",
    },
    {
      time: "5:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Julia Husa",
      place: "Glasshouse",
      day: "September 15th",
      status: "Pending",
    },
    {
      time: "3:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Meghan Smith",
      place: "Interpid cafe",
      day: "September 10th",
      status: "Comfirmed",
    },
  ];
  return (
    <Container fluid className="main px-0 mx-0">
      <Row className="m-4">
        <Col>
          <span className="mainheadercard px-0">Upcoming Meetings</span>
        </Col>
        <Col>
          <svg
            className="grid add"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg grid add"
            viewBox="0 0 16 16"
            style={{ float: "right" }}
          >
            <path
              fill-rule="evenodd"
              class="scale"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </Col>
      </Row>
      {upcomming.map((comming, index) => (
        <Row className="meeting m-4 pt-4 pb-4 bordercomming " keys={index}>
          <Col md={2} className="cardd">
            <Row>
              <span className="texttitle pb-4">{comming.time}</span>
            </Row>
            <Row>
              <span className="textsubtitle">{comming.timecall}</span>
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
                  <span className="texttitle pb-4">{comming.name}</span>
                </Row>
                <Row>
                  <span className="textsubtitle">
                    <IC.GeoAltFill />
                    <span style={{ padding: "0 5px" }}>{comming.place}</span>
                  </span>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <span className="texttitle pb-4" style={{ color: "#919191" }}>
                {comming.day}
              </span>
            </Row>
            <Row>
              <span
                className={`textsubtitle2 ${
                  comming.status === "Pending" ? "pending" : ""
                }`}
              >
                <IC.Dot className="dot" />
                {comming.status}
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
      ))}
    </Container>
  );
}
export default Upcoming;
