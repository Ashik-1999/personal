$(document).ready(function(){
    $("#form-validation").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            phonenumber:{
                required:true,
                minlength:10
                
            },
            mail:{
                required:true,
                minlength:3
            },
            subject:{
                required:true,
                minlength:3
            }
},
messages:{
    fname:{
        required:"This field is mandatory",
        minlength:"Please enter atleast three characters"
         },
    phonenumber:{
        required:"This field is mandatory",
        minlength:"Please enter atleast ten characters"
    },
    mail:{
        required:"This field is mandatory",
        minlength:"Please enter a valid maild id"
         },
         subject:{
            required:"This field is mandatory",
            minlength:"Please enter atleast three characters"
             },
}

})



})


