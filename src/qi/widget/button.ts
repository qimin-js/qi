// import {Polygon} from "qi/polygon";
import {Rect} from "qi/rect";
import {Text} from "qi/text";
import {Point} from "qi/base/point";
import {StatusBtn} from "qi/widget/button/statusBtn";

type buttonObj= {
    width?:number
    height?:number
    innerText:string
    borderRadius?:number
    backgroundColor?:string
    x:number
    y:number
}
let buttonInit={
    width:60,
    height:40,
    borderRadius:0,
    backgroundColor:"#fff",
}
class Button extends Rect{
    text:Text
    status=new StatusBtn(this)
    // draw Button to screen.
    // only need inner ,x ,y.
    constructor(obj:buttonObj) {
        super();
        if(!obj.width)obj.width=buttonInit.width
        if(!obj.height)obj.height=buttonInit.height
        if(!obj.borderRadius)obj.borderRadius=buttonInit.borderRadius
        if(!obj.backgroundColor)obj.backgroundColor=buttonInit.backgroundColor
        obj.width && obj.height && this.moveTo(obj.x,obj.y).lineTo(obj.x+obj.width,obj.y+obj.height)
            .endPath()
        this.text=new Text(obj.innerText,new Point(this.points.moveTo.x+this.size.width/2,this.points.moveTo.y+this.size.height/2))
        this.text.group=1
    }
}
export {Button}