$( document ).ready(function(){
            
            $('.button-collapse').sideNav({
                    menuWidth: 200,
                    closeOnClick: true,
                    edge: 'right', // <--- CHECK THIS OUT
                }
                );
            
             $('.dropdown-button').dropdown({
                 inDuration:1000,
                 gutter:30,
//                 hover:true,
             });
        });
$().ready(function(){
    
    
            $("#myForm").validate({
               rules:{
                   uname:{
                       required: true,
                       minlength:3
                   },
                   fname:"required",
                   sname:"required",
                   ucountry:"required",
                   uemail:{
                       required:true,
                       email:true
                   },
                   upass:{
                     required:true,
                       minlength: 8,
                       maxlength:16
                   },
                   ucpass:{
                       required:true,
                       minlength: 8,
                       equalTo:"#upass"
                   }
               },
                messages:{
                    uname:{
                      required:"Enter a username",
                        minlength: "Enter at least 3 characters"
                    },
                    fname:"Enter your first name",
                    sname:"Enter your last name",
                    
                    upass:{
                        required:"Please provide a password",
                        minlength:"Your password must be at least 8 characters and at least one number"
                    },
                    ucpass:{
                        required:"Please provide a password",
                        minlength:"Your password must be at least 8 characters and at least one number",
                        equalTo:"please enter the same password as above"
                },

                },
                errorElement:"div",
//                errorPlacement:function(error, element){
//                    var placement=$(element).data("error");
//                    if(placement){
//                        $(placement).append(error)
//                    } 
//                    else{
//                       error.insertAfter(element); 
//                    }
//                }
                
            });    

});
 
    
    
