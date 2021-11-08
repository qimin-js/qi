/**
 * text's status.
 */
import {Text} from "qi/text";
type alignType=["left" | "right" | "center","top" | "middle" | "bottom"]
class Status{
    text:Text
    constructor(text:Text) {
        this.text=text
    }
    // text innerText
    inner:string
    // text size normal:15
    size:number=15
    // 字体粗细 100-900
    weight:number | "bolder" | "normal"="normal"
    // text color normal:"#000"
    color:string="#000"
    // set text align like ["left","top"]
    align:alignType=["center","middle"]
    // 链式调用方便
    // set text size
    setSize(size:number){this.size=size;return this}
    // set text color
    setColor(color:string){this.color=color;return this}
    // set text align like ["left","top"]
    setAlign(align:alignType){this.align=align;return this}
    // set text weight 100:lighter bolder:900
    setWeight(v:number | "bolder" | "normal"){this.weight=v;return this}
    // set text innerText
    setInner(v:string){this.inner=v;return this}
}
export {Status}