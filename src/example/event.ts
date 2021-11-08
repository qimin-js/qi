import {World} from "src/qi";
let world=new World({})
world.showMousePosition()
import {Button} from "qi/widget";
let ll=new Button({
    width:50,
    height:50,
    x:400,
    y:400,
    innerText:"1111"
})
ll.event.onClick=function (){
    console.log(222)
    ll.fill("#f00")
}
ll.event.onMouseOver=function (){
    ll.text.status.inner="里面"
}
ll.event.onMouseOut=function (){
    ll.text.status.inner="出去"
}