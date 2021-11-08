import {id} from "qi/graphics/id";
import {Geometry} from "qi/graphics/geometry";
import {Points} from "qi/graphics/points";
import {Point} from "qi/base/point";
import {can} from "qi/can";
import {Transform} from "qi/graphics/transform";
import {GraphicsInterface} from "qi/graphics/graphicsInterface";
import {Pivot} from "qi/graphics/pivot";
import {Rotation} from "qi/graphics/rotation";
import {Vertexs} from "qi/graphics/vertexs";
import {Status} from "qi/graphics/status";
import {Child} from "qi/graphics/child";
import {Father} from "qi/graphics/father";

abstract class Graphics implements GraphicsInterface {
    id=id.next()
    geometry=new Geometry(this)
    points=new Points(this)
    transform=new Transform(this)
    pivot:Pivot=new Pivot(this)
    rotation=new Rotation(this)
    vertexs=new Vertexs(this);
    status=new Status(this)
    group:number=0;
    child=new Child(this)
    father=new Father()
    // when you use lineTo,please use moveTo first
    moveTo(x:number,y:number){
        this.points.moveTo=new Point(x,y)
        this.vertexs.add([new Point(x,y)])
        return this
    }
    // one graphics is complete.
    // when draw anther graphics,use it first
    endPath(){
        can.ctx.beginPath()
        can.ctx.fillStyle="#000"
        can.ctx.strokeStyle="#000"
        this.status.endPath=true
        return this
    }
    // according to vertexs.points,line to all the points
    stroke(){
        can.ctx.stroke()
        this.status.stroke=true
        return this
    }
    // according to all the points, fill color in the area
    fill(color:string="#000"){
        can.ctx.fillStyle=color
        can.ctx.fill()
        this.status.fillStyle=color
        this.status.fill=true
        return this
    }
    // close the path
    closePath(){
        if(this.status.closePath)return this
        this.vertexs.add([this.vertexs.points[0]])
        this.status.closePath=true
        return this
    }
    // clear the graphics.
    // the next refactor can't use it's refactor.
    clear(){
        this.status.viewAble=false
        return this
    }
}
export {Graphics}