/**
 * the most easily example .
 * draw a line.
 * it will creat a world ,it's size is the window's size.
 */
import {Line, World} from "src/qi";
let world=new World({})
let ll= new Line().moveTo(0,0).lineTo(100,100)
ll.stroke().endPath()
