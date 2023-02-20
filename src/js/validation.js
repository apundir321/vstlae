window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-339209325');

function onSubmit(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const location=document.getElementById("location").value;
    const company=document.getElementById("company").value;
    const quantity=document.getElementById("quantity").value;


 
 function emailMatch(email){

     return email.match("^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$")

     console.log("email is valid")

 }

 function nameMatch(name){
   if(name.match("^[a-zA-Z]{3,20}$")){
     return true
   }else{
    return false
  }
 }

 function compantMatch(compant){
  if(compant.match("^[a-zA-Z]{3,20}$")){
    return true
  }else{
   return false
 }
}

function gtag_report_conversion() {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-339209325/az90CLXP4IUDEO3Y36EB',
      'event_callback': callback
  });
  return false;
}
 
 function phonematch(phone){
   if(phone.match("^((\\+91-?)|0)?[0-9]{10}$")){
     return true
   }else{
     return false
   }
 }
 console.log("phone match",phonematch(phone))

   function errorText(id,message){
         document.getElementById(id).innerHTML=message
           setTimeout(()=>{
           document.getElementById(id).innerHTML="";
           },3000)
           return false
   }


    if(name=="" || name==null){
    
      errorText("s_name","please enter Your name")
    } else if(!nameMatch(name)){
      errorText("s_name","please enter Your name")
    }
    else if(phone=="" || phone==null){
    
    errorText("p_name","please enter  phone number")
  }
  else if(!phonematch(phone)){

    errorText("p_name","please enter valid phone number")
  }
    else if(email=="" || email==null){
   
      errorText("e_name","please enter Your email")
    }
    else if( !emailMatch(email)){
   
       errorText("e_name","please enter  valid email")
    }
  
   else if(location=="" || location==null){
   
      errorText("l_name","please enter location")
    }
    else if(company=="" || company==null){
   
        errorText("c_name","please enter company")
      }
      else if(!compantMatch(company)){
   
        errorText("c_name","please enter company")
      }
      else if(quantity=="" || quantity==null){
   
        errorText("q_name","please enter quantity")
      }else{

        var data = {
       service_id: 'service_8zp4yhp',
       template_id: 'template_2fnvm0s',
       user_id: 'user_mTjMBBP092bpZsnZTyLfp',
       template_params: {
           'from_name': name,
           'from_email':email,
           'from_phone':phone,
           'from_location':location,
           'from_company':company,
           'from_quantity':quantity,
           'to_mail':'contact@vstl.ae',
          //  'to_mail':'davidstark0741@gmail.com',
           'to_sender':email
          
          }
   };

     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
         type: 'POST',
         data: JSON.stringify(data),
         contentType: 'application/json'
     }).done(function() {
      gtag_report_conversion();
      alert(" Successfully Submitted. ");
      
      window.location.href="index.html";

      $('#myModal2').modal('show');
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("phone").value="";
      document.getElementById("location").value="";
      document.getElementById("company").value="";
      document.getElementById("quantity").value="";
        //  location.reload();
     }).fail(function(error) {
         alert('Oops... ' + JSON.stringify(error));
     });
     }

  }