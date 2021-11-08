import {Status} from "qi/graphics/status";
import {Line} from "qi/line";

class StatusLine extends Status{
    grap:Line
    constructor(grap:Line) {
        super(grap);
        this.grap=grap
    }
    // 虚线
    dashLine:[number,number]=[0,0] ;
    // 虚线偏移
    dashOffset:number=0
}
export {StatusLine}