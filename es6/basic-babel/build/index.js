"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by lcl on 2017/6/28.
 */
var App = function () {
    function App() {
        _classCallCheck(this, App);
    }

    _createClass(App, [{
        key: "contructor",
        value: function contructor() {}
    }, {
        key: "init",
        value: function init() {
            this.box = $("#box");
            this.height = this.box.css("height");
            this.width = this.box.css("width");
            this.box.css("left", "calc(50% - " + this.width + "/2)");
            this.box.css("top", "calc(50% - " + this.height + "/2)");
        }
    }]);

    return App;
}();

var app = new App();
app.init();