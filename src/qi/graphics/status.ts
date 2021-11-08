import {Graphics} from "qi/graphics";

class Status{
    grap:Graphics
    constructor(grap:Graphics) {
        this.grap=grap
    }
    strokeWidth:number=2
    // whether can see it at the screen
    viewAble:boolean=true
    // whether need stroke
    stroke:boolean=false
    // whether need fill
    fill:boolean=false
    // fill color
    fillStyle:string="#000"
    closePath:boolean=false
    endPath:boolean=false
    opacity:number=1;
}
export {Status}