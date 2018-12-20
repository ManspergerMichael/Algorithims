floodFill = function(canvas, startPoint, newColor){
    var oldColur = canvas[startPoint[0]] [startPoint[1]];
    if(startPoint[0]+1 < canvas[0].length
        && canvas[startPoint[0]+1][startPoint[1]] === oldColur){
        var nextPoint = [startPoint[0]+1,startPoint[1]];
        floodFill(canvas,nextPoint,newColur);
    }
    //RangeError: Maximum call stack size exceeded
    if(startPoint[0]-1 != -1 
        && canvas[startPoint[0]-1][startPoint[1]] === oldColur){
        var nextPoint = [startPoint[0]-1,startPoint[1]];
        floodFill(canvas,nextPoint,newColur);
    }

    //other if statements go here
    canvas [startPoint[0]] [startPoint[1]] = newColor;
}

canvas = [[3,2,3,4,3],
          [2,3,3,4,0],
          [7,3,3,5,3],
          [6,5,3,4,1],
          [1,2,3,3,3]];

startPoint = [2,2];
newColur = 1;
floodFill(canvas,startPoint,newColur);

for(var i = 0;i < canvas.length; i++){
    console.log(canvas[i]);
}