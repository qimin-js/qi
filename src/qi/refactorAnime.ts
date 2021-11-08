import {allLine, allRect, allText} from "qi/saveContainer";
import {Container} from "qi/container";
import {Graphics} from "qi/graphics";
import {Line} from "qi/line";
// import {Rect} from "qi/rect";
import {Polygon} from "qi/polygon";

import {Text} from "qi/text";

import {can} from "qi/can";
import {attr} from "qi/attr";
class RefactorAnime{
    private update:()=>void
    private cancleId:number
    start(){
        this.update=()=> {
            // console.log(1)
            let width=attr.size.width
            let height=attr.size.height
            let offsetX=attr.offset.x
            let offsetY=attr.offset.y
            can.ctx.globalCompositeOperation="destination-over";
            can.ctx.clearRect(-offsetX,-offsetY,width+offsetX,height+offsetY)
            type add= Polygon | Text | Line;
            let group:Array<add[]>=[];
            // let group:Array<Text[]>=[]
            for (const params of allRect.child) {// 所有图形重绘
                if(params.vertexs.points.length == 0 || params.vertexs.points.length == 1)continue
                if(!params.status.viewAble)continue // 不可见 不重绘
                // params.geometry.refactor()
                if(group[params.group] == undefined )group[params.group]=[]
                group[params.group].push(params);
            }
            for (let params of allText.child) { // 文字
                // params.geometry.refactor()
                if(group[params.group] == undefined )group[params.group]=[]
                group[params.group].push(params);
            }
            for (const params of allLine.child) { // 线段
                // params.geometry.refactor()
                if(group[params.group] == undefined )group[params.group]=[]
                group[params.group].push(params);
            }
            for (let i=0;i<group.length;i++) {// 根据图层 重绘
                if( group[group.length-i-1] != undefined && group[group.length-i-1].length != 0 ){
                    for (const pp of group[group.length-i-1]) {
                        pp.geometry.refactor()
                    }
                }
            }
            requestAnimationFrame(this.update)
        }
        this.cancleId= requestAnimationFrame(this.update)
    }
    stop(){
        cancelAnimationFrame(this.cancleId)
    }
}
export {RefactorAnime}