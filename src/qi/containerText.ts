import {Text} from "qi/text";
class ContainerText{
    child:Array<Text>=[]
    add(text:Text){
        this.child.push(text)
        return this
    }
}
export {ContainerText}
