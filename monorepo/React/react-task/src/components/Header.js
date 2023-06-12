import React from 'react';
import {Container, Navbar, Nav,NavItem,Button,} from 'reactstrap';

export default function Header(props){

    const {currentStep, handleBack} = props;

    return  <Container>
    <Navbar  expand="md">
    <Nav className="ml-auto w-100 nav" navbar>
      <NavItem className="text-left ">
        {currentStep === '2/2' && (
          <Button color="secondary" onClick={handleBack}>
            Back
          </Button>
        )}
      </NavItem>
      <NavItem className="text-center mx-auto">
        <h2 className="nav-title">Choose Service</h2>
        <span className="nav-step">Step {currentStep}</span>
      </NavItem>
    </Nav>
  </Navbar>
  </Container>
}


