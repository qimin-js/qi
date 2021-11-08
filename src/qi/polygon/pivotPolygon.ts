import {Pivot} from "qi/graphics/pivot";
import {Polygon} from "qi/polygon";

class PivotPolygon extends Pivot{
    grap:Polygon
    constructor(polygon:Polygon) {
        super(polygon)
        this.grap=polygon;
    }
    creat() {
        this._x=this.grap.points.min.x + this.grap.size.width/2+this._x
        this._y=this.grap.points.min.y + this.grap.size.height/2+this._y
    }
}
export {PivotPolygon}