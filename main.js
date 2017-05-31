$("#btn_post").click(function(){
					$("form#form_post").submit(function(event){
					 
					  	event.preventDefault();
					 
					 	  var formData = new FormData($(this)[0]);
					 
					  	$.ajax({
					    	url: 'pagePost.php',
					    	type: 'POST',
					    	data: formData,
					    	async: false,
					    	cache: false,
					    	contentType: false,
					    	processData: false,
					    	success: function (returndata) {
					      		alert(returndata);
									  $("#text_post").val();
							  }
					  	});
					 
					  	return false;
					  });
					
				});
