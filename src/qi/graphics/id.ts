class Id{
    id:number=1
    save:Array<number>=[]
    constructor() {

    }
    next(){
        this.id+=1
        this.save.push(this.id)
        return this.id
    }
    has(target:number){
        for (const params of this.save) {
            if(target === params)return true
        }
        return false
    }
}
let id=new Id()
export {id}