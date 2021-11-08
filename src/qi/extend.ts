import {arrayCut} from "qi/extend/arrayCut";
import {arrayLast} from "qi/extend/arrayLast";
import {arrayRemove} from "qi/extend/arrayRemove";
import {arrayHas} from "extend/arrayHas";
import {arrayRemoveRepeat} from "extend/arrayRemoveRepeat";

Array.prototype.cut=arrayCut// 数组切片
Array.prototype.last=arrayLast
Array.prototype.remove=arrayRemove
Array.prototype.has=arrayHas
Array.prototype.removeRepeat=arrayRemoveRepeat