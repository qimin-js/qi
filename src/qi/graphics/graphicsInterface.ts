import {Point} from "qi/base/point";

interface GraphicsInterface{
    /**
     * 移动
     * @param x
     * @param y
     * @param geometry
     */
    moveTo(x:number,y:number,geometry:boolean):this

    /**
     * 清除图形(隐形)
     */
    clear():this

    /**
     * 绘制图形线框
     */
    stroke():this

    /**
     * 填充图形
     */
    fill():this

    /**
     * 闭合路径
     */
    closePath():this

    /**
     * 结束当前路径
     */
    endPath():this
}
export {GraphicsInterface}