import {can} from "qi/can";
import {Point} from "qi/base/point";
import {Geometry} from "qi/text/geometry";
import {allText} from "qi/saveContainer";
import {Father} from "qi/graphics/father";
import {Status} from "qi/text/status";
import {Transform} from "qi/text/transform";
import {Size} from "qi/text/size";
// just need it's event
import {Rect} from "qi/rect";

class Text{
    position:Point
    geometry=new Geometry(this)
    group:number=0;
    father=new Father()
    status=new Status(this)
    transform=new Transform()
    size=new Size(this)
    // use it's event.
    // do like choose text.
    rect=new Rect()
    /**
     * draw text to screen.
     * @param text
     * @param position screen (x,y)
     */
    constructor(text:string,position:Point) {
        this.status.inner=text
        this.position=position
        allText.add(this)
    }
}
export {Text}