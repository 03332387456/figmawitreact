import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LanguageIcon from "@mui/icons-material/Language";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Navswithlogo() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <LanguageIcon />
            Community
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav> */}
            <Form className="d-flex m-auto ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Button variant="outline-primary m-2">login </Button>
          <Button variant="outline-primary">signup</Button>
        </Container>
      </Navbar>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-9">
            <h1>(FREE) Food Delivery Admin Dashboard</h1>
          </div>
          <div className="col-md-3">
           <ContentCopyIcon/> <Button variant="outline-primary">open in Figma</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navswithlogo;
