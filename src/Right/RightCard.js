import { Container, Row, Image, Col, Button } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function RightCard() {
  return (
    <Container fluid>
      <Row
        style={{
          width: "85%",
          margin: "0 auto",
          marginTop: "270px",
        }}
      >
        <Col className="next p-3">
          <Row>
            <Col>
              <span style={{ fontWeight: "bold" }}>Next Meetings</span>
            </Col>
            <Col className="home">
              <span>
                <IC.Grid />
              </span>
              <span>
                <IC.House></IC.House>
              </span>
            </Col>
          </Row>
          <div className="section">
            <Row className="text-center tab mx-0 px-0">
              <Col className="mx-0 px-0 d-flex justify-content-center">
                <span className="textsubtitle">
                  Chat <span className="3">3</span>
                </span>
              </Col>
              <Col className="mx-0 px-0">
                <span class="square bg-primary rounded-pill mx-0 px-0 justify-content-center">
                  Tasks
                </span>
              </Col>
              <Col className="mx-0 px-0 d-flex justify-content-center">
                <span className="textsubtitle">Activity</span>
              </Col>
            </Row>
            <Row className="text-center seo pt-4">
              <Col>
                <span>
                  <IC.GraphUp></IC.GraphUp>
                  <span
                    style={{
                      fontWeight: "500",
                      color: "#c2cad6",
                      marginLeft: "8px",
                    }}
                  >
                    SEO
                  </span>
                </span>
              </Col>
              <Col>
                <span>
                  <IC.PersonCircle className="person"></IC.PersonCircle>
                </span>
                <span>
                  <IC.PersonCircle className="person"></IC.PersonCircle>
                </span>
                <span>
                  <IC.PlusLg className="grid add"></IC.PlusLg>
                </span>
              </Col>
              <Col className="share">
                <span>
                  <IC.Link45deg></IC.Link45deg>
                </span>
                <span>
                  <IC.Flag></IC.Flag>
                </span>
              </Col>
            </Row>
          </div>
          <Row className="mt-4">
            <Col className="d-flex superb">
              <span className="circle"></span>
              <h5 style={{ fontWeight: "500" }}>Superb Design Talk</h5>
            </Col>
          </Row>
          <Row>
            <Row className="mt-1 attend">
              <Col className="d-flex">
                <span
                  style={{
                    fontWeight: "500",
                    color: "#7F7F7F",
                    fontSize: ".8rem",
                  }}
                  className="mx-2"
                >
                  attendies
                </span>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-2 attend mx-0 px-0">
              <Col className="d-flex justify-content-end mx-0 px-0">
                <span
                  className="people"
                  style={{
                    fontWeight: "500",
                    color: "#7F7F7F",
                    fontSize: ".8rem",
                  }}
                >
                  <IC.PersonCircle className="person"></IC.PersonCircle>
                  <span>shakir</span>
                  <IC.X></IC.X>
                </span>
              </Col>
              <Col className="d-flex justify-content-center mx-0 px-0">
                <span
                  className="people"
                  style={{
                    fontWeight: "500",
                    color: "#7F7F7F",
                    fontSize: ".8rem",
                  }}
                >
                  <IC.PersonCircle className="person"></IC.PersonCircle>
                  <span>shakir</span>
                  <IC.X></IC.X>
                </span>
              </Col>
              <Col className="d-flex justify-content-start mx-0 px-0">
                <span></span>
                <span
                  className="people"
                  style={{
                    fontWeight: "500",
                    color: "#7F7F7F",
                    fontSize: ".8rem",
                  }}
                >
                  <IC.PersonCircle className="person"></IC.PersonCircle>
                  <span>shakir</span>
                  <IC.X></IC.X>
                </span>
              </Col>
              {/* <Col
                md="1"
                className="d-flex justify-content-start more mx-0 px-0"
              >
                <span
                  style={{
                    fontWeight: "500",
                    color: "#7F7F7F",
                    fontSize: ".8rem",
                  }}
                >
                  +3
                </span>
              </Col> */}
            </Row>
          </Row>
          <Row className="mt-3 today">
            <Col className="mx-0 px-0">
              <Row className="mx-0 px-0">
                <span>
                  <IC.BrightnessHigh></IC.BrightnessHigh>

                  <span>Today</span>
                </span>
              </Row>
            </Col>
            <Col className="mx-0 px-0">
              <Row className="mx-0 px-0">
                <Col className="mx-0 px-2 d-flex justify-content-end ">
                  <IC.ChevronCompactLeft className="mx-0"></IC.ChevronCompactLeft>
                  <IC.ChevronCompactRight className="mx-0"></IC.ChevronCompactRight>
                  <IC.Calendar2Date className="mx-0"></IC.Calendar2Date>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3 team px-3 border-top">
            <Col md={5}>
              <span
                style={{ fontWeight: "500", color: "#B4B4B8" }}
                className="textsubtitle"
              >
                Team
              </span>
              <span>
                <IC.ChevronCompactDown></IC.ChevronCompactDown>
              </span>
            </Col>
            <Col md={7} className="ctr">
              <Col>
                <span
                  style={{ fontWeight: "500", color: "#0000000" }}
                  className="textsubtitle"
                >
                  Cancle
                </span>
              </Col>
              <Col>
                <span className="phone textsubtitle">
                  <IC.Telephone></IC.Telephone>
                  Call
                </span>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="upgrade">
        <Col>
          <span
            style={{
              fontWeight: "500",
              fontSize: "18px",
              color: "#607B8B",
              marginRight: "6px",
            }}
          >
            Upgrade To Pro
          </span>
          <span>
            <IC.ArrowRight></IC.ArrowRight>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
export default RightCard;
