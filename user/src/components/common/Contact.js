import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true}>

                    <Row className=" d-flex justify-content-center">
                        <Col lg={4} md={4} xs={12} sm={6}>
                            <br/><br/><br/><br/><br/>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Contact With Us</Card.Title>

                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Write your name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Your Mobile Number</Form.Label>
                                            <Form.Control type="text" placeholder="Write your Mobile Number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                    <Button variant="primary">Next</Button>
                                </Card.Body>
                            </Card>


                        </Col>
                    </Row>
                    <br/><br/><br/><br/><br/>  <br/><br/>
                </Container>

            </Fragment>
        );
    }
}

export default Contact;