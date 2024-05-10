import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { PersonAddAltOutlined, AddShoppingCart, Description } from '@mui/icons-material';
import './WorkFlowCards.css'

const WorkFlowCards = () => {
    return (
        <div className="container mt-3">
            <Row className="g-4">
                <Col md={6} lg={4}>
                    <Card className="card-hover">
                        <CardBody className="d-flex p-0 card-body">
                            <div className="icon-container ">
                                <PersonAddAltOutlined style={{ color: '#ffffff' }} fontSize="large" />
                            </div>
                            <div className="content-container">
                                <h5>Customer and Supplier</h5>
                                <p className='card-description'>Add Customer and Supplier</p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="card-hover">
                        <CardBody className="d-flex p-0 ">
                            <div className="icon-container ">
                                <AddShoppingCart style={{ color: '#ffffff' }} fontSize="large" />
                            </div>
                            <div className="content-container">
                                <h5>Product/Services</h5>
                                <p className='card-description'>Add Product/Services</p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="card-hover">
                        <CardBody className="d-flex p-0">
                            <div className="icon-container">
                                <Description style={{ color: '#ffffff' }} fontSize="large" />
                            </div>
                            <div className="content-container">
                                <h5>Sale/Purchase</h5>
                                <p className='card-description'>Add Sale/Purchase Invoices</p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default WorkFlowCards;