(function(){
	if(window.idBuilde) return false;
	var coefficient;
	var inputString;
	var sum;
	var remainders;
	var ret;
	function init(){
		$("form input").val("")
		coefficient=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];//17位数对应的系数
		remainders=["1","0","X","9","8","7","6","5","4","3","2"];
		$("#builde").click(function(){
			sum=0;
			inputString="";
			ret=compute();$("#resultId").val(ret);
		});
		
	}
	function compute(){
		//计算
		inputString=inputString+$("#provence").val()+$("#city").val()+$("#town").val()+$("#year").val()+$("#month").val()+$("#day").val()+$("#sequence").val();
		for (var i=0;i<inputString.length;i++) {
			sum=sum+Number(inputString.charAt(i))*Number(coefficient[i]);
		}
		return inputString+remainders[sum%11];
	}
	window.idBuilde={
		init:init
	}
})();
