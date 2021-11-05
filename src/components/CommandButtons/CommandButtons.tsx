import { useContext } from "react";
import RoverContext from "../../store/rover-context";

const CommandButtons = () => {
    const roverCtx = useContext(RoverContext);

    const moveNorth = () => {
        roverCtx.changeDirection("N");
      };
    
      const moveWest = () => {
        roverCtx.changeDirection("W");
      };
      const moveEst = () => {
        roverCtx.changeDirection("E");
      };
      const moveSouth = () => {
        roverCtx.changeDirection("S");
      };
    
      const moveHandler = () => {
        roverCtx.move();
      };

  return (
    <div
      style={{
        height: "150px",
        width: "100px",
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <button disabled>X</button>
      <button onClick={moveNorth}>N</button>
      <button disabled>X</button>
      <br />
      <button onClick={moveWest}>W</button>
      <button disabled>X</button>
      <button onClick={moveEst}>E</button> <br />
      <button disabled>X</button>
      <button onClick={moveSouth}>S</button>
      <button disabled>X</button> <br />
      <button onClick={moveHandler}>move</button>
    </div>
  );
};

export default CommandButtons;
