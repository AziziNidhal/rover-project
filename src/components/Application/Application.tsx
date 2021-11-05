import { useContext, useState } from "react";
import RoverContext from "../../store/rover-context";
import { GridType } from "../../types/GridType";
import { RoverPosition } from "./../../types/RoverPositionType";
import directionsImage from "../../assets/directions.png";
import Grid from "../Grid/Grid";
import CommandLine from './../CommandLine/CommandLine';
import CommandButtons from './../CommandButtons/CommandButtons';

const Application = () => {
  const roverCtx = useContext(RoverContext);
  const { lines, columns } = roverCtx;
  const roverPosition = new RoverPosition();
  const grid = new GridType(lines, columns);




  return (
    <div>
      <Grid grid={grid} roverPosition={roverPosition} />
      <div>
        <img
          src={directionsImage}
          style={{ height: "100px", position: "absolute", right: 0,bottom:'45vh' }}
          alt=""
        />
      </div>

      <CommandButtons/>

      <CommandLine/>
    </div>
  );
};

export default Application;
