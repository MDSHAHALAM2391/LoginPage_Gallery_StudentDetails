import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const PasswordValidation = () => {
    return <div className='login' >
     
    <Container fluid>
  <Row >
    <Col sm={4} className='text-center'> 
    <h1 className='password-p'>Password reset</h1>
    <p>Enter your email to get a password reset link.</p>
    <form >
      <label htmlFor="">Email Address</label><br />
      <input type="email" placeholder='name@address.com' />
      <br /> <br />
      <Button className='btn' type="submit" variant="primary" size="lg">Reset Password</Button>
    </form>
    <div>
      <p><span>Remember your password? </span>  <a href="/" style={{ textDecoration: 'none' }}>log in</a></p>
   
    </div>
   
    </Col>
    <Col sm={8}>
    <div className='back-img'>

    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">NEETABLE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/gallery">Gallery</Nav.Link>
        <Nav.Link href="/student">Student</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  
    </Col>
  </Row>
</Container>

  </div>;
};

export default PasswordValidation;
