import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Favourite extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center" fluid={true}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <h1 className="section-title">My Favourite Items</h1>
                    <p className="section-sub-title">Details will go here...</p>
                    <Row>
                        {[...Array(4)].map((_, index) => (
                            <Col key={1} xl={3} lg={3} md={3} sm={2} xs={1}>
                                <Card className="card w-100">
                                    <img className=" image-box animate__zoomOut" src="https://img.drz.lazcdn.com/static/bd/p/d721aeecd1fb8ce4c8257cc252ec70db.jpg_170x170q80.jpg_.avif" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Collection Name</p>
                                    </Card.Body>
                                </Card>
                            </Col> ))}
                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Favourite;