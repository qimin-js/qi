import {Graphics} from "qi/graphics";

class Transform{
    grap:Graphics
    private _x:number=0
    private _y:number=0
    constructor(grap:Graphics) {
        this.grap=grap
    }
    get x(){return this._x}
    get y(){return this._y}
    set x(v){
        this._x=v
        // this.grap.vertexs.draw()
    }
    set y(v){
        this._y=v
        // this.grap.vertexs.draw()
    }
}
export {Transform}