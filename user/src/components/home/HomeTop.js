import React, {Component, Fragment} from 'react';
import {Container, Row, Col, } from "react-bootstrap";
import MegaMenu from "../home/MegaMenu";
import SliderHome from "./SliderHome";

class HomeTop extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                  <Row>
                      <Col lg={3} md={3} sm={12} >
                         <MegaMenu/>
                      </Col>

                      <Col lg={9} md={9} sm={12} >

                          <SliderHome/>

                      </Col>


                  </Row>



                </Container>

            </Fragment>
        );
    }
}

export default HomeTop;