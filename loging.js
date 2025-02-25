function loginData(e) {
   e.preventDefault();
   let email = document.getElementById("email").value;
   console.log(email);
   let password = document.getElementById("password").value;
   // console.log(password);
   errorMessage = document.getElementById("alertmessage")

   // let array=[...array,userData];
   // //  array=userData;
   //  console.log(array);


   let userData = JSON.parse(localStorage.getItem("userDetails"));
   console.log(userData);

   let isEmailAvailable = userData.find((u) => {
      // console.log(u);
      return u.Email === email;
   })
   console.log(isEmailAvailable);

   let isPasswordAvailable = userData.find((p) => {
      return p.ConformPassword === password;
   })

   if (!isEmailAvailable) {
      errorMessage.style.display = "block";
      errorMessage.innerText = "user is not available  please singup the page";
      errorMessage.style.color = "red"
      setTimeout(() => {
         window.open("./singup.html ")
      }, 2000)
   }



   else {
      errorMessage.style.display = "block";
      errorMessage.innerText = " login sucessfully  "
      errorMessage.style.color = "green";
      setTimeout(() => {
         window.open("./homePage.html")
      }, 2000)
   }



}