$(document).ready(function(){
	$("#rock").click(function(){
		var name=$("#rich").val();
		var email=$("#mail").val();
		var message=$("#msg").val();

 $.ajax({
 	type:"GET",
 	url:"http://localhost:8080/api/register",
 	data:'name='+name+'&email='+email+'&message='+message,
 	// data:$('#form').serialize(),
 	dataType:"json",
 	success:function(res){
  alert(res.result);
 	},
 	error: function(){
 		alert("Check your connection");
 	}
 });
	});

});
