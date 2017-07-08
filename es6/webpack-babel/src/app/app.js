/**
 * Created by luchu on 2017/7/8.
 */
import $ from "jquery";
import  DomManager from "./DomManager"
class App{

    constructor(){
        this.domManager = DomManager.getInst();
    }

    init(){
        this.domManager.init();
    }
}

var app = new App();
app.init();