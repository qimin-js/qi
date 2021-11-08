/**
 * test father child relationship
 * if graphics has father .
 * the father's moveTo point is child's (0,0).
 * in the case, child's transform and pivot base on father.
 */
import {World} from "src/qi";
let world=new World({})
world.showMousePosition()
import {Rect} from "src/qi";
let pp=new Rect().moveTo(100,100).lineTo(200,200)
    .fill("#009fcc").endPath()
let ss=new Rect().moveTo(0,0).lineTo(50,50)
    .fill("#440").endPath()
ss.group=1
pp.child.add(ss)
pp.status.opacity=0.5
setInterval(function (){
    pp.transform.x+=1
},100)
setInterval(function (){
    pp.rotation.radian+=0.01
},10)
console.log(pp,ss)