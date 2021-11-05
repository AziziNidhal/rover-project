export class RoverPosition {
    line:number;
    column:number;

    constructor(line:number=0,column:number=0){
        this.line = line;
        this.column = column;
    }

    getRoverPosition(){
        return{
            line:this.line,
            column:this.column
        }
    }
}