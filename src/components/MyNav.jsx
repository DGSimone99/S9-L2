import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav() {
  return (
    <div className="container-fluid p-0 bg-black ">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className="text-white">
            Index Grimoire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="text-white ">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary">
                Browse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default MyNav;
