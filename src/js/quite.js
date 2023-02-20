window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-339209325');


function Quite_Form() {
    // debugger
    // alert("ok")
    const name = document.getElementById("nameq").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("emailq").value;
    const company = document.getElementById("company").value;
    const items = document.getElementById("items").value;
    const quantity = document.getElementById("quantity").value;



    function emailMatch(email) {

        return email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")

        // console.log("email is valid")
    }

    function nameMatch(name) {
        if (name.match("^[a-zA-Z ]{3,}$")) {
            return true
        }
        else {
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

    function phonematch(phone) {
        if (phone.match("^((\\+91-?)|0)?[0-9]{10}$")) {
            return true
        } else {
            return false
        }
    }
    // console.log("phone match", phonematch(phone))

    function errorText(id, message) {
        document.getElementById(id).innerHTML = message
        setTimeout(() => {
            document.getElementById(id).innerHTML = "";
        }, 3000)
        return false
    }


    if (name == "" || name == null) {
        errorText("NameError", "please enter Your name")
    } else if (!nameMatch(name)) {
        errorText("NameError", "please enter Your name")
    }

    else if (phone == "" || phone == null) {

        errorText("PhoneError", "please enter  phone number")
    }
    else if (!phonematch(phone)) {

        errorText("PhoneError", "please enter valid phone number")
    }

    else if (email == "" || email == null) {

        errorText("EmailError", "please enter Your email")
    }
    else if (!emailMatch(email)) {

        errorText("EmailError", "please enter  valid email")
    }

    else if (company == "" || company == null) {

        errorText("CompanyError", "please enter company name")
    } 

    else if (items == "" || items == null) {

        errorText("ItemsError", "please select item")
    }
     
    else if (quantity == "" || quantity == null) {

        errorText("QuantityError", "please enter quantity")
    } 

    else {

        // console.log("your data ->", name, phone, email, company, items, quantity)

        var data = {
            service_id: 'service_8zp4yhp',
            template_id: 'template_4a4f1rp',
            user_id: 'user_mTjMBBP092bpZsnZTyLfp',
            template_params: {
                'from_name': name,
                'from_phone': phone,
                'from_email': email,
                'from_company': company,
                'from_item': items,
                'from_quantity': quantity,
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
            alert("Submited Successfully");
           
            window.location.href="index.html";

            $('#myModal2').modal('show');
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("company").value = "";
            document.getElementById("items").value = "";
            document.getElementById("quantity").value = "";

        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }

}