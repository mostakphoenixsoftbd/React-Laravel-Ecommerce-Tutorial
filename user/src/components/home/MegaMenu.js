import React, { Component } from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa'; // Import necessary icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap CSS

class MegaMenu extends Component {
    state = {
        activeKey: '0', // Track which accordion item is open
    };

    handleAccordionToggle = (key) => {
        // Toggle the accordion item open/close
        this.setState({ activeKey: this.state.activeKey === key ? null : key });
    };

    alertClicked = () => {
        alert('You clicked an item in the list');
    };

    render() {
        return (
            <div className="container mt-5">
                <Accordion
                    defaultActiveKey="0"
                    activeKey={this.state.activeKey}
                    onSelect={(key) => this.handleAccordionToggle(key)}
                    flush
                >
                    {/* Accordion Item 1 */}
                    <Accordion.Item eventKey="0" className="mb-3 shadow-lg">
                        <Accordion.Header className="accordion-header">
                            <span className="flex-grow-1">Accordion Item #1</span>
                            {this.state.activeKey === '0' ? (
                                <FaChevronUp className="accordion-icon" />
                            ) : (
                                <FaChevronDown className="accordion-icon" />
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <ul className="list-unstyled">
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 1</span>
                                </li>
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 2 (Disabled)</span>
                                </li>
                                <li className="list-item" onClick={this.alertClicked}>
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Click Me (Button Action)</span>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* Accordion Item 2 */}
                    <Accordion.Item eventKey="1" className="mb-3 shadow-lg">
                        <Accordion.Header className="accordion-header">
                            <span className="flex-grow-1">Accordion Item #2</span>
                            {this.state.activeKey === '1' ? (
                                <FaChevronUp className="accordion-icon" />
                            ) : (
                                <FaChevronDown className="accordion-icon" />
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <ul className="list-unstyled">
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 3</span>
                                </li>
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 4 (Disabled)</span>
                                </li>
                                <li className="list-item" onClick={this.alertClicked}>
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Click Me Too (Button Action)</span>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* Accordion Item 2 */}
                    <Accordion.Item eventKey="1" className="mb-3 shadow-lg">
                        <Accordion.Header className="accordion-header">
                            <span className="flex-grow-1">Accordion Item #2</span>
                            {this.state.activeKey === '1' ? (
                                <FaChevronUp className="accordion-icon" />
                            ) : (
                                <FaChevronDown className="accordion-icon" />
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <ul className="list-unstyled">
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 3</span>
                                </li>
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 4 (Disabled)</span>
                                </li>
                                <li className="list-item" onClick={this.alertClicked}>
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Click Me Too (Button Action)</span>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>


                    {/* Accordion Item 2 */}
                    <Accordion.Item eventKey="1" className="mb-3 shadow-lg">
                        <Accordion.Header className="accordion-header">
                            <span className="flex-grow-1">Accordion Item #2</span>
                            {this.state.activeKey === '1' ? (
                                <FaChevronUp className="accordion-icon" />
                            ) : (
                                <FaChevronDown className="accordion-icon" />
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <ul className="list-unstyled">
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 3</span>
                                </li>
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 4 (Disabled)</span>
                                </li>
                                <li className="list-item" onClick={this.alertClicked}>
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Click Me Too (Button Action)</span>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>


                    {/* Accordion Item 2 */}
                    <Accordion.Item eventKey="1" className="mb-3 shadow-lg">
                        <Accordion.Header className="accordion-header">
                            <span className="flex-grow-1">Accordion Item #2</span>
                            {this.state.activeKey === '1' ? (
                                <FaChevronUp className="accordion-icon" />
                            ) : (
                                <FaChevronDown className="accordion-icon" />
                            )}
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <ul className="list-unstyled">
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 3</span>
                                </li>
                                <li className="list-item">
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Link 4 (Disabled)</span>
                                </li>
                                <li className="list-item" onClick={this.alertClicked}>
                                    <FaChevronRight className="list-item-icon" />
                                    <span>Click Me Too (Button Action)</span>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>



                </Accordion>
            </div>
        );
    }
}

export default MegaMenu;
