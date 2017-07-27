/**
 * Created by luchu on 2017/7/6.
 */
import $ from "jquery"
import BoxManager from "./BoxManager"
export default class EventManager{

    constructor(){
    }

    init(app){
        this.app = app;
        this.boxManager = this.app.boxManager;
        this.bindingEvents();
    }

    bindingEvents(){
        let that = this;
        this.boxManager.getBox().on('click',function(){
            that.boxManager.changeColor();
        });
    }




}