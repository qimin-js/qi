import {Polygon} from "qi/polygon";
class Size{
    polygon:Polygon
    constructor(polygon:Polygon) {
        this.polygon=polygon
    }
    get width(){
        return  this.polygon.points.max.x-this.polygon.points.min.x
    }
    get height(){
        return  this.polygon.points.max.y-this.polygon.points.min.y
    }
}
export {Size}