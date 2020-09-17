class security {
    constructor(p, k) {
        this.p = p;
        this.k = k;
        var proceed =  this.validation();
        if (proceed){
            this.expVal = E(this.k, this.p);
            this.E_squared = E_sq(this.k, this.p)
            this.Var = Var(this.k, this.p);
            this.stdev = Math.sqrt(this.Var);
        }
        else{
            console.log("couldnt calculate E[X], Var(x) and stdev(x)");
            this.expVal = 0;
            this.E_squared = 0;
            this.Var = 0;
            this.stdev = 0;
        }
    }
    validation(){
        var pLen = this.p.length;
        var kLen = this.k.length;
        var valid = true;
        if (pLen<kLen){
            console.log("the probability list is smaller than the security list");
            valid = false;
        }
        if (kLen<pLen){
            console.log("the security list is smaller than the probability list");
            valid = false;
        }
        if (Math.abs(sum(pLen)-1) > 0.0001){
            console.log("please check your probabilities, doesnt sum to 1");
            valid = false;
        }
        return valid;
    }
}

class portfolio {
    constructor(p, k1, k2) {
        this.p = p;
        this.sec1 = new security(p, k1);
        this.sec2 = new security(p, k2);
        if (this.sec1.validation() & this.sec2.validation()){
            this.E_k1K2 = E(listComp(mulAcross(k1, k2)), p);
            this.cov = this.E_k1K2 - (this.sec1.expVal * this.sec2.expVal);
            this.p12 = this.cov / (this.sec1.stdev * this.sec2.stdev);
        }
        else{
            console.log("error calculating covariance and p12")
            this.E_k1K2 = 0;
            this.cov = 0;
            this.p12 = 0;
        }
    }
}

/**
 * Starts the calculator
 * @param  {Number} num1 The first number
 * @param  {Number} num2 The second number
 * @return {Number}      The total of the two numbers
 */
function startCalc(){
    var height = 3;
    var width = 2;
    x = getTable("portfolioTable");
    colVal = getColVal(x);
}

/**
 * get the row and column elements from a table
 * @param  {Number} idVal The table id
 * @return {Number}      tuple of rows and columns
 */
function getTable(idVal ="numTable"){
    tableData = document.getElementById(idVal).rows;
    console.log(tableData);
    return tableData;
}

/**
 * get the column elements from a table
 * @param  {Number} tableObj the refrenece to the table
 * @return {Number}      Array that stores the values in the rows
 */
function getColVal(tableObj){
    var arr = tableObj.getElementByTagName("tr");
    console.log(arr);
    var row = tableData.rows;
    console.log(row);
    return row;
}

/**
 * Apply a function on each element in the array
 * @param  {Number} funcName The function that is being applied
 * @param  {Number} arrOfArr An array that stores something
 * @return {Number}      a single array, function applied to each value
 */
function listComp(funcName, valArray){
    // simple list comprehension, can only access one element
    var outputs = [];
    var i;
    var L = valArray.length;
    for (i=0;i<L;++i){
        outputs.push(funcName(valArray));
    }
    console.log(outputs);
    return outputs;
}

/**
 * Apply a function using the i-th element from each array
 * @param  {Number} funcName The function that is being applied
 * @param  {Number} arrOfArr An array of arrays that stores number
 * @return {Number}      a single array, i-th output is from the function applied on i-th index
 */
function elementWiseListComp(funcName, arrOfArr){
    // useful when applying function across the i-th items from each list in the list
    // only goes to the minimum i-th index, if the sizes are different
    var outputs = [];
    var minSize = listComp(Math.min, arrOfArr);
    var arrCount = arrOfArr.length;
    var j;
    for (j=0;j<minSize;++j){
        inputArr = [];
        var i;
        for (i=0;i<arrCount;++i){
            inputArr.push(arrOfArr[i][j]);
        }
        outputs.push(funcName(inputArr));
    }
    console.log(outputs);
    return outputs;
}


/**
 * Square a number
 * @param  {Number} val The value to be squared
 * @return {Number}      The value squared
 */
function square(val){
    return val*val;
}

/**
 * take a number to the n-th power, n is a non-negative integer
 * @param  {Number} val The value to be raised to the n-th power
 * @return {Number}      X^n
 */
function pow(val, n){
    n = int(n);
    if (val == 1){
        return 1;
    }
    if (n == 0){
        return 1;
    }
    if (n%2 == 0){
        return pow(val*val, int(n/2));
    }
    if (n%2 == 1){
        return pow(val, n-1)*val;
    }
}


function T(vec1){
    var a = 1;
}

function innerProd(vec1, vec2){
    var a = 1;
}

/**
 * Calculate the expected value of the given RV and associated P
 * @param  {Array} valArray The values of RV
 * @param {Array} probArray The probabilities for the RV
 * @return {number}         The expected value
 */
function E(valArray, probArray){
    // Validate the inputs
    // For now, assume sum(prob) = 1
    if (valArray.length == probArray.length){
        arrlen = valArray.length;
        var expVal = 0;
        var i;
        for (i=0; i<arrlen;++i){
            expVal+=valArray[i]*probArray[i];
        }
        return expVal;
    }
    else{
      console.log("array size are not equal");
    }
}


/**
 * Calculate the expected value of the given RV squared
 * @param  {Array} valArray The values of RV
 * @param {Array} probArray The probabilities for the RV
 * @return {number}         E[X^2]
 */
function E_sq(valArray, probArray){
    return E(listComp(square, valArray), probArray);
}

function mulAcross(valArray1, valArray2){
    outputArray = [];
    var i;
    var L = Math.min(valArray1.length, valArray2.length);
    for (i=0;i<L; ++i){
        outputArray.push(valArray1[i]*valArray2[i]);
    }
    return outputArray;

}

/**
 * Calculate the Variance of the given RV and associated P
 * @param  {Array} valArray The values of RV
 * @param {Array} probArray The probabilities for the RV
 * @return {number}         The variance
 */
function Var(valArray, probArray){
    // Validate the inputs
    // For now, assume sum(prob) = 1
    if (valArray.length == probArray.length){
        var expected = E(valArray, probArray);
        var E_ValSquared = E(listComp(square, valArray), probArray);
        var variance = E_ValSquared - (expected*expected);
        return variance;
    }
    else{
      console.log("array size are not equal");
    }
}