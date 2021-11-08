import {Polygon} from "qi/polygon";
import {Point} from "qi/base/point";
import {Vector} from "qi/base/vector";

class Circle extends Polygon{
    // draw circle to(x,y)
    lineTo(x: number, y: number,radian:number=2*Math.PI): this {
        super.lineTo(x, y);

        let moveToPoint=this.vertexs.points[0]
        let vectorCircle= new Vector(new Point(x,y),new Point(moveToPoint.x,moveToPoint.y))
        let radianOne =0.105*Math.PI;

        this.vertexs.points[0]=new Point(moveToPoint.x+vectorCircle.x,moveToPoint.y+vectorCircle.y)
        for (let i = radianOne; i < radian-radianOne; i+=radianOne) {
            vectorCircle.rotateInverse(radianOne);
            this.vertexs.add([new Point(moveToPoint.x+vectorCircle.x,moveToPoint.y+vectorCircle.y)])
        }
        this.closePath()
        return this
    }
}
export {Circle}