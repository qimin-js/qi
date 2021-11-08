import {StatusPolygon} from "qi/polygon/statusPolygon";
import {Button} from "qi/widget/button";

export class StatusBtn extends StatusPolygon{
    grap:Button
    constructor(grap:Button) {
        super(grap);
        this.grap=grap
    }
    // 获取边框宽度
    get border(){return this.strokeWidth}
    // 设置边框宽度
    set border(v){
        this.strokeWidth=v
        this.grap.status.stroke=true
    }
    // 设置边框宽度
    setBorder(v:number){this.border=v;return this}
    get color(){return this.grap.text.status.color}
    set color(v){this.grap.text.status.color=v}
    setColor(v:string){this.color=v;return this}
    get size(){return this.grap.text.status.size}
    set size(v){this.grap.text.status.size=v}
    getSize(v:number){this.size=v}
}
