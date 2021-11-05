import classes from "./Line.module.css";
import Element from "./../Element/Element";
import { LineType } from './../../types/LineType';
import { ElementType } from './../../types/ElementType';
import { RoverPosition } from './../../types/RoverPositionType';
const Line:React.FC<{line:LineType,roverPosition:RoverPosition}> = ({line,roverPosition}) => {

  return (
    <div className={classes.line}>
      {line.elements.map((element:ElementType)=><Element key={`element-${element.columnId}`} element={element} />)}
    </div>
  );
};

export default Line;
