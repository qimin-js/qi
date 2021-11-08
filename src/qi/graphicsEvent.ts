import {Point} from "qi/base/point";
import {Rect} from "qi/rect";
import {Circle} from "qi/circle";
type all=Rect | Circle
type eventName = "clickContainer" | "mouseOverContainer" | "mouseOutContainer"
let can=document.getElementById('can2')!
class GraphicsEvent{
    private clickContainer:Array<all>=[]
    private mouseOverContainer:Array<all>=[]
    private mouseOutContainer:Array<all>=[]
    canMouseMoveFuncs:Array<(e:MouseEvent)=>void>=[]
    // add click function,what function need run in the click event,only provide for polygon use
    addClickFunc(grap:all){
        this.clickContainer.push(grap)
        this.clickContainer=Array.from(new Set(this.clickContainer))
    }
    // add mouseOver function,what function need run in the mouseOver event,only provide for polygon use
    addMouseOverFunc(grap:all){
        this.mouseOverContainer.push(grap)
        this.mouseOverContainer=Array.from(new Set(this.mouseOverContainer))
    }
    // use it is simple,use above function is to long.
    addFunc(eventName:eventName,grap:all){
        this[eventName].push(grap)
        this[eventName]=Array.from(new Set(this[eventName]))// 去重
    }
    // click event ,the iterator will run any clickContainer's function
    click(){
        can.onclick= (e)=>{
            let clickPoint=new Point(e.offsetX,e.offsetY)
            console.log(clickPoint)
            for (let params of this.clickContainer) {
                // if click point in the rect space
                if(params.flat.inFlat(clickPoint)){
                    setTimeout(params.event.onClick,0)
                }
            }
        }
    }
    // when you mouse move to the rect space . it will work
    mouseOver() {
        this.canMouseMoveFuncs.push( (e:MouseEvent)=>{
            let clickPoint=new Point(e.offsetX,e.offsetY)
            // console.log(clickPoint)
            for (let params of this.mouseOverContainer) {
                // console.log(params.flat.inFlat(clickPoint))
                // when you mouse at the rect space . this event only do once.
                if(!params.status.mouseOver && params.flat.inFlat(clickPoint)){
                    params.status.mouseOver=true;
                    params.status.mouseOut=false
                    setTimeout(params.event.onMouseOver,0)
                }
            }
        })
    }
    mouseOut(){
        this.canMouseMoveFuncs.push( (e:MouseEvent)=>{
            let clickPoint=new Point(e.offsetX,e.offsetY)
            // console.log(clickPoint)
            for (let params of this.mouseOutContainer) {
                // console.log(params.flat.inFlat(clickPoint))
                if(!params.flat.inFlat(clickPoint)){
                    params.status.mouseOut=true;
                    params.status.mouseOver=false
                    setTimeout(params.event.onMouseOut,0)
                }
            }
        })
    }
    // creat event .
    // mouseOver and mouseOut both need mouseMove event.
    creat(){
        can.onmousemove= (e)=>{
            for (const params of this.canMouseMoveFuncs) {
                params(e)
            }
        }
    }
}
let graphicsEvent=new GraphicsEvent()
// 要开启的事件
graphicsEvent.click()
graphicsEvent.mouseOver()
graphicsEvent.mouseOut()
graphicsEvent.creat()
export {graphicsEvent}