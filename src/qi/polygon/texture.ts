import {Polygon} from "qi/polygon";
import {can} from "qi/can";
// let ii=document.getElementById('texture')! as HTMLImageElement
class Texture{
    grap:Polygon
    src:string=""
    cut:[number,number,number,number]
    img:HTMLImageElement=new Image()
    constructor(grap:Polygon) {
        this.grap=grap
    }
    drawimg(src:string,cut:[number,number,number,number]=[0,0,100,100]){
        this.img.onload= ()=>{
            console.log(this.grap.vertexs.points[0].x,this.grap.vertexs.points[0].y,this.grap.size.width,this.grap.size.height)
            can.ctx.drawImage(this.img,...cut,this.grap.vertexs.points[0].x+this.grap.transform.x,this.grap.vertexs.points[0].y,this.grap.size.width,this.grap.size.height)
        }
        this.grap.status.drawImg=true
        this.cut=cut
        this.src=src
        this.img.src=src
        return this.grap
    }
    refactor(){
        can.ctx.drawImage(this.img,...this.cut,this.grap.vertexs.points[0].x+this.grap.transform.x,this.grap.vertexs.points[0].y,this.grap.size.width,this.grap.size.height)
    }
}
export {Texture}