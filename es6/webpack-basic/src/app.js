/**
 * Created by lcl on 2017/6/28.
 */
import BoxManager from "./BoxManager";
import EventManager from "./EventManager";
class App{

    constructor(){
        this.boxManager = new BoxManager();
        this.eventManager = new EventManager();
    }

    init(){
        this.boxManager.init(this);
        this.eventManager.init(this);
    }



}

var app = new App();
app.init();

