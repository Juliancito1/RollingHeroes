import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { heroes } from "../../heroes";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
const SearchHero = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleKeydown = (e) => {
    const value = e.target.value
    setSearch(value)

    if(value)
        {
         const filter =  heroes.filter((hero) => hero.superhero.toLowerCase().includes(value.toLowerCase()))
         setResults(filter)
         console.log(results)
        }
        else{
            setResults([])
        }
        
  }

  console.log(search);
  return (
    <Container>
      <h1>Buscar Heroe por su nombre</h1>
      <Form>
      <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={search}
              onChange={handleKeydown}
            />
          <Row>
            {
                (results.length == 0) ? 
                heroes.map((hero, id) => {
                    return <CardComponent heroe={hero} key={id}></CardComponent>
                })
                 : 
                (results.map((hero,id) => {
                    return <CardComponent heroe={hero} key={id}></CardComponent>
                }))

            }
          </Row>
      </Form>
    </Container>
  );
};

export default SearchHero;
