import {Point} from "qi/base/point";
import {Vector} from "qi/base/vector";

import {Polygon} from "qi/polygon";

class Flat{
    /**
     * 创建平面
     * @param points 必须是顺时针排序的点
     */
    grap:Polygon
    constructor(grap:Polygon) {
        this.grap=grap
    }

    area(){
        let target=this.grap.vertexs.points
        let area=0;
        for(let i=0;i<target.length;i+=1){
            let p1=new Vector(new Point(target[0].x,target[0].y),new Point(target[i+1].x,target[i+1].y))
            if(!target[i+2]) break;
            let p2=new Vector(new Point(target[0].x,target[0].y),new Point(target[i+2].x,target[i+2].y))
            // console.log(p1.cross(p2),p1,p2)
            area+=p1.cross(p2);
        }
        console.log(area)
        return area/2
    }
    inFlat(point:Point):boolean{
        //基本思想是利用射线法，计算射线与多边形各边的交点，如果是偶数，则点在多边形外，否则
        //在多边形内。还会考虑一些特殊情况，如点在多边形顶点上，点在多边形边上等特殊情况。
        let polygon=this.grap.vertexs.points
        let N = polygon.length;
        let boundOrVertex = true; //如果点位于多边形的顶点或边上，也算做点在多边形内，直接返回true
        let intersectCount = 0; //cross points count of x
        let precision = 2e-10; //浮点类型计算时候与0比较时候的容差
        let p1, p2; //neighbour bound vertices
        let p = point; //测试点

        p1 = polygon[0]; //left vertex
        for (let i = 1; i <= N; ++i) { //check all rays
            if (p.x == p1.x && p.y == p1.y) {
                return boundOrVertex; //p is an vertex
            }

            p2 = polygon[i % N]; //right vertex
            if (p.y < Math.min(p1.y, p2.y) || p.y > Math.max(p1.y, p2.y)) { //ray is outside of our interests
                p1 = p2;
                continue; //next ray left point
            }

            if (p.y > Math.min(p1.y, p2.y) && p.y < Math.max(p1.y, p2.y)) { //ray is crossing over by the algorithm (common part of)
                if (p.x <= Math.max(p1.x, p2.x)) { //x is before of ray
                    if (p1.y == p2.y && p.x >= Math.min(p1.x, p2.x)) { //overlies on a horizontal ray
                        return boundOrVertex;
                    }

                    if (p1.x == p2.x) { //ray is vertical
                        if (p1.x == p.x) { //overlies on a vertical ray
                            return boundOrVertex;
                        } else { //before ray
                            ++intersectCount;
                        }
                    } else { //cross point on the left side
                        let xinters = (p.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x; //cross point of x
                        if (Math.abs(p.x - xinters) < precision) { //overlies on a ray
                            return boundOrVertex;
                        }

                        if (p.x < xinters) { //before ray
                            ++intersectCount;
                        }
                    }
                }
            } else { //special case when ray is crossing through the vertex
                if (p.y == p2.y && p.x <= p2.x) { //p crossing over p2
                    let p3 = polygon[(i + 1) % N]; //next vertex
                    if (p.y >= Math.min(p1.y, p3.y) && p.y <= Math.max(p1.y, p3.y)) { //p.y lies between p1.y & p3.y
                        ++intersectCount;
                    } else {
                        intersectCount += 2;
                    }
                }
            }
            p1 = p2; //next ray left point
        }

        if (intersectCount % 2 == 0) { //偶数在多边形外
            return false;
        } else { //奇数在多边形内
            return true;
        }
    }
}
export {Flat}