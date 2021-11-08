import {Text} from "qi/text";
import {can} from "qi/can";

export class Size{
    text:Text
    constructor(text:Text) {
        this.text=text
    }
    get height(){
        return this.text.status.size
    }
    get width(){
        can.ctx.font=this.text.status.weight + " " + this.text.status.size+"px serif"
        return can.ctx.measureText(this.text.status.inner).width
    }
}
