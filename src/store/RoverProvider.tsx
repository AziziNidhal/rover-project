import { ReactChild, useState } from "react";
import RoverContext from "./rover-context";
import { RoverDataType } from "./../types/RoverDataType";
import DirectionsType from "./../types/DirectionsType";

const RoverProvider: React.FC<{ children: ReactChild | ReactChild[] }> = ({
  children,
}) => {
  const [roverData, setRoverData] = useState<RoverDataType>(
    new RoverDataType()
  );
  const lines = 10;
  const columns = 10;

  const moveHandler = () => {
    const newRoverData = new RoverDataType(
      roverData.direction,
      roverData.position.line,
      roverData.position.column
    );
    newRoverData.move(lines, columns);
    setRoverData(newRoverData);
  };

  const changeDirection = (direction: DirectionsType) => {
    setRoverData((lastRoverData: RoverDataType) => {
      const newRef = Object.assign(
        Object.create(Object.getPrototypeOf(lastRoverData)),
        lastRoverData
      );
      newRef.setDirection(direction);
      return newRef;
    });
  };

  const roverValues = {
    roverData: roverData,
    move: moveHandler,
    changeDirection: changeDirection,
    lines: lines,
    columns: columns,
  };

  return (
    <RoverContext.Provider value={roverValues}>
      {children}
    </RoverContext.Provider>
  );
};

export default RoverProvider;
