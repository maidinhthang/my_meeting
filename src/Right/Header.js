import { Container, Row, Image, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Header() {
  return (
    <Container fluid className="p-3">
      <Row className="mx-0 px-0 user">
        <Col md={3}>
          <Row>
            <span style={{ padding: "0", fontWeight: "500" }}>Hi,Thang</span>
          </Row>
        </Col>
        <Col md={1}>
          <Row>
            <IC.PersonCircle className="person"></IC.PersonCircle>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Header;
