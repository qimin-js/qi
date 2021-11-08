class Can{
    can = <HTMLCanvasElement> document.getElementById("can")!;
    ctx:CanvasRenderingContext2D = this.can.getContext("2d")!;
}
let can=new Can()
export {can}