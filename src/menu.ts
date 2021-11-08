// import {remote}  from 'electron';
// import * as events from "src/event";
// import {grapCatch} from "menu/catch";
// import {pic} from "menu/pic";
// import {chooseBtnEvent} from "src/event";
//
// import {EditMenu} from "menu/edit";
// import {phyMenu} from "menu/phy";
// import {MessageMenu} from "menu/message";
// import {File} from "menu/file";
//
// import {Graphics} from "qi/graphics";
// import {attr} from "src/attr";
// import {Container} from "src/qi";
//
// const {Menu, MenuItem} = remote;
//
// //右键餐单
// class rightClickMenu{
//     menu = new Menu();
//     base():this{
//         this.menu.append(new MenuItem({
//             label:'选择图形',
//             click:chooseBtnEvent
//         }))
//         this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         let newGrapMenu= new MenuItem({
//             label:'新建图形',
//             submenu:[{
//                 label:'连线', click:events.lineBtnEvent},{
//                 label:'矩形', click:events.drawRectBtnEvent},{
//                 label:'圆',click:events.drawCircleEvent}
//             ]
//         })
//         this.menu.append(newGrapMenu);
//         this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         this.menu.append(grapCatch);// 图形捕捉
//         this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         this.menu.append(pic) ;// 图片
//         this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         this.menu.append(new MenuItem({label:'test'}));// 无功能
//         return this
//     }
//     grap(container:Container<Graphics>):this{
//         // this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         this.menu.append(new EditMenu(container).move().rotation().create())// 编辑图形菜单
//         return this
//     }
//     phy(container:Container<Graphics>):this{
//         this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         this.menu.append(new phyMenu(container).phy().create())// 物理化菜单
//         return this
//     }
//     message(container:Container<Graphics>):this{
//         this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         this.menu.append(new MessageMenu(container).size().range().create())// 物理化菜单
//         return this
//     }
//     file(container:Container<Graphics>):this{
//         this.menu.append(new File(container).export().import().create())
//         this.menu.append(new MenuItem({type: 'separator'}));//分割线
//         return this
//     }
// }
// attr.rightClickMenu=new rightClickMenu()
// export {rightClickMenu}