import {Graphics} from "qi/graphics";
import {all as All} from "qi/whoExtendsPolygon";
import {Point} from "qi/base/point";
import {Vector} from "qi/base/vector";
type all=All | Graphics
class Father{
    grap:all

    /**
     * you can creat a iterator ,do array internal function,function argument is you want to transform point.
     * @param finalArray
     */
    transform(finalArray:Array<(params:Point)=>void>){
        // let finalArray:Array<(params:Point)=>void>=[];
        let target=this.grap
        finalArray.push((params)=>{
            params.transform(new Point(target.points.moveTo.x,target.points.moveTo.y))
        })
        if(target.transform.x !=0 || target.transform.y != 0){
            finalArray.push((params)=>{
                params.transform(new Point(target.transform.x,target.transform.y))
            })
        }
        if(target.rotation && target.rotation.radian!=0) {
            const center = new Point(target.pivot.x, target.pivot.y)
            const radian = target.rotation.radian
            finalArray.push((params:Point)=>{
                let vector=new Vector(params,center)
                let afterRotate =vector.clone().rotateAlong(radian)
                params.transform(new Point(afterRotate.x-vector.x,afterRotate.y-vector.y))
            })
        }
        if(target.father.grap!=undefined){
            target.father.transform(finalArray)
        }
        // return finalArray
    }
}
export {Father}
