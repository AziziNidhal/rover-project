import classes from "./Element.module.css";
import roverImage from "./rover-img.png";
import { ElementType } from './../../types/ElementType';
import { useContext } from "react";
import RoverContext from "../../store/rover-context";

const Element:React.FC<{element:ElementType}> = ({element}) => {
    const roverCtx = useContext(RoverContext);
    const currentDirection = roverCtx.roverData.direction;
    const currentDirectionClassNameString = currentDirection+'-rotation';
    const currentDirectionClassName = classes[currentDirectionClassNameString];

    const hasRover = (roverCtx.roverData.position.column === element.columnId) && (roverCtx.roverData.position.line === element.lineId)
  return (
    <>
      {!hasRover && <div className={`${classes.element} ${classes.elementSize}`}></div>}

      {hasRover && <img
        src={roverImage}
        className={`${classes.element} ${classes.rover} ${currentDirectionClassName}`}
        alt=""
      />}
    </>
  );
};

export default Element;
