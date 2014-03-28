<!DOCTYPE html>
<html>
<body>

<p>Click the button to create a variable, and display the result.</p>

Target Bodyfat Percentage <input type="number" id="target_bodyfat_pct" /></br>
        <input type="button" value="CALCULUS" onclick="myFunction()" />

<input type="text" name="abc" value="<?php array_key_exists('abc', $_REQUEST) ? $_REQUEST['abc'] : "default value goes here" ?>" />

<script>
function myFunction()
{
	var num = document.getElementById("target_bodyfat_pct").value;
	var result = Number(num) * 3.0
	var res = String(result);
	document.getElementById("result").setAttribute("value",result);
}
</script>


 <p>Result</p> <input type="number" id="result" value="0" readonly />

</body>
</html>