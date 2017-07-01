/**
 * Created by luchu on 2017/7/1.
 */
class App{

    contructor(){

    }

    init(){
        this.box = $("#box");
        this.height = this.box.css("height");
        this.width = this.box.css("width");
        this.box.css("left",`calc(50% - ${this.width}/2)`);
        this.box.css("top",`calc(50% - ${this.height}/2)`)
    }
}

var app = new App();
app.init();