***
**canvas 图形gui**

electron + TypeScript + canvas

完成功能：旋转；移动；锚点；图层；上下级；
***
**运行**
```bash
electron . # 即可
```
**example**
```TypeScript
/**
 * the most easily example .
 * draw a line.
 * it will creat a world ,it's size is the window's size.
 */
import {Line, World} from "src/qi";
let world=new World({})；// 创建世界
let ll= new Line().moveTo(0,0).lineTo(100,100)；// 直线
ll.stroke().endPath()；// 绘制，结束路径
```
***
