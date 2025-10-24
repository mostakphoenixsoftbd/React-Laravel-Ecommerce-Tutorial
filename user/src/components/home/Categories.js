import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";

class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <br/><br/><br/>
                    <h1 className="section-title">Categories</h1>
                    <p className="section-sub-title">Details will go here...</p>
                    <Row>
                        {/* Column 1 */}
                        <Col key={1} xl={6} lg={6} md={6} sm={6} xs={6}>
                            <Row>
                                {[...Array(4)].map((_, index) => (
                                    <Col key={index} xl={3} lg={3} md={3} sm={6} xs={6}>
                                        <Card className="card w-100 image-box animate__animated animate__fadeInLeft">
                                            <img className="" src="https://img.drz.lazcdn.com/static/bd/p/d721aeecd1fb8ce4c8257cc252ec70db.jpg_170x170q80.jpg_.avif" />
                                            <Card.Body>
                                                <p className="product-name-on-card">Category Name</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        {/* Column 2 */}
                        <Col key={2} xl={6} lg={6} md={6} sm={6} xs={6}>
                            <Row>
                                {[...Array(4)].map((_, index) => (
                                    <Col key={index} xl={3} lg={3} md={3} sm={6} xs={6}>
                                        <Card className="card w-100 image-box animate__animated animate__fadeInLeft">
                                            <img className="" src="https://img.drz.lazcdn.com/static/bd/p/87281d511179f7136ca0253561b3bc12.jpg_170x170q80.jpg_.avif" />
                                            <Card.Body>
                                                <p className="product-name-on-card">Category Name</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <br/><br/><br/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Categories;
