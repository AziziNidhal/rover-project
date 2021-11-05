import { createContext } from "react"
import { RoverDataType } from "../types/RoverDataType";
import DirectionsType from './../types/DirectionsType';

type Props = {
    roverData:RoverDataType,
    move:()=>void,
    changeDirection:(direction:DirectionsType)=>void,
    lines:number,
    columns:number
}

const RoverContext = createContext<Props>({
    roverData:new RoverDataType(),
    move:()=>{},
    changeDirection:(direction:DirectionsType)=>{},
    lines:10,
    columns:10
})

export default RoverContext;