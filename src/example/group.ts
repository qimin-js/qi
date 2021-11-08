/**
 * high group graphics can cover low group graphics.
 * the same group also has cover,according to the refactor order.
 */
import {World} from "src/qi";
let world=new World({})
world.showMousePosition()
import {Rect} from "src/qi";
let pp=new Rect().moveTo(100,100).lineTo(200,200)
    .fill("#009fcc").endPath()
let ss=new Rect().moveTo(150,150).lineTo(300,300)
    .fill("#440").endPath()
ss.group=1
