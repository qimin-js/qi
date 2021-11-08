/**
 * maliao is running.
 */
// attr save some static variable,like the window size.
import {attr} from "qi/attr";

import {Line, Rect, World} from "src/qi";
let world=new World({})
world.showMousePosition()
let ll=new Rect().moveTo(0,attr.size.height-100).lineTo(50,attr.size.height).endPath()
setInterval(function (){
    setTimeout(function (){
        ll.texture.drawimg("./qi/img/run.png",[96,0,16,31])
    },300)
    setTimeout(function (){
        ll.texture.drawimg("./qi/img/run.png",[113,0,14,31])
    },600)
    setTimeout(function (){
        ll.texture.drawimg("./qi/img/run.png",[127,0,16,32])
    },900)
},900)
console.log(1)
// let line=new Line().moveTo(0,0).lineTo(100,100).stroke().endPath()
setInterval(function (){
    ll.transform.x+=1
},10)
