//Calc functions and testing stuff

function SelectAll(id){
	document.getElementById(id).focus();
	document.getElementById(id).select();
	}

function question1(){

		var q1_inty = document.getElementById("q1_inty").value;
		var q1_d1 = document.getElementById("q1_d1").value;
		var q1_d2 = document.getElementById("q1_d2").value;
		var q1_time = document.getElementById("q1_time").value;
		var q1_a_result = q1_inty*q1_d1*Math.pow(10,-4)*q1_d2*q1_time*30;
		var q1_b_result = q1_a_result/Math.pow(10,8);
		document.getElementById("q1a").setAttribute("value",(100*Math.round(q1_a_result/100)).toPrecision(3) + " J");
		document.getElementById("q1b").setAttribute("value",(q1_b_result).toPrecision(3) + " kg*m/s");
	}

function question2(){

		var q2_inty = document.getElementById("q2_inty").value;
		var q2_pcES = document.getElementById("q2_pcES").value;
		var q2_pcAB = document.getElementById("q2_pcAB").value;
		var q2_d1 = document.getElementById("q2_d1").value;
		var q2_d2 = document.getElementById("q2_d2").value;
		var q2_theta = document.getElementById("q2_theta").value;
		var q2_time = document.getElementById("q2_time").value;
		var q2_result = q2_inty*q2_pcES*Math.pow(10,-4)*q2_pcAB*q2_d1*q2_d2*Math.sin(q2_theta*(Math.PI/180))*60*q2_time;
		document.getElementById("q2_ans").setAttribute("value",(100*Math.round(q2_result/100)).toPrecision(3) + " J");
	}

	function question3(){

		var q3_inty = document.getElementById("q3_inty").value;
		var q3_mirrord = document.getElementById("q3_mirrord").value;
		var q3_plater = document.getElementById("q3_plater").value;
		var q3_volume = document.getElementById("q3_volume").value;
		var q3_temp = document.getElementById("q3_temp").value;
		var q3_pcabs = document.getElementById("q3_pcabs").value;
		var u = 4*Math.PI*Math.pow(10,-7);
		var c = 3*Math.pow(10,8);
		var q3_a_result = q3_inty*Math.pow(10,3)*Math.pow((q3_mirrord/2)/(q3_plater*Math.pow(10,-2)),2);
		var q3_b_result = Math.sqrt(2*u*q3_a_result*c);
		var q3_c_result = q3_b_result/c;
		var q3_d_result = Math.pow(10,3)*q3_volume*4.1855*(100-q3_temp)/(q3_a_result*Math.PI*Math.pow(q3_plater*Math.pow(10,-2),2)*q3_pcabs*Math.pow(10,-2));
		document.getElementById("q3a").setAttribute("value",(1000*Math.round(q3_a_result/1000)).toPrecision(3) + " W/m^2");
		document.getElementById("q3b").setAttribute("value",(100*Math.round(q3_b_result/100)).toPrecision(3) + " N/C");
		document.getElementById("q3c").setAttribute("value",(Math.pow(10,-7)*Math.round(q3_c_result/Math.pow(10,-7))).toPrecision(3) + " T");
		document.getElementById("q3d").setAttribute("value", (Math.round(q3_d_result)).toPrecision(3) + " s");
	}

	function question4(){

		var q4_freq = document.getElementById("q4_freq").value;
		var q4_pulse_t = document.getElementById("q4_pulse_t").value;
		var q4_parab_R = document.getElementById("q4_parab_R").value;
		var q4_parab_D = document.getElementById("q4_parab_R").value*2;
		var q4_power = document.getElementById("q4_power").value;
		var c = 3*Math.pow(10,8);
		var u = 4*Math.PI*Math.pow(10,-7)
		var q4_a_result = c/(q4_freq*Math.pow(10,9));
		var q4_b_result = q4_power*q4_pulse_t*Math.pow(10,-6);
		var q4_c_result = q4_power*Math.pow(10,3)/(Math.PI*Math.pow((q4_parab_R*Math.pow(10,-2)),2)*c);
		var q4_d_result = Math.sqrt(2*c*u*(q4_power*Math.pow(10,3)/(Math.PI*Math.pow((q4_parab_R*Math.pow(10,-2)),2))));
		var q4_e_result = q4_d_result/c
		document.getElementById("q4a").setAttribute("value",(Math.pow(10,-4)*Math.round(q4_a_result/Math.pow(10,-4))).toPrecision(3) + " m");
		document.getElementById("q4b").setAttribute("value",(Math.pow(10,-7)*Math.round(q4_b_result/Math.pow(10,-7))).toPrecision(3) + " J");
		document.getElementById("q4c").setAttribute("value",(Math.pow(10,-5)*Math.round(q4_c_result/Math.pow(10,-5))).toPrecision(3) + " J/m^3");
		document.getElementById("q4d").setAttribute("value",(100*Math.round(q4_d_result/100)).toPrecision(3) + " V/m");
		document.getElementById("q4e").setAttribute("value",(Math.pow(10,-6)*Math.round(q4_e_result/Math.pow(10,-6))).toPrecision(3) + " T");
	}

	function question5(){

		var q5_inty = document.getElementById("q5_inty").value;
		var q5_bnum = document.getElementById("q5_bnum").value;
		var q5_angle_b = document.getElementById("q5_angle_b").value;
		var q5_cnum = document.getElementById("q5_cnum").value;
		var q5_angle_c = document.getElementById("q5_angle_c").value;
		var q5_dnum = document.getElementById("q5_dnum").value;
		var q5_angle_d = document.getElementById("q5_angle_d").value;
		var q5_enum = document.getElementById("q5_enum").value;
		var q5_angle_e = document.getElementById("q5_angle_e").value;
		var q5_b_result = q5_inty*Math.pow(Math.cos(q5_angle_b*(Math.PI/180)),(q5_bnum*2+2));
		var q5_c_result = q5_inty*Math.pow(Math.cos((q5_angle_c)*(Math.PI/180)),(q5_cnum*2+2));
		var q5_d_result = q5_inty*Math.pow(Math.cos(q5_angle_d*(Math.PI/180)),(q5_dnum*2+2));
		var q5_e_result = q5_inty*Math.pow(Math.cos(q5_angle_e*(Math.PI/180)),(q5_enum*2+2));
		document.getElementById("q5a").setAttribute("value",(0.00).toFixed(2) + " W/m^2");
		document.getElementById("q5b").setAttribute("value",(0.1*Math.round(q5_b_result/0.1)).toPrecision(3) + " W/m^2");
		document.getElementById("q5c").setAttribute("value",(0.1*Math.round(q5_c_result/0.1)).toPrecision(3) + " W/m^2");
		document.getElementById("q5d").setAttribute("value",(Math.round(q5_d_result)).toPrecision(3) + " W/m^2");
		document.getElementById("q5e").setAttribute("value",(Math.round(q5_e_result)).toPrecision(3) + " W/m^2");
	}

	function question6(){

		var q6_mass_s = document.getElementById("q6_mass_s").value;
		var q6_r_s = document.getElementById("q6_r_s").value;
		var q6_inty = document.getElementById("q6_inty").value;
		var q6_mass_e = document.getElementById("q6_mass_e").value;
		var q6_r_e = document.getElementById("q6_r_e").value;
		var q6_area = document.getElementById("q6_area").value;
		var q6_density = document.getElementById("q6_density").value;
		var q6_thick = document.getElementById("q6_thick").value;
		var G = 6.67*Math.pow(10,-11);
		var c = 3*Math.pow(10,8)
		var q6_a_result = G*q6_mass_s*q6_mass_e/Math.pow(q6_r_s*Math.pow(10,9),2);
		var q6_b_result = Math.PI*Math.pow((q6_r_e*1000),2)*q6_inty/c;
		var q6_c_result = q6_inty*q6_area/c;
		var q6_d_result = G*q6_mass_s*q6_density*q6_area*q6_thick/Math.pow(q6_r_s*Math.pow(10,9),2);
		var q6_e_result = q6_c_result*Math.pow(q6_r_s*Math.pow(10,9),2)/(G*q6_mass_s*q6_density*q6_area);
		document.getElementById("q6a").setAttribute("value",Math.pow(10,20)*Math.round(q6_a_result/Math.pow(10,20)) + " N");
		document.getElementById("q6b").setAttribute("value",(Math.pow(10,6)*Math.round(q6_b_result/Math.pow(10,6))).toPrecision(3) + " N");
		document.getElementById("q6c").setAttribute("value",(0.001*Math.round(q6_c_result/0.001)).toPrecision(3) + " N");
		document.getElementById("q6d").setAttribute("value",(0.1*Math.round(q6_d_result/0.1)).toPrecision(3) + " N");
		document.getElementById("q6e").setAttribute("value", (Math.pow(10,-9)*Math.round(q6_e_result/Math.pow(10,-9))).toPrecision(3) + " m");
	}