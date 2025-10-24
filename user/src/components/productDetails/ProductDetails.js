import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";

class ProductDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}  className="TopSection  animated slideInDown">
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item> Details</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-1">
                        <Col  md={12} lg={12} sm={12} xs={12}>
                            <Row className=" shadow-sm  bg-white">
                                <Col className="p-3 animated " md={6} lg={6} sm={12} xs={12}>
                                       <Container className="my-3">
                                        <Row>
                                            <Col className="p-0 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100 Product-sm-img"  alt=""/>
                                            </Col>
                                            <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100 Product-sm-img" alt=""/>
                                            </Col>
                                            <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100 Product-sm-img" alt=""/>
                                            </Col>
                                            <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100 Product-sm-img"  alt=""/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name"></h5>
                                    <h6 className="section-sub-title"></h6>


                                    <div>
                                        <h6 className="mt-2">Choose Color</h6>
                                        <select  className="form-control form-select">
                                            <option value="">Choose Color</option>

                                        </select>
                                    </div>

                                    <div >
                                        <h6 className="mt-2">Choose Size</h6>
                                        <select  className="form-control form-select">
                                            <option value="">Choose Size</option>

                                        </select>
                                    </div>
                                    <div className="">
                                        <h6 className="mt-2">Choose Quantity</h6>
                                        <select className="form-control form-select">
                                            <option value="">Choose Quantity</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"/></button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"/></button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-heart"/></button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                <h6 className="mt-2">DETAILS</h6>

                            </div>
                        </Col>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductDetails;