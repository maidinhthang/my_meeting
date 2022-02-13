import { Container, Row, Nav, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";
import Header from "./Header";
import RightCard from "./RightCard";

function Right() {
  return (
    <Container fluid className="mx-0 px-0 right">
      <Col>
        <Row className="mx-0 px-0">
          <Header />
        </Row>
        <Row className="mx-0 px-0">
          <RightCard />
        </Row>
      </Col>
    </Container>
  );
}
export default Right;
