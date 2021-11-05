import { RoverPosition } from './RoverPositionType';
import DirectionsType from './DirectionsType';


export class RoverDataType{
    direction:DirectionsType
    position:RoverPosition
    constructor(direction:DirectionsType='N',line:number = 0,column:number = 0){
        this.direction=direction;
        this.position = new RoverPosition(line,column)
    }

    setDirection(direction:DirectionsType){
        this.direction=direction;
        return this;
    }

    move(gridLines:number,gridColumns:number){
        if(this.direction === 'N' && this.position.line > 0){
            this.position.line--;
        }

        if(this.direction === 'S' && this.position.line < gridLines-1){
            this.position.line++;
        }
        if(this.direction === 'W' && this.position.column > 0){
            this.position.column--;
        }
        if(this.direction === 'E' && this.position.column < gridColumns-1){
            this.position.column++;
        }
        return this;
    }
}