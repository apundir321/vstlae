window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-339209325');


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
function onSubmitContact() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;


    function emailMatch(email){
        return email.match("^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$")
        console.log("email is valid")
    }

    function nameMatch(name){
        if (name.match("^[a-zA-Z]{3,20}$")) {
            return true
        } else {
            return false
        }
    }

    function errorText(id, message){
        document.getElementById(id).innerHTML = message
        setTimeout(() => {
            document.getElementById(id).innerHTML = "";
        }, 3000)
        return false
    }
    // document.getElementById("country").innerHTML

    if (name == "" || name == null) {

        errorText("s_name", "please enter Your name")

    } else if (!nameMatch(name)) {

        errorText("s_name", "please enter Your name")

    }else if (email == "" || email == null) {

        errorText("e_name", "please enter Your email")
    }
    else if (!emailMatch(email)) {

        errorText("e_name", "please enter  valid email")
    }

    else {
        // console.log("your subscribe data ->",name, email);

        var data = {
            service_id: 'service_8zp4yhp',
            template_id: 'template_kks56ey',
            user_id: 'user_mTjMBBP092bpZsnZTyLfp',
            template_params: {
                'from_name': name,
                'from_mail': email,
                'to_mail': 'contact@vstl.ae',
                // 'to_mail': 'davidstark0741@gmail.com',
                'to_sender': email
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            gtag_report_conversion();
            alert("Thanks for Subscribe");
           
            window.location.href="index.html";

            $('#myModal2').modal('show');
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            //  location.reload();
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }

}