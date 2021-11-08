import {World} from "qi/world";
import {can} from "qi/can";
import {attr} from "qi/attr";

class Translate{
    world:World
    private _x=0
    private _y=0
    constructor(world:World) {
        this.world=world
    }
    get x(){return this._x}
    get y(){return this._y}
    set x(v){
        can.ctx.translate(-this._x,-this._y)
        this._x=v
        can.ctx.translate(this._x,this._y)
        attr.offset.x=this._x
    }
    set y(v){
        can.ctx.translate(-this._x,-this._y)
        this._y=v
        can.ctx.translate(this._x,this._y)
        attr.offset.y=this._y
    }
}
export {Translate}