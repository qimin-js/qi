import {Vector as vector} from "matter-js";
import {VectorInterface} from "qi/base/vectorInterface";
import {Point} from "qi/base/point";
class Vector implements VectorInterface{
    x:number
    y:number
    private point1:Point
    private point2:Point
    // p1->p2
    constructor(point1:Point,point2:Point) {
        this.point1=point1
        this.point2=point2
        this.x = point1.x-point2.x
        this.y = point1.y-point2.y
        // console.log(vector.create(point1.x,point1.y))
    }
    // clone vector return new vector
    clone(){
        return new Vector(this.point1,this.point2)
    }
    angle(b:Vector){
        return Math.atan2(this.y, this.x) - Math.atan2(b.y,b.x)
    }
    angleToX(b:Vector){
        return Math.atan2(b.y,b.x)
    }
    angleToY(b:Vector){
        return Math.atan2(b.x,b.y)
    }
    rotateInverse(radian:number) {
        let a = vector.rotate(this, radian)
        this.x=a.x;this.y=a.y
        return this
    }
    // clockwise
    rotateAlong(radian:number){
        let a=vector.rotate(this,-radian)
        this.x=a.x;this.y=a.y
        return this
    }
    opposite(){
        this.x=-this.x;this.y=-this.y
        return this
    }

    /**
     * 向量点乘
     * @param b
     */
    dot(b:Vector){
        return this.x*b.x+this.y*b.y
    }

    /**
     * 向量叉乘(相当于平行四边形的面积)
     * @param b
     */
    cross(b:Vector){
        return this.x*b.y-b.x*this.y
    }
    // rebound(normal: this): this {
    //     let xxx = normal.x
    //     normal.x = -normal.y
    //     normal.y = -xxx
    //     if (normal.x == 0) { normal.x = 0 }
    //     if (normal.y == 0) { normal.y = 0 }
    //     let aa = this.angle(normal)
    //     this.rotateAlong(2*aa)
    //     return this
    // }
}
export {Vector}