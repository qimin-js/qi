/**
 * text geometry
 */
import {Text} from "qi/text";
import {can} from "qi/can";
import {Point} from "qi/base/point";

class Geometry{
    text:Text
    constructor(text:Text) {
        this.text=text
    }
    refactor(){
        can.ctx.fillStyle=this.text.status.color
        can.ctx.font=this.text.status.weight + " " + this.text.status.size+"px serif"
        // can.ctx.font="900 30px serif"
        can.ctx.textAlign=this.text.status.align[0]
        can.ctx.textBaseline=this.text.status.align[1];
        let pos=new Point(this.text.position.x+this.text.transform.x,this.text.position.y+this.text.transform.y)
        let finalArray:Array<(params:Point)=>void>=[];
        if(this.text.father.grap!=undefined){
            this.text.father.transform(finalArray)
        }
        // according to father transform move it's pos
        for (let params of finalArray) {
            params(pos)
        }
        let rectPos=pos.clone();
        let textWidth=this.text.size.width
        let textHeight=this.text.size.height
        // according to text align determine rect pos and size
        if(this.text.status.align[0]=="center"){
            rectPos.transform(new Point(-textWidth/2,0))
        }
        if(this.text.status.align[0] == "right"){
            rectPos.transform(new Point(-textWidth,0))
        }
        if(this.text.status.align[1] == "middle"){
            rectPos.transform(new Point(0,-textHeight/2))
        }
        if(this.text.status.align[1] == "bottom"){
            rectPos.transform(new Point(0,-textHeight))
        }
        this.text.rect.moveTo(rectPos.x-1,rectPos.y-1).lineTo(rectPos.x+textWidth+1,rectPos.y+textHeight+1)
            .stroke()
            .endPath();
        can.ctx.fillText(this.text.status.inner,pos.x,pos.y)
        can.ctx.beginPath()
        can.ctx.textBaseline="middle"
        can.ctx.textAlign="center"
    }
}
export {Geometry}