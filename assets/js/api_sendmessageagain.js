function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://abc1234.execute-api.us-east-1.amazonaws.com/01/contact";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
                      alert ("Name can not less than 2 char");
             return;
         }
         var mobilere = /[0-9]{10}/;
         if (!mobilere.test($("#phone-input").val())) {
             alert ("Please enter valid mobile number");
             return;
         }
         if ($("#email-input").val()=="") {
             alert ("Please enter your email id");
             return;
         }