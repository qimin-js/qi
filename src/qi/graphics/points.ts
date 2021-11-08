import {Graphics} from "qi/graphics";
import {Point} from "qi/base/point";
import {Rect} from "qi/rect";

class Points {
    grap:Graphics
    constructor(grap:Graphics) {
        this.grap=grap
    }
    moveTo:Point
    lineTo:Point
    get max(){return new Point(Math.max(...this.grap.vertexs.allX()),Math.max(...this.grap.vertexs.allY()))}
    get min(){return new Point(Math.min(...this.grap.vertexs.allX()),Math.min(...this.grap.vertexs.allY()))}
    // 偏移后
    // get maxOffset(){return this.min.transform(this.grap.offset())}
    // 偏移后
    // get minOffset(){return this.max.transform(this.grap.offset())}
}
export {Points}