import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import {Container} from 'reactstrap';
import Contact from './Contact';

export default function Body(props){

    const {options, handleSelectedOption} = props;

    return<div className="bg-light options">
        <Container>
            <div className="mx-auto options-list">
                {options.map((option) => (
                <div onClick={() => handleSelectedOption(option.title)} className="options-list-item d-flex " key={option._id}>
                    <img src={option.img} alt="img" />
                    <h2>{option.title}</h2>
                    <MdKeyboardArrowRight />
                </div>
                ))}
            </div>
            <Contact />
            </Container>
        </div>
        
   
}