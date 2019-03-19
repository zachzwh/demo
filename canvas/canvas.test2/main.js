var yyy = document.getElementById('xxx');

resetWH();

window.onresize = function(){       //监听宽高变化
    resetWH();
}

function resetWH(){         //获取页面宽高
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;

    yyy.width = pageWidth;
    yyy.height = pageHeight;
}

var context = yyy.getContext('2d');

function drawCircle(x, y, radius){
    context.fillStyle = 'cyan';
    context.beginPath();
    context.arc (x,y,radius,0, Math.PI*2);
    context.fill();
}

function drawLine(x1, y1, x2, y2){
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineWidth = 2;
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}


var using = false;
var lastPoint = {x: undefined, y:undefined}

yyy.onmousedown = function(down){
    using = true;
    var x = down.clientX;           //相对于视窗的位置而非canvas的位置
    var y = down.clientY;
    lastPoint = {"x": x, "y": y}
    //drawCircle(x,y,1);
}

yyy.onmousemove = function(move){
    if (using){
        var x = move.clientX;       //相对于视窗的位置而非canvas的位置
        var y = move.clientY;
        var newPoint = {"x": x, "y": y}
        //drawCircle(x,y,2);
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint;           //更新上一个点
    }
}

yyy.onmouseup = function(up){
    using = false;
}
