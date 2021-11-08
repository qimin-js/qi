import {Graphics} from "qi/graphics";
// import {Rect} from "qi/rect";
import {ContainerInterface} from "qi/container/containerInterface";

class Container <T extends Graphics> implements ContainerInterface<Graphics>{
    child:Array<T>=[]

    add(grap:T){
        this.child.push(grap)
        return this
    }
    clear(){
        for (const params of this.child) {
            params.clear()
        }
        this.child=[]
        return this
    }
    // remove(grap:T){
    //     this.child.remove(grap)
    //     return this
    // }
    // remove_clear(grap:T){
    //     this.remove(grap)
    //     grap.clear()
    //     return this
    // }
}
export {Container}