import {Polygon} from "qi/polygon";
import {graphicsEvent} from "qi/graphicsEvent";

class Event {
    polygon:Polygon
    private _onClick:()=>void
    private _onMouseOver:()=>void
    private _onMouseOut:()=>void
    constructor(polygon:Polygon) {
        this.polygon=polygon
    }
    get onClick(){return this._onClick}
    get onMouseOver(){return this._onMouseOver}
    get onMouseOut(){return this._onMouseOut}
    // click event
    set onClick(func:()=>void){
        this._onClick=func;
        graphicsEvent.addFunc("clickContainer",this.polygon)
    }
    // mouse over event
    set onMouseOver(func:()=>void){
        this._onMouseOver=func
        graphicsEvent.addFunc("mouseOverContainer",this.polygon)
    }
    // mouse out event
    set onMouseOut(func:()=>void){
        this._onMouseOut=func
        graphicsEvent.addFunc("mouseOutContainer",this.polygon)
    }
}
export {Event}
