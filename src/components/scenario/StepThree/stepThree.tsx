import stepThreeImg from "./stepThree.png";

import Application from './../../Application/Application';

const StepThree = () => {
  
  return (
    <div
      style={{ backgroundImage: `url(${stepThreeImg})` }}
      className="fullscreen"
    >
        <Application></Application>
    </div>
  );
};

export default StepThree;
