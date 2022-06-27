/**
 * 
 */
window.onload=function(){
	var id=document.querySelector("input[type='text']");
	var pw=document.querySelector("input[type='password']");
	var idlb=document.querySelector("#idchk");
	var pwlb=document.querySelector("#pwchk");
	
	id.onkeyup=function(){
		//alert(id.value);
		var idchk = /^[a-z0-9]{4,12}$/;
		if(idchk.test(id.value)){
			idlb.innerHTML="사용가능합니다"
			idchk.style.color="blue"
		}else{
			idlb.innerHTML="4~12 사이의 숫자와 소문자만 가능합니다."
		}
	}
	
	
	pw.onkeyup=function(){
		var pwchk = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
		if(pwchk.test(pw.value)){
			pwlb.innerHTML="사용가능합니다."
			pwlb.style.color="blue";
		}else{
			pwlb.innerHTML="비밀번호는 8자이상이며, 숫자 대문자 소문자 특수문자를 모두 포함해야합니다."}
			pwlb.style.color="red"
	}
	}
