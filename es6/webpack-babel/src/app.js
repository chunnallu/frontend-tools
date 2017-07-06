/**
 * Created by lcl on 2017/6/28.
 */
import BoxManager from "./BoxManager";
import EventManager from "./EventManager";
class App{

    contructor(){
        this.boxManager = BoxManager.getInst();
        this.eventManager = EventManager.getInst();
    }

    init(){
        console.log(this.boxManager);
        this.boxManager.init();
        this.eventManager.init();
    }


}

var app = new App();
app.init();
