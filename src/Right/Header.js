import { Container, Row, Image, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Header() {
  return (
    <Container fluid className="p-3">
      <Row className="mx-0 px-0 user">
        <Col md={2}>
          <Row>
            <span style={{ padding: "0", fontWeight: "500" }}>Hi,Thang</span>
          </Row>
        </Col>
        <Col md={1}>
          <Row>
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Header;
