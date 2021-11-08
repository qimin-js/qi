import {Graphics} from "qi/graphics";
import {Point} from "qi/base/point";
import {can} from "qi/can";
import {graphicsEvent} from "qi/graphicsEvent";
import {Flat} from "qi/base/flat";
import {allRect} from "qi/saveContainer";
import {Size} from "qi/polygon/size";
import {PointsPolygon} from "qi/polygon/pointsPolygon";
import {PivotPolygon} from "qi/polygon/pivotPolygon";
import {Texture} from "qi/polygon/texture";
import {StatusPolygon} from "qi/polygon/statusPolygon";
import {GeometryPolygon} from "qi/polygon/geometryPolygon";
import {Text} from "qi/text";
import {Event} from "qi/polygon/event";

class Polygon extends Graphics{
    constructor() {
        super();
        allRect.add(this) // 将图形添加进集合
    }
    flat:Flat=new Flat(this)
    size=new Size(this)
    points=new PointsPolygon(this)
    pivot:PivotPolygon =new PivotPolygon(this)
    texture=new Texture(this)
    status=new StatusPolygon(this)
    geometry=new GeometryPolygon(this)
    event=new Event(this)
    // this only offer child to extend,please dont use it
    lineTo(x:number,y:number):this{
        this.points.lineTo=new Point(x,y)
        // can.ctx.lineWidth= this.lineWidth
        return this
    }
    // show all the point num at the screen.
    // you can see points whether clockwise,it is important
    showPointPos(){
        let i=1;
        for (const params of this.vertexs.points) {
            let ll=new Text(String(i++),params)
            ll.status.size=10
        }
    }
}
export {Polygon}