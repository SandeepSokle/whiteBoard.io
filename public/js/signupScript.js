let signUpBtn = document.querySelector(".signUpBtn");
  let name = document.querySelector(".inputName");
  let email = document.querySelector(".inputEmail");
  let phone = document.querySelector(".contect");
  let pass = document.querySelector(".inputPass");
  let confirmPass = document.querySelector(".inputConfirmPass");
let signupForgetBtn = document.querySelector(".loginForgetBtn");


  signUpBtn.addEventListener("click", function (e) {
    if (name.value != "") {
      if (email.value != "") {
        if (email.value.match("@gmail.com")) {
          if (phone.value != "") {
            if (pass.value != "") {
              if (pass.value == confirmPass.value) {
                ///////////Create Obj//////////////////////////////

      

                ///////////////////////////////////
              } else alert("PassWord and Confirm PassWord Not Match");
            } else alert("Enter PassWord");
          } else alert("Enter Phone Number");
        } else alert("Email Address Not Valid");
      } else alert("Enter Email");
    } else alert("Enter Your Name");
  });