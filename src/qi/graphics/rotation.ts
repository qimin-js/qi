import {Graphics} from "qi/graphics";

class Rotation{
    grap:Graphics
    private _radian:number=0
    constructor(grap:Graphics) {
        this.grap=grap
    }
    get radian(){return this._radian}
    set radian(v){
        this._radian==0 && this.grap.pivot.creat()
        this._radian=v
        // console.log(this._radian)
        // this.grap.vertexs.draw()
    }
}
export {Rotation}