/**
 * Created by luchu on 2017/6/30.
 */
/**
 * 提取href
 * @param a
 * @param b
 * @returns {*}
 */
function handleString(text){
    var start = text.indexOf("href");
    if(start!=-1){
        start+=6;
        var end = text.indexOf("'",start);
        return text.substring(start,end);
    }
    return "";
}

var text = "<a href='https://www.baidu.com/index.html'></a>";
var result = handleString(text);
console.log(result);

