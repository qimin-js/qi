import {Graphics} from "qi/graphics";

class Pivot{
    grap:Graphics
    protected _x:number=0
    protected _y:number=0
    constructor(grap:Graphics) {
        this.grap=grap
    }
    get x(){return this._x}
    get y(){return this._y}
    set x(v){
        this._x=v
    }
    set y(v){
        this._y=v
    }
    // 旋转后才需要
    creat(){
        this._x=0;
        this._y=0
    }
}
export {Pivot}