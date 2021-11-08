import {Graphics} from "qi/graphics";
import {Point} from "qi/base/point";
import {can} from "qi/can";
import {StatusLine} from "qi/graphics/statusLine";
import {GeometryLine} from "qi/graphics/geometryLine";
import {allLine} from "qi/saveContainer";

class Line extends Graphics{
    status=new StatusLine(this)
    geometry = new GeometryLine(this)
    constructor() {
        super();
        allLine.add(this)
    }
    lineTo(x:number,y:number):this{
        this.points.lineTo=new Point(x,y)
        // can.ctx.lineWidth=this.lineWidth;
        this.vertexs.add([new Point(x,y)])
        return this
    }
    dashlineTo(x:number,y:number,dash:[number,number],dashOffset:number=2){
        can.ctx.setLineDash(dash);
        can.ctx.lineDashOffset = dashOffset;
        this.status.dashLine=dash
        this.status.dashOffset=dashOffset
        this.lineTo(x,y)
        return this
    }
}
export {Line}