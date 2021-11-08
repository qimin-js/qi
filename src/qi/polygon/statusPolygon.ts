import {Status} from "qi/graphics/status";
import {Polygon} from "qi/polygon";

class StatusPolygon extends Status{
    grap:Polygon
    constructor(grap:Polygon) {
        super(grap)
        this.grap=grap
    }
    drawImg:boolean=false
    mouseOver:boolean=false
    mouseOut:boolean=false
}
export {StatusPolygon}