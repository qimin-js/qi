import {Polygon} from "qi/polygon";
import {Geometry} from "qi/graphics/geometry";
class GeometryPolygon extends Geometry{
    grap:Polygon
    constructor(grap:Polygon) {
        super(grap)
        this.grap=grap
    }
    refactor(){
        super.refactor();
        this.grap.status.drawImg && this.grap.texture.refactor()
        return this.grap
    }
}
export {GeometryPolygon}