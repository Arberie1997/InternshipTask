import React from 'react';
import {Container} from 'reactstrap';
import logo from '../assets/images/logo-final.svg';

export default function Footer(){
    return <Container>
        <div className="footer">
            <h2>Powered By<img src={logo} alt="logo" /></h2>
        </div>
    </Container>
}