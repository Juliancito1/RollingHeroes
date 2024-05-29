import { Card, Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardComponent = ({heroe}) => {
  return (
    <Col md={6} lg={4} className="my-3">
      <Card>
        <Row>
        <Col md={6} className="imgContainer">
        <Card.Img className="h-100" src={heroe.url} />
        </Col>
        <Col md={6}>
        <Card.Body>
          <Card.Title className="fs-5">{heroe.superhero}</Card.Title>
          <p className="fw-bold fs-6">{heroe.alter_ego}</p>
          <Link to={`/detail/${heroe.id}`} className="btn btn-primary mt-md-5 w-100">Ver más</Link>
        </Card.Body>
        </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CardComponent;
