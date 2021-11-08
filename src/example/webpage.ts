import {World,Button} from "src/qi";
import {Text} from "qi/text";
import {Point} from "qi/base/point";
import {can} from "qi/can";

import {Rect} from "src/qi";
import {attr} from "qi/attr";
let world=new World({
    height:3000
})
world.showMousePosition()
let head= new Rect().moveTo(0,0).lineTo(attr.size.width,200).fill("#009fcc").endPath()
can.ctx.fillStyle="#f00"
let headText= new Text("qimin博客",new Point(20,100))
headText.status.color="#fff"
headText.status.setSize(40).setWeight(500)
headText.status.align=["left","bottom"]
head.child.add(headText)
headText.group=1
let homePageBtn= new Button({
    x:head.size.width/10*6,y:head.size.height-60,
    innerText:"首页"
})
homePageBtn.group=1
homePageBtn.status.setColor("#fff")
let articleFather=new Rect()
articleFather.moveTo(100,head.size.height + 30 ).line(900,1500)
    .stroke().endPath()
for (let i = 0; i < 10; i++) {
    let article=new Rect()
    article.moveTo(70,30 + i * 135).line(700,130).stroke().endPath()
    let articleHead=new Text("hello qi",new Point(10,   25))
    articleHead.status.setColor("#5E72B3").setAlign(["left","middle"]).setSize(20)
    articleHead.group=1
    let articleIntroduction= new Text("articleIntroduction",new Point(5,40))
    articleIntroduction.status.setAlign(["left","top"])
    articleIntroduction.group=1
    let articleTime= new Text("发表于2020-9-13",new Point(10,article.size.height))
    articleTime.status.setAlign(["left","bottom"])
    articleTime.group=1
    article.child.add(articleHead)
    article.child.add(articleIntroduction)
    article.child.add(articleTime)
    articleFather.child.add(article)
}
console.log(headText.size.width)