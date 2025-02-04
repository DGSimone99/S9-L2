import { Container, Button, Col, Row, FormSelect } from "react-bootstrap";
import fantasy from "../assets/books/fantasy.json";
import history from "../assets/books/history.json";
import horror from "../assets/books/horror.json";
import romance from "../assets/books/romance.json";
import scifi from "../assets/books/scifi.json";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class AllTheBooks extends Component {
  state = { books: fantasy };
  render() {
    return (
      <Container fluid>
        <div>
          <FormSelect
            aria-label="Default select example"
            onChange={(e) => {
              switch (e.target.value) {
                case "Fantasy":
                  this.setState({ books: fantasy });
                  break;
                case "History":
                  this.setState({ books: history });
                  break;
                case "Horror":
                  this.setState({ books: horror });
                  break;
                case "Romance":
                  this.setState({ books: romance });
                  break;
                case "Scifi":
                  this.setState({ books: scifi });
                  break;
              }
            }}
          >
            <option>Fantasy</option>
            <option>History</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Scifi</option>
          </FormSelect>
          <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button variant="success" onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button variant="dark" onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: scifi })}>
            Scifi
          </Button>
        </div>
        <Row className="justify-content-center">
          {this.state.books.map((book) => (
            <Col key={book.asin} xs={4} md={3} className="text-center">
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
  }
}

export default AllTheBooks;
