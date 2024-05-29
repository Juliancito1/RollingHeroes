import { Row, Container } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { heroes } from "../../heroes";
const MainPage = ({heroePublisher}) => {
    return (
        <Container className="mt-3">
        <Row>
            {
                heroes.map((heroe,id) => {
                    if(heroePublisher === heroe.publisher) {
                        return <CardComponent heroe={heroe} key={id}></CardComponent>
                    }
                    else if(heroePublisher === "")
                        {
                            return <CardComponent heroe={heroe} key={id}></CardComponent>
                        }
            })
            }
        </Row>
        </Container>
    );
};

export default MainPage;