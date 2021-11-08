interface VectorInterface{
    /**
     * 两向量 逆时针 夹角
     * @description b向量顺时针为 +
     * @description 逆时针为 -
     * @param b 向量
     * @return 弧度 [-Math.PI,Math.PI]
     */
    angle(b:this):number
    /**
     * 与x轴正方向夹角
     * @description (1,2象限为+，3，4象限为-)
     * @param b 弧度
     */
    angleToX(b:this):number
    /**
     * 与y轴正方向夹角
     * @description (1,4象限+,2,3象限-)
     * @param b 弧度
     */
    angleToY(b:this):number
    /**
     * 逆时针旋转
     * @param radian 弧度
     */
    rotateInverse(radian:number):this
    /**
     * 顺时针旋转
     * @param radian 弧度
     */
    rotateAlong(radian:number):this

    /**
     * 向量反向
     */
    opposite():this

    // /**
    //  * 根据 法向反弹
    //  * @param b 法线
    //  */
    // rebound(normal:this):this
}
export {VectorInterface}