function arrayRemove<T>(this:T[],target:T) {
    let index = -1;
    for (let params of this) {
        index += 1;
        if (params == target) {
            this.splice(index, 1)
            return this
        }
    }
    return this
}
export {arrayRemove}