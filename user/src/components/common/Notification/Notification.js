import React, {Component,Fragment} from 'react';
import {Modal, Container, Row, Col, Breadcrumb} from "react-bootstrap";
class Notification extends Component {

       render() {
           return (
               <Fragment>
                   <br/><br/><br/><br/><br/>
                   <Row>
                   <Col className=" d-flex justify-content-around p-1" md={12} lg={12} sm={12} xs={12}>
                       <div className="float-left w-75">
                           <h6 className="notification-title">Notification</h6>
                           <p className="py-1  px-0 notification-date m-0"><i className="fa  fa-bell"/>

                               This is notification page

                           </p>
                       </div>
                       <div className="float-right px-2 w-25">
                           <button className="btn btn-sm site-btn">Details</button>
                       </div>
                   </Col>
                   </Row>
                   <hr className="bg-light w-100"/>
               </Fragment>
           );
       }
}
export default Notification;