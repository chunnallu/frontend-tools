/**
 * Created by luchu on 2017/7/6.
 */
import $ from "jquery"
import BoxManager from "./BoxManager"
let _inst;
export default class EventManager{

    static instance;
    static getInst(){
        _inst = _inst || new BoxManger();
        return _inst;
    }

    constructor(){

    }

    init(){
        this.bindingEvents();
    }

    bindingEvents(){
        let boxManager = BoxManger.getInst();
        let box = boxManager.getBox();
        box.on('click',boxManager.changeColor())
    }



}