class Security {
    constructor(p, k) {
        this.p = p;
        this.k = k;
        var proceed =  this.validation();
        if (proceed){
            this.expVal = E(this.k, this.p);
            this.E_squared = E_sq(this.k, this.p)
            this.Var = Var(this.k, this.p);
            this.stdev = Math.sqrt(this.Var);
            console.log("heres the data");
            console.log(this.expVal, this.E_squared, this.Var, this.stdev);
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

class Portfolio {
    constructor(p, k1, k2) {
        this.p = p;
        this.sec1 = new Security(p, k1);
        this.sec2 = new Security(p, k2);
        this.validity = false;
        if (this.sec1.validation() & this.sec2.validation()){
            this.validity = true;
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
    checkforShortSelling(portfolioA, portfolioB){
        if ((portfolioA instanceof Security) & (portfolioB instanceof Security)){
            if ((portfolioA.stdev * portfolioB.stdev) == 0){
                console.log("sigma1*sigma2 = 0")
            }

        }
        else{
            console.log("both parameters needs to be an instance of Security")
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
    var x = getTable("portfolioTable");
    var tableData = getTdVal(x, 1);
    console.log("got list:", tableData)
    let numericalTableData = convertMatrixEntrytoNum(tableData);
    let port1 = new Portfolio(colVal[0], colVal[1], colVal[2]);
    console.log(port1.p12)

}

/**
 * get the row and column elements from a table
 * @param  {Number} idVal The table id
 * @return {Number}      tuple of rows and columns
 */
function getTable(idVal ="numTable"){
    var tableData = document.getElementById(idVal);
    return tableData;
}

function convertArrayEntryToNum(arr){
    return listComp(parseFloat , arr);
}

function convertMatrixEntrytoNum(matrixA){
    var height = matrixA.length, i;
    for (i=0;i<height;++i){
        matrixA[i] = convertArrayEntryToNum(matrixA[i]);
    }
    return matrixA;
}

function getTableAsList(idVal ="numTable"){
    // use this if the shape of the table doesnt need to be conserved
    return document.querySelectorAll(idVal + " td");
}

/**
 * get the column elements from a table
 * @param  {DOM} tableObj the refrenece to the table
 * @return {Number}      Array that stores the values in the rows
 */
function getTdVal(tableObj, header_count=1){
    var row = tableObj.getElementsByTagName("tr"), arr=[];
    var cellCounts;
    var rowLen = row.length;// -1 because we dont need the header
    for (let i=header_count; i<rowLen; ++i){
        cells = row[i].getElementsByTagName("td");
        cellCounts = cells.length;
        arr.push([]);
        for (let j=0; j<cellCounts;++j){
            arr[i-header_count].push(cells[j].children[0].value);
        }
    }
    return arr;
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

/**
 * return the Transpose of the matrix/array, doesnt modify original
 * @param  {Array} MatrixA The matrix/array
 * @return {Array}      The transposed matrix
 */
function T(MatrixA){
    var j, originalWidth, transposed_matrix = [];
    // check if its an array of array
    if (MatrixA[0].constructor === Array){
        var i, originalHeight = MatrixA.length;
        originalWidth=MatrixA[0].length;

        for (j=0; j<originalWidth; ++j){
            transposed_matrix.push([]);
            for (i=0;i<originalHeight;++i){
                transposed_matrix[j].push(MatrixA[i][j]);
            }
        }
    }
    else{
        // not an array of array, something like [1, 2, 3]
        // need to convert it to [[1], [2], [3]]
        originalWidth = MatrixA.length;
        for (j=0;j<originalWidth;++j){
            transposed_matrix.push([MatrixA[j]])
        }
    }
    return transposed_matrix
}


// not done, buts a transposer for matrix with unequal child length
function T_irregular(MatrixA){
var i, j, transposed_matrix = [];
    var originalWidth, originalHeight;
    for (i=0; i<vec1.length; ++i){
        transposed_matrix.push([])
        if (vec1[i].constructor === Array){
            //pass
        }
        else{
            //pass
        }
    }
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