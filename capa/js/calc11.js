//Capa 11 testing
//Click "explanation" in the html webpage for clearer equations and visuals

function SelectAll(id){
	document.getElementById(id).focus();
	document.getElementById(id).select();
	}

function showHide(){
	var e = document.getElementById("hiding");
		/*if(e.style.display == "block") {
			e.style.display = "none";
		}
		else {*/
			e.style.display = "block";
		//}
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
	var q2_m = (q2_intmin-(q2_intmax*0.5))/(q2_intmax-q2_intmin)
	var q2_result = (q2_m+0.5)*q2_intmax/(2*q2_n);
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
	var q4_ior_w = document.getElementById("q4_ior_w").value;
	var q4_result = 2*q4_vol*q4_ior_o/(q4_lambda*Math.pow(10,-9));
	document.getElementById("q4_ans").setAttribute("value", q4_result.toPrecision(3) + " m^2");
}

function question5(){
	var q5_n1 = document.getElementById("q5_n1").value;
	var q5_n2 = document.getElementById("q5_n2").value;
	var q5_w1 = 400;
	var q5_w2 = 600;
	var q5_a_result = q5_w2/q5_n1;
	var q5_b_result = 2*q5_w2/(2+0.5);
	document.getElementById("q5a").setAttribute("value", q5_a_result.toPrecision(3) + " nm");
	document.getElementById("q5b").setAttribute("value", q5_b_result.toPrecision(3) + " nm");
}

function question6(){
	var q6_n = document.getElementById("q6_n").value;
	var q6_n1 = document.getElementById("q6_n1").value;
	var q6_ang4 = document.getElementById("q6_ang4").value;
	var q6_a_result = q6_n*Math.sin(Math.PI*0.5)/Math.sin(Math.PI*0.25);
	var q6_b_result = 180;
	var q6_c_result = (Math.asin(Math.sin(q6_ang4*(Math.PI/180))/q6_n1))*(180/Math.PI);
	var q6_d_result = "Yes";
	var q6_f_result = (Math.asin(q6_n1*Math.sin((Math.PI/4)-Math.asin(1/q6_n1))))*(180/Math.PI);
	document.getElementById("q6a").setAttribute("value", q6_a_result.toPrecision(3));
	document.getElementById("q6b").setAttribute("value", q6_b_result);
	document.getElementById("q6c").setAttribute("value", q6_c_result.toPrecision(3));
	document.getElementById("q6e").setAttribute("value", q6_b_result);
	document.getElementById("q6f").setAttribute("value", q6_f_result.toPrecision(3));
}

function question7(){
	var q7_l1 = document.getElementById("q7_l1").value;
	var q7_inty1 = document.getElementById("q7_inty1").value;
	var q7_d1 = document.getElementById("q7_d1").value;
	var q7_l2 = document.getElementById("q7_l2").value;
	var q7_inty2 = document.getElementById("q7_inty2").value;
	var q7_d2 = document.getElementById("q7_d2").value;
	var q7_ang = document.getElementById("q7_ang").value;
	var q7_result = 0
	document.getElementById("q7_ans").setAttribute("value", q7_result + " W/m^2");
}

function question8(){
	var q8_d = document.getElementById("q8_d").value;
	var q8_ang = document.getElementById("q8_ang").value;
	var q8_result = q8_d/Math.tan(Math.asin((Math.sin(Math.PI/2-(Math.PI/180)*q8_ang))/1.33));
	document.getElementById("q8_ans").setAttribute("value", q8_result.toPrecision(3) + " m");
}

function question9(){
	var q9_ang = document.getElementById("q9_ang").value;
	var q9_t = document.getElementById("q9_t").value;
	var q9_w1 = document.getElementById("q9_w1").value;
	var q9_ior1 = document.getElementById("q9_ior1").value;
	var q9_w2 = document.getElementById("q9_w2").value;
	var q9_ior2 = document.getElementById("q9_ior2").value;
	var q9_result = ((q9_t*Math.tan(Math.asin(Math.sin(q9_ang*(Math.PI/180))/q9_ior2)))-(q9_t*Math.tan(Math.asin(Math.sin(q9_ang*(Math.PI/180))/q9_ior1))))*Math.cos(q9_ang*(Math.PI/180));
	document.getElementById("q9_ans").setAttribute("value", q9_result.toPrecision(3) + " cm");
}

function question10(){
	var q10_ang1 = document.getElementById("q10_ang1").value;
	var q10_ang2 = document.getElementById("q10_ang2").value;
	var q10_result = q10_ang2-q10_ang1;
	document.getElementById("q10_ans").setAttribute("value", q10_result.toPrecision(3) + " deg");
}

function question11(){
	var q11_h = document.getElementById("q11_h").value;
	var q11_dw = document.getElementById("q11_dw").value;
	var q11_dm = document.getElementById("q11_dm").value;
	var q11_result = q11_h*(parseFloat(q11_dm) + parseFloat(q11_dw))/q11_dw;
	document.getElementById("q11_ans").setAttribute("value", q11_result.toPrecision(2) + " m");
}