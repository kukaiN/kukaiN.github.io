function startCalc(){
    var height = 3;
    var width = 2;
    x = getTable(portfolioTable);

}

function getTable(idVal ="numTable"){
    tableData = document.getElementById(idVal).rows;
    console.log(tableData);
    return tableData;
}


function listComp(funcName, valArray){
    // simple
    var outputs = [];
    for (var i=0;i<valArray;++i){
        outputs.push(funcName(valArray));
    }
    console.log(outputs);
    return outputs;
}
function elementWiseListComp(funcName, arrOfArr){
    // useful when applying function across the i-th items from each list in the list
    var outputs = [];
    var minSize = listComp(min, arrOfArr);
    var arrCount = arrOfArr.length;
    for (var j=0;j<minSize;++j){
        inputArr = [];
        for (var i=0;i<arrCount;++i){
            inputArr.push(arrOfArr[i][j]);
        }
        outputs.push(funcName(inputArr));
    }
    console.log(outputs);
    return outputs;
}



function square(val){
    return val*val;
}

function expectedVal(valArray, probArray){
    if valArray.length == probArray.length{
        arrlen = valArray.length;
        var expVal = 0;
        for (var i=0; i<arrlen;++i){
            expVal+=valArray[i]*probArray[i];
        }
        return expVal;
    }
    else{
      console.log("array size are not equal");
    }


}