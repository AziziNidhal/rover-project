export class ElementType {
    hasRover:boolean;
    lineId:number;
    columnId:number;

    constructor(hasRover:boolean,lineId:number,columnId:number){
        this.hasRover=hasRover;
        this.lineId = lineId;
        this.columnId = columnId;
    }

    addRover(){
        this.hasRover = true;
    }

    removeRover(){
        this.hasRover = false;
    }

    getElement(){
        return {
            hasRover:this.hasRover,
            lineId:this.lineId,
            columnId:this.columnId
        }
    }

    // prepareElement(lineId:number,columnId:number,hasRover:boolean=false){
    //     this.hasRover = hasRover;
    //     this.lineId = lineId;
    //     this.columnId = columnId;
    // }
}