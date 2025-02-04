import { Container, Alert, Badge, Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import fantasy from "../assets/books/fantasy.json";
import history from "../assets/books/history.json";
import horror from "../assets/books/horror.json";
import romance from "../assets/books/romance.json";
import scifi from "../assets/books/scifi.json";
import Card from "react-bootstrap/Card";

const AllTheBooks = (props) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {fantasy.map((book) => (
          <Col xs={4} md={3} className="text-center">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title} </Card.Title>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
