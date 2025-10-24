import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Corrected import

class NavMenuDesktop extends Component {

    render() {
        return (
            <Fragment>
                <Navbar fixed="top" className="navbar shadow-sm p-2 m-0 bg-white">
                    <Container fluid={true}>
                        <Row>
                            {/* Left side: Logo and Cart */}
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="logo-cart-container">
                                    <a href="/" className="btn">
                                        <img className="nav-logo" src="https://bsm.org.bd/wp-content/uploads/2024/05/new-logo-du.png" alt="Logo" />
                                    </a>
                                </div>
                            </Col>

                            {/* Middle: Search Input */}
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input
                                        name="example"
                                        list="exampleList"
                                        type="text"
                                        className="form-control search-input"
                                        aria-label="Text input with segmented dropdown button"
                                        placeholder="Search..."
                                    />
                                    <button type="button" className="btn site-btn">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                                <Link to="/onboard" className="btn btn-light">
                                    LOGIN
                                </Link>
                            </Col>

                            {/* Right side: Notification and Login */}
                            <Col lg={4} md={4} sm={12} xs={12} className="text-end">
                     <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items
                                </Link>
                                <Link to="/notification" className="btn mx-1 nav-round-btn">
                                    <i className="fa fa-bell" />
                                </Link>


                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </Fragment>



        );
    }
}
export default NavMenuDesktop;
