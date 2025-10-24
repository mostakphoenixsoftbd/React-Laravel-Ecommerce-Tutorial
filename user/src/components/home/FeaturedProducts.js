import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

class FeaturedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <h1 className="section-title">Featured Products</h1>
                    <p className="section-sub-title">Details will go here...</p>
                    <Row>
<Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
    <Link to="/productDetails">
<Card className="animate__animated animate__fadeInLeft">
    <img className="" src="https://img.drz.lazcdn.com/static/bd/p/89710854393596244131b6a1303c0976.jpg_400x400q75.avif"/>
    <Card.Body>
        <p className="product-name-on-card">Asus Laptop Bag - Bag For Boys
    </p>
        <p className="product-price-on-card">Price: 1500</p>
    </Card.Body>
</Card>
    </Link>
</Col>
                        <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card animate__animated animate__fadeInLeft">
                                <img className="" src="https://img.drz.lazcdn.com/static/bd/p/89710854393596244131b6a1303c0976.jpg_400x400q75.avif"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Outdoor Small Mini Backpack And Laptop Bag - Bag For Boys
                                    </p>
                                    <p className="product-price-on-card">Price: 1500</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card animate__animated animate__fadeInLeft">
                                <img className="" src="https://img.drz.lazcdn.com/static/bd/p/89710854393596244131b6a1303c0976.jpg_400x400q75.avif"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Outdoor Small Mini Backpack And Laptop Bag - Bag For Boys
                                    </p>
                                    <p className="product-price-on-card">Price: 1500</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card animate__animated animate__fadeInLeft">
                                <img className="" src="https://img.drz.lazcdn.com/static/bd/p/89710854393596244131b6a1303c0976.jpg_400x400q75.avif"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Outdoor Small Mini Backpack And Laptop Bag - Bag For Boys
                                    </p>
                                    <p className="product-price-on-card">Price: 1500</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card animate__animated animate__fadeInLeft">
                                <img className="" src="https://img.drz.lazcdn.com/static/bd/p/89710854393596244131b6a1303c0976.jpg_400x400q75.avif"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Outdoor Small Mini Backpack And Laptop Bag - Bag For Boys
                                    </p>
                                    <p className="product-price-on-card">Price: 1500</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card animate__animated animate__fadeInLeft">
                                <img className="" src="https://img.drz.lazcdn.com/static/bd/p/89710854393596244131b6a1303c0976.jpg_400x400q75.avif"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Outdoor Small Mini Backpack And Laptop Bag - Bag For Boys
                                    </p>
                                    <p className="product-price-on-card">Price: 1500</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default FeaturedProducts;