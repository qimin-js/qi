import {Points} from "qi/graphics/points";
import {Polygon} from "qi/polygon";

class PointsPolygon extends Points{
    grap:Polygon
    constructor(polygon:Polygon) {
        super(polygon)
        this.grap=polygon
    }
    // 偏移后
    // get center(){
    //     return this.min.transform(this.grap.offset())
    //         .transform(new Point(this.grap.size.width,this.grap.size.width))
    // }
}
export {PointsPolygon}