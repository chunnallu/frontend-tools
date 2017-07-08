/**
 * Created by luchu on 2017/7/8.
 */
import $ from "jquery";
export default class DomManager{

    static getInst(){
        DomManager._inst = DomManager._inst ? DomManager._inst : new DomManager();
        return DomManager._inst;
    }

    constructor(){
        this.body = $("body");
    }

    init(){
        this.body.append("<a href='#end' id='start'>你好</a>");
        this.body.append("<a href='#start' id='end' style='margin: 800px auto;display: block'>再见</a>");
    }
}
