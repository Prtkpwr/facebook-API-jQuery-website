$( document ).ready(function() {

    var myFacebookToken = '';  //enter you facebook API token here

    
/* AJAX call for Profile info */
        $.ajax('https://graph.facebook.com/me?fields=about,hometown,id,name,first_name,last_name,birthday,languages,gender,education,work,relationship_status,quotes,family,website,email,picture.width(600).height(600),cover&access_token='+myFacebookToken,{

                success : function(response){

                    $("#myHometown").val(response.hometown.name);
                    $(".proPic").attr("src",""+response.picture.data.url+"");
                    $("#firstName").val(response.first_name);
                    $("#lastName").val(response.last_name);
                    $("#myName").html("<h3>"+response.name+"</h3>");
                    $("#myEmail").val(response.email);
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myGender").val(response.gender);
                    $("#myBirthdate").val(response.birthday);
                    $("#rStatus").val(response.relationship_status);
                    $(".coverPic").attr("src",""+response.cover.source+"");
                    var family = response.family.data;
                    var getName = $.map(family,function(i){
					  		return i.name;
					  });
                    $("#family").val(getName);
			
    
                }, // end success function
                //error function
                	     error: function( req, status, error ) {
                  console.log( 'Error occured', status, error );
                  alert("There's Something Wrong With Your TOKEN. Either not inserted or it is expired.");
              } //end error function
            }//end argument list 



        );// end ajax call 
 
  
  /* AJAX call for feed */
  
  $.ajax("https://graph.facebook.com/me?fields=posts{type,full_picture,story,message,source},name&access_token="+myFacebookToken,{
		success:function(response){
		var feedData = response.posts.data;
		var feeds = $.map(feedData,function(value,index){
				if (index <= 5) {            //for limiting 6 feeds
				return value;
				}
			});
			//first feed starts here
				var feed1 = $.map(feeds,function(value,index){       
					if(index==0){
						return value ;
					}
			});
			if (feed1[0].type == "status"){  //for status update

				$("#story1").html(response.name+ " Shared a Status : </br>" +"<strong><h1>"+ feed1[0].message+"</strong></h1>");
				
				}
			else if (feed1[0].type == "photo"){   //for photo shared

				$("#story1").text(""+feed1[0].story+"");
				$(".fPhoto1").html("<img src="+feed1[0].full_picture+" "+"class="+" img-responsive"+">");
			
			}
			else if(feed1[0].type == "video"){       //for video shared
            $("#story1").text(""+feed1[0].story+"");
            $(".fPhoto1").html("<video controls> <source  src="+""+feed1[0].source+" "+"type= "+"video/mp4"+"></video>");
            }
            else{}
            //first feed ends here
           
            //second feed starts here
           var feed2 = $.map(feeds,function(value,index){
					if(index==1){
						return value ;
					}
			});
			if (feed2[0].type == "status"){ //for status update

				$("#story2").html(response.name+ " Shared a Status : </br>" +"<strong><h1>"+ feed2[0].message+"</strong></h1>");
				
				}
			else if (feed2[0].type == "photo"){        //for photo shared

				$("#story2").text(""+feed2[0].story+"");
				$(".fPhoto2").html("<img src="+feed2[0].full_picture+" "+"class="+" img-responsive"+">");
			
			}
			else if(feed2[0].type == "video"){            //for video shared
            $("#story2").text(""+feed2[0].story+"");
            $(".fPhoto2").html("<video controls> <source  src="+""+feed2[0].source+" "+"type= "+"video/mp4"+"></video>");
            }
            else{}
            //second feed ends here
            
            //third feed starts here
            
            
            var feed3 = $.map(feeds,function(value,index){
					if(index==2){
						return value ;
					}
			});
			if (feed3[0].type == "status"){  //for status update

				$("#story3").html(response.name+ " Shared a Status : </br>" +"<strong><h1>"+ feed3[0].message+"</strong></h1>");
				
				}
			else if (feed3[0].type == "photo"){  //for photo shared

				$("#story3").text(""+feed3[0].story+"");
				$(".fPhoto3").html("<img src="+feed3[0].full_picture+" "+"class="+" img-responsive"+">");
			
			}
			else if(feed3[0].type == "video"){ //for video shared
            $("#story3").text(""+feed3[0].story+"");
            $(".fPhoto3").html("<video controls> <source  src="+""+feed3[0].source+" "+"type= "+"video/mp4"+"></video>");
            }
            else{}
			//third feed ends here
			
			//fourth feed starts here
			var feed4 = $.map(feeds,function(value,index){
					if(index==3){
						return value ;
					}
			});
			if (feed4[0].type == "status"){  //for status

				$("#story4").html(response.name+ " Shared a Status : </br>" +"<strong><h1>"+ feed4[0].message+"</strong></h1>");
				
				}
			else if (feed4[0].type == "photo"){ //for photo

				$("#story4").text(""+feed4[0].story+"");
				$(".fPhoto4").html("<img src="+feed4[0].full_picture+" "+"class="+" img-responsive"+">");
			
			}
			else if(feed4[0].type == "video"){  //for video
            $("#story4").text(""+feed4[0].story+"");
            $(".fPhoto4").html("<video controls> <source  src="+""+feed4[0].source+" "+"type= "+"video/mp4"+"></video>");
            }
            else{}
            //fourth feed ends here
            
            //fifth feed starts here
            var feed5 = $.map(feeds,function(value,index){
					if(index==4){
						return value ;
					}
			});
			if (feed5[0].type == "status"){  //for status

				$("#story5").html(response.name+ " Shared a Status : </br>" +"<strong><h1>"+ feed5[0].message+"</strong></h1>");
				
				}
			else if (feed5[0].type == "photo"){  //for photo

				$("#story5").text(""+feed5[0].story+"");
				$(".fPhoto5").html("<img src="+feed5[0].full_picture+" "+"class="+" img-responsive"+">");
			
			}
			else if(feed5[0].type == "video"){    //for video
            $("#story5").text(""+feed5[0].story+"");
            $(".fPhoto5").html("<video controls> <source  src="+""+feed5[0].source+" "+"type= "+"video/mp4"+"></video>");
            }
            else{}
            //fifth feed ends here
            
            //sixth feed starts here
            var feed6 = $.map(feeds,function(value,index){
					if(index==5){
						return value ;
					}
			});
			if (feed6[0].type == "status"){  //for status

				$("#story6").html(response.name+ " Shared a Status : </br>" +"<strong><h1>"+ feed6[0].message+"</strong></h1>");
				
				}
			else if (feed6[0].type == "photo"){     //for photo

				$("#story6").text(""+feed6[0].story+"");
				$(".fPhoto6").html("<img src="+feed6[0].full_picture+" "+"class="+" img-responsive"+">");
			
			}
			else if(feed6[0].type == "video"){ //for video
            $("#story6").text(""+feed6[0].story+"");
            $(".fPhoto6").html("<video controls> <source  src="+""+feed6[0].source+" "+"type= "+"video/mp4"+"></video>");
            }
            else{}
		
		
		
		
		} //end success function
	}); //end ejax call	
	//below is the initial condition
	$(".feed1").hide();
	$(".feed2").hide();
	$(".feed3").hide();
    $(".feed4").hide();
    $(".feed5").hide();
    $(".feed6").hide();
		
 });	//end document ready function	
 
 //onclick funtion
 
 $(".feeds").on("click",function(){

				$(".feed1").show(500);
                $(".feed2").show(500);
                $(".feed3").show(500);
                $(".feed4").show(500);
                $(".feed5").show(500);
                $(".feed6").show(500);
                $(".1").hide();
                $(".2").hide();
                $(".3").hide();
                $(".4").hide();
                $(".5").hide();
                
});

 $(".profile").on("click",function(){

				$(".feed1").hide();
                $(".feed2").hide();
                $(".feed3").hide();
                $(".feed4").hide();
                $(".feed5").hide();
                $(".feed6").hide();
                $(".1").show(500);
                $(".2").show(500);
                $(".3").show(500);
                $(".4").show(500);
                $(".5").show(500);
});
