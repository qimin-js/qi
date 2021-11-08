function arrayCut<T>(this:T[],start:number = 1, end:number=this.length ):T[]{
    if (start <= 0) throw new Error('cut形参1最小为1')
    if (start > this.length) throw new Error('超出字符串长度')
    let index = 1;
    let length = -this.length
    let arr:T[]= [];
    if (end > 0)
        for (let params of this) {
            if (index >= start) {
                arr.push(params)
            }
            if (index == end) return arr
            index += 1;
        }
    if (end < 0) {
        for (let params of this) {
            if (index >= start) {
                arr.push(params)
            }
            if (length >= end) return arr
            index += 1;
            length += 1
        }
    }
    return arr
}
export {arrayCut}