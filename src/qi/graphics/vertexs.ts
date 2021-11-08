import {Graphics} from "qi/graphics";
import {Point} from "qi/base/point";
import {can} from "qi/can";
import {Vector} from "qi/base/vector";

class Vertexs{
    grap:Graphics
    points:Array<Point>=[]
    constructor(grap:Graphics) {
        this.grap=grap
    }
    // according to points and transform.draw the graphics.
    // this function is important
    draw(){
        if(this.points.length == 0 || this.points.length == 1)return
        let clonePoints=this.clone()
        let center:Point
        let radian:number
        if(this.grap.rotation.radian!=0){
            center=new Point(this.grap.pivot.x,this.grap.pivot.y)
            // console.log(center)
            radian=this.grap.rotation.radian
        }
        let finalArray:Array<(params:Point)=>void>=[];
        if(this.grap.transform.x !=0 || this.grap.transform.y != 0){
            finalArray.push( (params:Point)=>{
                params.transform(new Point(this.grap.transform.x,this.grap.transform.y))
            })
        }
        if(this.grap.rotation.radian!=0){
            finalArray.push((params:Point)=>{
                let vector=new Vector(params,center)
                let afterRotate =vector.clone().rotateAlong(radian)
                params.transform(new Point(afterRotate.x-vector.x,afterRotate.y-vector.y))
            })
        }
        if(this.grap.father.grap!=undefined) {// 以父亲的左上角为坐标轴
            this.grap.father.transform(finalArray)
        }
        for (const finalArrayElement of finalArray) {
            for (let params of clonePoints) {
                finalArrayElement(params)
            }
        }
        let index=0
        can.ctx.moveTo(clonePoints[0].x,clonePoints[0].y)
        for (let params of clonePoints) {
            index+=1;
            if(index == 1)continue
            can.ctx.lineTo(params.x, params.y)
        }
    }
    // clone all the points
    clone(){
        let clonePoints:Array<Point>=[]
        for (let params of this.points) {
            clonePoints.push(new Point(params.x,params.y))
        }
        return clonePoints
    }
    // return all the points's x
    allX():Array<number>{
        let allX:Array<number>=[]
        for (const params of this.points) {
            allX.push(params.x)
        }
        return allX
    }
    allY():Array<number>{
        let allY:Array<number>=[]
        for (const params of this.points) {
            allY.push(params.y)
        }
        return allY
    }
    // add point to points
    add(point:Array<Point>){
        for (let params of point) {
            this.points.push(params);
        }
        this.draw()
        return this
    }
    // remove point from the points
    // remove(point:Point){
    //     this.points.remove(point);
    //     this.draw()
    //     return this
    // }
}
export {Vertexs}