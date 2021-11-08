import {World} from "qi/world";
import {can} from "qi/can";

class Scale{
    world:World
    private _x:number=1
    private _y:number=1
    constructor(world:World) {
        this.world=world
    }
    get x(){return this._x}
    get y(){return this._y}
    set x(v){
        can.ctx.scale(1/this._x,1/this._y)
        this._x=v
        can.ctx.scale(this._x,this._y)
    }
    set y(v){
        can.ctx.scale(1/this._x,1/this._y)
        this._y=v
        can.ctx.scale(this._x,this._y)
    }
}
export {Scale}