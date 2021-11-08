import {Container} from "qi/container";
import {ContainerText} from "qi/containerText";
import {Line} from "qi/line";
import {Graphics} from "qi/graphics";
import {Polygon} from "qi/polygon";

let allRect = new Container<Polygon>()
let allText=new ContainerText()
let allLine=new Container<Line>()
export {allRect,allText,allLine}