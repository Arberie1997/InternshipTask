import React from 'react';
import { Container, } from 'reactstrap';

export default function SingleOption(props){
    const {selectedOption} = props;
    return <div className="bg-light">
        <Container>
            <div className="single-option">
                <div className="single-option-box">
                    <h1>Selected option:</h1>
                    <h2>{selectedOption}</h2>
                </div>
            </div>
        </Container>
    </div>
}