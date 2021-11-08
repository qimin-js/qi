import {Graphics} from "qi/graphics";
import {can} from "qi/can";

class Geometry{
    grap:Graphics
    constructor(grap:Graphics) {
        this.grap=grap
    }
    refactor(){
        this.grap.vertexs.draw()
        can.ctx.lineWidth=this.grap.status.strokeWidth
        this.grap.status.stroke && this.grap.stroke()
        if(this.grap.status.opacity !=1) can.ctx.globalAlpha=this.grap.status.opacity// 必须在填充前
        this.grap.status.fill && this.grap.fill(this.grap.status.fillStyle)
        this.grap.status.closePath && this.grap.closePath()
        this.grap.status.endPath && this.grap.endPath()
        // init opacity
        can.ctx.globalAlpha=1;
        return this.grap
    }
}
export {Geometry}