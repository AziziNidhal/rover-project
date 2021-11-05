import { KeyboardEvent, useContext, useState } from "react";
import RoverContext from "../../store/rover-context";
import classes from "./CommandLine.module.css";
const CommandLine = () => {
  const roverCtx = useContext(RoverContext);
  const [movingString, setMovingString] = useState<string>("");


  const keyDownHandler = (keyboard:KeyboardEvent<HTMLInputElement>) => {
      const keyCode = keyboard.code;
      //l:76 / r:82 / t:84 / b:66 / f 70 / enter : 13
      if(['KeyL','KeyR','KeyT','KeyB','KeyF','Enter'].indexOf(keyCode) === -1){ return;}

      setMovingString(last=>last+keyboard.key)
      if (keyCode === "KeyT") {
        roverCtx.changeDirection("N");
      }
      if (keyCode === "KeyR") {
        roverCtx.changeDirection("E");
      }
      if (keyCode === "KeyB") {
        roverCtx.changeDirection("S");
      }
      if (keyCode === "KeyL") {
        roverCtx.changeDirection("W");
      }
      if (keyCode === "KeyF") {
        roverCtx.move();
      }

      if(keyCode === "Enter"){
        setMovingString('');
      }

  }

  return (
    <div className={classes["command-line"]}>
      <div className={classes.header}>
        TRACEONE-ROVER [Version 1.0]
        <br />
        <div className={classes.context}></div> Nidhal Azizi Technical Test (l:
        left / r: right / t: top / b : bottom / f : forward / enter: clear)
      </div>
      <ul className={classes.list}></ul>
      <div id="getfocus">
        <li className={classes["list-item"]}>
          <input
            className={classes.input}
            type="text"
            // value={movingString}
            onKeyDown={keyDownHandler}
            defaultValue=""
          />
        </li>
      </div>
    </div>
  );
};

export default CommandLine;
