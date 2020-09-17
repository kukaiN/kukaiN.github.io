
<head>
<title>solver for financial Math</title>
<script src="fm.js" type="text/javascript"></script>
<style>
.decInput{
    name: "input a number";
    placeholder:"placeholder";
    type: "number";
    value:0;
}


</style>


</head>

<div>
<label> number of Stocks (default to 2)</label>
<input type="number" value="3" min="1" max="5" id="stock_num" class="bttn" style="width:40px"/>


html table:


<table id ="portfolioTable">
<tr>
    <th>scenarios</th>
    <th>P of wi</th>
    <th>K1</th>
    <th>K2</th>
</tr>
<tr>
    <td>w1</td>
    <td><input class="decInput" id="p1"/></td>
    <td><input class="decInput" id="k11"/></td>
    <td><input class="decInput" id="k21"/></td>
</tr>
<tr>
    <td>w2</td>
    <td><input class="decInput" id="p2"/></td>
    <td><input class="decInput" id="k12"/></td>
    <td><input class="decInput" id="k22"/></td>
</tr>
<tr>
    <td>w3</td>
    <td><input class="decInput" id="p3"/></td>
    <td><input class="decInput" id="k13"/></td>
    <td><input class="decInput" id="k23"/></td>
</tr>
</table>
<input type="button" id="calculateBttn" value="start calculation" onclick="startCalc()"/>
<br/>
<div id="outputSpace">



</div>
</div>




markdown table:

| h1 | hg2 | djdwqdv|
|-|-|-|
|val1 | vak2 | val3 |