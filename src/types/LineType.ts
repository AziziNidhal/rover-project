import { ElementType } from "./ElementType";

export class LineType {
    elements:ElementType[];
    lineId:number;
    columnsNumber;

    // constructor(elements:ElementType[],lineId:number){
    //     this.elements = elements;
    //     this.lineId = lineId;
    // }


    constructor(lineId:number,columnsNumber:number){
        this.columnsNumber = columnsNumber;
        const lineElements = [];
        for(let i=0;i<columnsNumber;i++){
            const el = new ElementType(false,lineId,i);
            lineElements.push(el)
        }
        this.elements = lineElements;
        this.lineId = lineId;
    }

    getLine(){
        return {
            lineId:this.lineId,
            elements:this.elements,
            columnsNumber:this.columnsNumber
        }
    }
}