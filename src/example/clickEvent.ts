/**
 * test the click event.
 * if you click circle area .
 * the control will log number 1
 */
import {World,Circle} from "src/qi";
let world=new World({})
world.showMousePosition()
let jk=new Circle()
jk.moveTo(200,200).lineTo(300,300)
    .stroke().endPath()
jk.showPointPos()
jk.event.onClick=function (){
    console.log(1)
}