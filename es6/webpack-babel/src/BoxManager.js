/**
 * Created by luchu on 2017/7/6.
 */
import $ from "jquery"
let _inst;
export default class BoxManger{

    static getInst(){
        _inst = _inst || new BoxManger();
        return _inst;
    }

    constructor(){
        this.box = $(".box");
    }

    init(){
        this.height = this.box.css("height");
        this.width = this.box.css("width");
        this.box.css("left",`calc(50% - ${this.width}/2)`);
        this.box.css("top",`calc(50% - ${this.height}/2)`)
    }

    getBox(){
        return this.box;
    }

    changeColor(){
        this.box.css("background","#380383");
    }
}