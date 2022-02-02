import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


const Login = () => {
    const history = useHistory();
    const submitHandler = (e) => {
    e.preventDefault();
    history.push('/Gallery')
  }
  return <div className='login' >
     
    <Container fluid>
  <Row >
    <Col sm={4} className='text-center'> 
    <h1 className='sign'>Sign In</h1>
    <p>Free access to our dashboard.</p>
    <form onSubmit={submitHandler}>
      <label htmlFor="">Email</label><br />
      <input type="email" placeholder='name@address.com' />
      <br /> <br />
      <label htmlFor="">Password</label><br />
      <input type="Password" placeholder='Enter your password' /><br /><br />
      <Button className='btn' type="submit" variant="primary" size="lg">Sign In</Button>
    </form><br /> <br />

    <div>
      <p><span>Don't have an account yet?</span> </p>
      <a href="/sign-Up">Sign Up</a>
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

export default Login;
