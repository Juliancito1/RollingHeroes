import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { heroes } from "../../heroes";
const DetailComponent = () => {
    const {heroId} = useParams()
    console.log(heroId)
    const hero = heroes.find(h => heroId === h.id)

    return (
        <Container className="contenedor my-5">
            <Card>
                <Row>
                    <Col md={6}>
                <Card.Img src={hero?.url} className=""></Card.Img>
                    </Col>
                    <Col md={6}>
                <Card.Body>
                    <h1>Superheroe: {hero?.superhero}</h1>
                    <h2>Alterego: {hero?.alter_ego}</h2>
                    <h3>Primera aparición: {hero?.first_appearance}</h3>
                </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default DetailComponent;