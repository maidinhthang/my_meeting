import { Container, Row, Image, Nav, Navbar, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Left() {
  return (
    <Container fluid className="mx-0 px-0 h-100">
      <Row className="leftlayout h-100">
        {/* .....header left........... */}
        <Row className="mx-0 mt-0 px-4 pb-4 justify-content-center">
          <IC.Grid className="grid" />
        </Row>
        {/* .................col 1 */}
        <Row className="mx-0 px-0">
          <Col>
            <Nav.Link href="#">
              <IC.Grid></IC.Grid>
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Box></IC.Box>
            </Nav.Link>
            <Nav.Link href="#">
              <IC.ChatDots></IC.ChatDots>
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Calendar2></IC.Calendar2>
            </Nav.Link>
          </Col>
        </Row>
        {/* Col 2 */}
        <Row className="mx-0 px-0">
          <Col>
            <Nav.Link href="#">
              <IC.Check2Circle></IC.Check2Circle>
            </Nav.Link>
            <Nav.Link href="#">
              <IC.ShieldExclamation></IC.ShieldExclamation>
            </Nav.Link>
            <Nav.Link href="#">
              <IC.People></IC.People>
            </Nav.Link>
          </Col>
        </Row>
        {/* footer */}
        <Row className="mt-5 mx-0 px-4 ">
          <Col className="">
            <Row className="justify-content-center">
              <IC.PersonCircle className="person"></IC.PersonCircle>
            </Row>
            <Row className="mt-4 mb-4 justify-content-center">
              <IC.PersonCircle className="person"></IC.PersonCircle>
            </Row>
            <Row className="justify-content-center">
              <IC.PersonCircle className="person"></IC.PersonCircle>
            </Row>
            <Row className="mt-4 mb-4 justify-content-center">
              <IC.PlusLg className="grid add"></IC.PlusLg>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default Left;
