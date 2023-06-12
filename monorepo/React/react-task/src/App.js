import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { options } from "./data/data";
import SingleOption from './components/SingleOption';
import "./style/index.scss";


export default function App() {

  const [currentStep, setCurrentStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    setCurrentStep('2/2');
  };

  const handleBack = () =>{
    setCurrentStep('1/2');
    setSelectedOption('');
  }

  return (
    <div className="App">
      <Header currentStep={currentStep} handleBack={handleBack}/>
      {currentStep === '1/2' ? (
        <>
        <Body handleSelectedOption={handleSelectedOption} options={options} />
        </>
        ) : (
        <SingleOption selectedOption={selectedOption} />
      )}
      <Footer />
    </div>
  );
}





