import {Graphics} from "qi/graphics";
import {Polygon} from "qi/polygon";
import {Text} from "qi/text";
import {all as All} from "qi/whoExtendsPolygon";
type all = All | Text
class Child{
    grap:Graphics
    container:Array<all>=[]
    constructor(grap:Graphics) {
        this.grap=grap
    }
    // you can add who extend polygon.
    add(params:all){
        this.container.push(params)
        params.father.grap=this.grap
    }
}
export {Child}
