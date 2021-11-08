function arrayLast<T>(this:T[]) :T{
    return this[this.length - 1]
}
export {arrayLast}