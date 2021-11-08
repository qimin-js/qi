***
**canvas 图形gui**
使用electron + TypeScript + canvas
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
let world=new World({})
let ll= new Line().moveTo(0,0).lineTo(100,100)
ll.stroke().endPath()
```
***
