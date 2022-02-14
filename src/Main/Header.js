import {
  Container,
  Row,
  Nav,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Header() {
  return (
    <Container fluid className="main px-0 mx-0">
      <Row className="mx-4 mainheader">
        <Col>
          <Row className="mainheader">
            <Col md={5} className="px-0">
              <Col md={8} className="">
                <InputGroup>
                  <InputGroup.Text className="search">
                    <IC.Search className="bi"></IC.Search>
                  </InputGroup.Text>
                  <FormControl placeholder="Search.." className="input" />
                </InputGroup>
              </Col>
            </Col>
            <Col className="note">
              <IC.FileEarmarkArrowDown></IC.FileEarmarkArrowDown>
              <IC.Mailbox></IC.Mailbox>
              <IC.ThreeDots></IC.ThreeDots>
            </Col>
            <Col md={4}>
              <Col>
                <Row>
                  <Col>
                    <span style={{ fontWeight: "500" }}>My Calendar</span>
                  </Col>

                  <Col className="mx-0 px-0">
                    <span style={{ fontWeight: "500", color: "#2178FB" }}>
                      My Calendar!
                    </span>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Header;
