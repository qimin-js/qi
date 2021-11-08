import {Graphics} from "qi/graphics";

interface ContainerInterface <T extends Graphics>{
    child:Array<T>

    /**
     * 添加图形
     * @param grap
     */
    add(grap:T):this

    /**
     * 清除 并 移除 集合中所有图形(干净，慎用)
     */
    clear():this

    /**
     * 将图形移出集合，不清除图形
     * @param grap
     */
    //remove(grap:T):this

    /**
     * 将图形移出集合，并清除图形
     * @param grap
     */
    //remove_clear(grap:T):this
}
export {ContainerInterface}