import { LineType } from './LineType';
export class GridType{
    grid:LineType[];
    linesNumber:number;
    columnsNumber:number
    constructor(linesNumber:number,columnsNumber:number){
        this.linesNumber = linesNumber;
        this.columnsNumber = columnsNumber;
        const gridElements = [];
        for(let i=0;i<linesNumber;i++){
            const el = new LineType(i,columnsNumber);
            gridElements.push(el)
        }
        this.grid = gridElements;
    }


    getGrid(){
        return {
            grid:this.grid,
            linesNumber:this.linesNumber,
            columnsNumber:this.columnsNumber,
        }
    }





    // constructor(lines:LineType[]){
    //     this.lines = new LineType();;
    // }
}