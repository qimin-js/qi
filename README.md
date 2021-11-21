**Canvas Gui**

electron + TypeScript + canvas

完成：旋转；移动；锚点；图层；上下级；

**Install**
```bash
npm install
```
**Run**
```bash
# npm run copyJS copy html，css files to dist folder，
# npm run path 编辑import路径 
npm run build && npm run copyJS && npm run path && electron .
```
**Example**
```TypeScript
import {Line, World} from "src/qi"
let world=new World({})
let ll= new Line().moveTo(0,0).lineTo(100,100)
ll.stroke().endPath()
```
***
