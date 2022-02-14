import { Container, Row, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

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
        <Col className="d-flex flex-row-reverse">
          <IC.PlusLg className="grid add"></IC.PlusLg>
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
                <IC.PersonCircle className="person"></IC.PersonCircle>
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
          <Col md={3} className="control">
            <span>
              <span>
                <IC.PencilSquare></IC.PencilSquare>
              </span>
              <span>
                <IC.XLg></IC.XLg>
              </span>
            </span>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
export default Upcoming;
