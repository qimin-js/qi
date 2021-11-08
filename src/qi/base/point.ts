interface point{
    x:number,
    y:number
}
class Point implements point{
    x: number;
    y: number;
    constructor(x:number,y:number) {
        this.x=x;
        this.y=y
    }
    transform(point:Point){
        this.x+=point.x
        this.y+=point.y
        return this
    }
    clone(){
        return new Point(this.x,this.y)
    }
}
export {Point}