import React from 'react';
import {Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">Caffe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#order">Order</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="jumbotron">
                <h1 class="display-5 fw-bold">Caffe</h1>
                <p class="col-md-8 fs-4">온라인으로 주문하고 편하게 커피를 받아 보세요!</p>
                <hr class="my-4"/>
                <a class="btn btn-primary btn-lg" href="/order" role="button">주문하기</a>
            </div>
        </div>
    )
}

export default Home;