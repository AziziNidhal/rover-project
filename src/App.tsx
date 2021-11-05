import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import StepOne from './components/scenario/StepOne/stepOne';
import StepTwo from './components/scenario/StepTwo/stepTwo';
import StepThree from './components/scenario/StepThree/stepThree';
import StepZero from './components/scenario/StepZero/StepZero';

function App() {
  const [step,setStep] = useState<string>('stepZero'); //start with stepOne as default
  let skipped=false;
  const runScenario = useCallback( () => {
    setTimeout(()=>{
      if(step === 'stepZero' && !skipped){
        setStep('stepOne')
      }
    },2000)
    setTimeout(()=>{
      if(step === 'stepOne' && !skipped){
        setStep('stepTwo')
      }
    },4000);
    setTimeout(()=>{
      if(step === 'stepTwo'){
        setStep('stepThree')
      }
    },4000)
  },[step,skipped])

  const skipInto = () => {
    skipped= true;
    setStep('stepThree')
  }

  useEffect(()=>{
    runScenario();
  },[runScenario])

  return (
    <div className="App">
      {(step === 'stepZero') && <StepZero/>}
      {(step === 'stepOne') && <StepOne/>}
      {(step === 'stepTwo') && <StepTwo/>}
      {(step === 'stepThree') && <StepThree/>}
      {(step !== 'stepThree') && <button onClick={skipInto} style={{zIndex:20, position:'absolute', top:0,right:0}}>Skip Introduction</button>}
    </div>
  );
}

export default App;
