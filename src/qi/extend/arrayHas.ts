function arrayHas<T>(this:T[],attr:T):boolean{
    for (let params of this) {
        if(params==attr)return true
    }
    return false
}
export {arrayHas}