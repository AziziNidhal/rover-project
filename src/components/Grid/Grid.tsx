
import Line from "../Line/Line";
import classes from "./Grid.module.css";
import { GridType } from './../../types/GridType';
import { LineType } from './../../types/LineType';
import { RoverPosition } from './../../types/RoverPositionType';

const Grid:React.FC<{grid:GridType,roverPosition:RoverPosition}> = ({grid,roverPosition}) => {
    const gridMatrix:LineType[] = grid.grid;
  return (
    <div className={classes.grid}>
        {gridMatrix.map((line:LineType)=><Line key={`line-${line.lineId}`} line={line} roverPosition={roverPosition}/>)}

    </div>
  );
};

export default Grid;
