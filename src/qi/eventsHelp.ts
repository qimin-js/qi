import {Point} from "qi/base/point";
import {Text} from "qi/text";
import {attr} from "qi/attr";

class EventsHelp {
    ele=document.getElementById('can1')!
    showMousePositionText:Text=new Text("0 0",new Point(50,attr.size.height))
    click(){
        this.ele.onclick=function (e){
            let x=e.offsetX
            let y=e.offsetY
            // eventPoint.click=new Point(x,y)
            // console.log(x,y)
        }
        return this
    }
    showMousePosition(){
        this.ele.onmousemove= (e)=>{
            let x=e.offsetX
            let y=e.offsetY
            // eventPoint.mouseMove=new Point(x,y)
            // console.log(x,y)
            this.showMousePositionText.status.inner=x.toString()+' '+y.toString()
            // console.log(this.showMousePositionText)
        }
        return this
    }
}
export {EventsHelp}