import {Geometry} from "qi/graphics/geometry";
import {Line} from "qi/line";
import {can} from "qi/can";

class GeometryLine extends Geometry{
    grap:Line
    constructor(grap:Line) {
        super(grap);
        this.grap=grap
    }
    refactor() {
        this.grap.status.dashLine != [0,0] && can.ctx.setLineDash(this.grap.status.dashLine);
        // if(this.grap.status.dashOffset != 0) can.ctx.lineDashOffset = this.grap.status.dashOffset
        super.refactor()
        can.ctx.setLineDash([])
        // can.ctx.lineDashOffset=0
        return this.grap
    }
}
export {GeometryLine}