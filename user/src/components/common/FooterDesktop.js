import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class FooterDesktop extends Component {
    render() {
        return (
            <Fragment>
                <Container background-color="#000" fluid={true}>

                    <Row>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h1>List of Items with Bullets</h1>
                        <ul>
                            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/policy" className="footer-link">Privacy Policy</Link></li>
                            <li>Item 4</li>
                        </ul>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h1>List of Items with Bullets</h1>
                        <ul>
                            <li><Link to="/refund" className="footer-link">Refund Policy</Link></li>
                            <li><Link to="/policy" className="footer-link">Privacy Policy</Link></li>
                            <li><Link to="/privacy" className="footer-link">Others Policy</Link></li>
                            <li>Item 4</li>
                            <li>Item 4</li>
                        </ul>

                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h1>List of Items with Bullets</h1>
                        <ul>
                            <li><Link to="/favourite" className="footer-link">Favourite Items</Link></li>

                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </ul>


                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h1>List of Items with Bullets</h1>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </ul>


                    </Col>

                    </Row>


                </Container>
                
            </Fragment>
        );
    }
}

export default FooterDesktop;