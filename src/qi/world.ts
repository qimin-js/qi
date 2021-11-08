import {RefactorAnime} from "qi/refactorAnime";
import {EventsHelp} from "qi/eventsHelp";
import {Line} from "qi/line";
import {attr} from "qi/attr";
import {can} from "qi/can";
import {Translate} from "qi/world/translate";
import {Scale} from "qi/world/scale";
type worldObj={
    width?:number
    height?:number
}
let worldInit={
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight
}
class World {
    refactorAnime = new RefactorAnime()
    helpEvent = new EventsHelp()
    translate=new Translate(this)
    scale=new Scale(this)

    /**
     * you can creat a world ,just like <body>.
     * @param obj
     */
    constructor(obj: worldObj) {
        this.anime()
        this.helpEvent.click()
        if(!obj.width)obj.width=worldInit.width
        if(!obj.height)obj.height= worldInit.height
        attr.size.width=obj.width
        attr.size.height=obj.height
        can.can.width=attr.size.width
        can.can.height=attr.size.height

        // can.ctx.translate(1,1) ;// 世界位移
        // let dashLineX=new Line()
        // let dashLineY =new Line()
        // dashLineX.lineWidth=1
        // dashLineX.moveTo(1,1).dashlineTo(attr.size.width,1,[10,10])
        //     .stroke().endPath()
        // dashLineY.lineWidth=1
        // dashLineY.moveTo(1,1).dashlineTo(1,attr.size.height,[10,10])
        //     .stroke().endPath()
    }

    anime() {
        this.refactorAnime.start()
    }
    // stop the 60 frame anime
    animeStop() {
        this.refactorAnime.stop()
    }
    // it can show you mouse pos at left bottom screen.
    showMousePosition() {
        this.helpEvent.showMousePosition()
    }
}

export {World}