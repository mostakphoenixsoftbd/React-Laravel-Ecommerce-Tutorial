import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Form} from "react-bootstrap";

class UserOnboard extends Component {
    render() {
        return (
            <Fragment>

               <Container fluid={true}>

                 <Row className=" d-flex justify-content-center">
        <Col lg={4} md={4} xs={12} sm={6}>
            <br/><br/><br/><br/><br/>
            <Card style={{ width: '18rem' }}>
                        <Card.Body>
                <Card.Title>Card Title</Card.Title>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Your Phone Number" />
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

export default UserOnboard;