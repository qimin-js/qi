import {Polygon} from "qi/polygon";
import {Point} from "qi/base/point";
class Rect extends Polygon{
    // rewrite moveTo ,one Rect only draw one Rect ,
    // if you want draw another ,please creat new Rect
    moveTo(x: number, y: number): this {
        this.points.moveTo=new Point(x,y)
        this.vertexs.points[0]=new Point(x,y);
        return this
    }
    // 绘制 矩形到(x,y)
    lineTo(x:number,y:number){
        super.lineTo(x, y);
        if(this.points.lineTo != undefined)this.endPath()
        let moveToPoint=this.vertexs.points[0]

        let min=new Point(Math.min(moveToPoint.x,x),Math.min(moveToPoint.y,y))
        let max=new Point(Math.max(moveToPoint.x,x),Math.max(moveToPoint.y,y))
        this.vertexs.points[1]=new Point(max.x,min.y)
        this.vertexs.points[2]=new Point(max.x,max.y)
        this.vertexs.points[3]=new Point(min.x,max.y)
        this.vertexs.points[4]=new Point(this.points.moveTo.x,this.points.moveTo.y)
        // this.closePath()
        return this
    }
    // draw rect
    line(width:number,height:number){
        this.lineTo(width+this.points.moveTo.x,height+this.points.moveTo.y)
        return this
    }
}
export {Rect}