
<head>
    <title>solver for financial Math</title>
    <script src="fm.js" type="text/javascript"></script>
    <style>
        .decInput{
            name: "input a number";
            placeholder:"placeholder";
            type: "number";
        }
        .portfolioTable{
            border: 1px solid black;
            text-align:right;
        }
        .portfolioTable tr td input{
            border-width:0px;
            border:none;
            width:"auto";
        }
    </style>
</head>

[go back](../)

Please Understand that computers represent numbers using floating point arithmetic so numbers like 0.99999999999 could be actually 1 and 0.30000000000000004 is actually 0.3.  floating point error happens after 10<sup>-8</sup> ~ 10<sup>-10</sup> digits, so be sure to round.

<div>
<label> number of Stocks (default to 2)</label>
<input type="number" value="3" min="1" max="5" id="stock_num" class="bttn" style="width:40px"/>

<table id ="portfolioTable">
<caption>html table:</caption>
<tr>
    <th scope="col">scenarios</th>
    <th scope="col">P of wi</th>
    <th scope="col">K1</th>
    <th scope="col">K2</th>
</tr>
<tr>
    <th scope="row">w1</th>
    <td><input class="decInput" id="p1"/></td>
    <td><input class="decInput" id="k11"/></td>
    <td><input class="decInput" id="k21"/></td>
</tr>
<tr>
    <th scope="row">w2</th>
    <td><input class="decInput" id="p2"/></td>
    <td><input class="decInput" id="k12"/></td>
    <td><input class="decInput" id="k22"/></td>
</tr>
<tr>
    <th scope="row">w3</th>
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