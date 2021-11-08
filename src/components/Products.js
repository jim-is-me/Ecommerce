import React ,{ useEffect, useState } from "react";
// import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/products.css';

export default function Products (){

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // axios.get('https://localhost/ProductsController/index/')
        //     .then(resp => {
        //         return resp.json();
        //     }).then(result => {
		// 		console.log(result);
        //         setProduct(result.data);
        //     })
        //     .catch(errpr => {
        //         alert(' HAHAHHAH Idk mate ');
        //     });
        loadProducts();
        
    }, []);
    
    const loadProducts = async () => {
        const result = await axios.get("https://localhost/ci3/admin/ProductsController/products/");
        setProducts(result.data);
        // console.log(products);
    }


    return (
        <div>

        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        <Container fluid>
            <Row>
                <Col sm={2}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <h3>
                            <span>F</span>ashion
                            <span>H</span>ub
                    </h3>
                    <CardColumns>
                                {products.map((product) => {
                                    return (
                                        <Card>
                                            <Card.Img variant="top" src="" />
                                            <Card.Body>
                                                <Card.Title>{product.cname}</Card.Title>
                                                <Card.Text>
                                                    {product.name}
                                                </Card.Text>
                                                <Card.Text>
                                                    {product.price}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                    </CardColumns>
                </Col>
            
            </Row>
        </Container>
        </div>

    );
}

{/* // <Table striped bordered hover size="sm">
        //     <thead>
        //         <tr>
        //             <th>Product Name</th>
        //             <th>Price</th>
        //         </tr>
        //     </thead>
        //     <tbody>
                // {products.map((product) => { */}
                {/* //     return (
                //         <tr key={product.id}>
                //             <td>{product.name}</td>
                //             <td>{product.price}</td>
                //             {/* <td><button class="btn btn-info btn-sm">Edit</button></td> */}
                //         </tr>
                //     );
                // })}
        //     </tbody>
        // </Table> */}