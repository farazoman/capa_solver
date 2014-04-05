//Capa 11 testing

function SelectAll(id){
	document.getElementById(id).focus();
	document.getElementById(id).select();
	}

function question1(){
	var q1_lightw = document.getElementById("q1_lightw").value;
	var q1_intmin = document.getElementById("q1_intmin").value;
	var q1_intmin2 = document.getElementById("q1_intmin2").value;
	var q1_a_result = (q1_intmin-1)*0.5*q1_lightw;
	var q1_b_result = (q1_intmin2-1)*q1_lightw/(2*q1_a_result);
	document.getElementById("q1a").setAttribute("value", 0.001*q1_a_result.toPrecision(3) + " um");
	document.getElementById("q1b").setAttribute("value", q1_b_result.toPrecision(3));
}

function question2(){
	var q2_intmax = document.getElementById("q2_intmax").value;
	var q2_intmin = document.getElementById("q2_intmin").value;
	var q2_n = document.getElementById("q2_n").value;
	var q2_result = 1.5*q2_intmax/(2*q2_n);
	document.getElementById("q2_ans").setAttribute("value", q2_result.toPrecision(3) + " nm");
}

function question3(){
	var q3_filmn = document.getElementById("q3_filmn").value;
	var q3_redw = document.getElementById("q3_redw").value;
	var q3_glassn = document.getElementById("q3_glassn").value;
	var q3_a_result = 0.5*(q3_redw/(2*q3_filmn));
	if (q3_glassn > q3_filmn){
		var q3_b_result = (q3_redw/2).toPrecision(3);
	}
	else{
		var q3_b_result = q3_redw;
	}
	document.getElementById("q3a").setAttribute("value", (0.001*q3_a_result).toPrecision(3) + " um");
	document.getElementById("q3b").setAttribute("value", q3_b_result + " nm");
}

function question4(){
	var q4_ior_o = document.getElementById("q4_ior_o").value;
	var q4_vol = document.getElementById("q4_vol").value;
	var q4_lambda = document.getElementById("q4_lambda").value;
	var q4_ior_w = document.getElementById("q4_result").value;
	var q4_result = 2*q4_vol*q4_ior_o/(q4_lambda*Math.pow(10,-9));
	document.getElementById("q4_ans").setAttribute("value", q4_result.toPrecision(3) + " m^2");
}

function question5(){
	var q5_n1 = 1.31
	var q5_n2 = 1.46
	var q5_w1 = 400
	var q5_w2 = 600
	var q5_a_result = 0
	var q5_b_result = 0
	document.getElementById("q5a").setAttribute("value", q5_a_result.toPrecision(3) + " m");
}