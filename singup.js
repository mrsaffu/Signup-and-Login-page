function formData(e) {
    e.preventDefault();

    let FirstName = document.getElementById("firstname").value;
    console.log(FirstName);
    let LastName = document.getElementById("lastname").value;
    console.log(LastName);
    let fullName = FirstName + " " + LastName;
    let Email = document.getElementById("email").value;
    console.log(Email);
    let Phone = document.getElementById("phone").value;
    let Address = document.getElementById("Address").value;
    let Password = document.getElementById("password").value;
    let ConformPassword = document.getElementById("conformpassword").value;
    let gender = document.getElementsByName("gender");
    console.log(gender);
    let errorMessage = document.getElementById("alertmessage");


    let finalgender = ""
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            finalgender = gender[i].value
        }
    }

    // Convert string into obj
    let userData = {
        fullName,
        Email,
        Phone,
        ConformPassword,
        gender: finalgender
    }

    console.log("Object", userData);

    let userArrayData = JSON.parse(localStorage.getItem("userDetails")) || [];

    // if(userArrayData=== null){
    //     userArrayData=[]
    //     userArrayData.push(userData)
    //     console.log("else array data", userArrayData);

    // }


    let isEmailAvailable = userArrayData.some((u) => {
        return u.Email === Email;
    })
    let isPhoneAvailable = userArrayData.some((p) => {
        return p.Phone === Phone;
    })
    console.log(isPhoneAvailable);
    // let isPasswordnotSimiler= userArrayData.some((s)=>{
    //     return s.Password===ConformPassword;
    // })


    if (isEmailAvailable) {
        errorMessage.style.display = "block"

        errorMessage.innerText = "User is Aready Registresd go to login page";
        console.log(errorMessage);
        // setTimeout(() => {
        //     window.open("/login.html")
        // }, 2000)
        return false;
        // }else{
        //     errorMessage.style.display="none";
    }
    else if (isPhoneAvailable) {
        errorMessage.style.display = "block"

        errorMessage.innerText = "Phone Number is Already register."
        return false
    }
    else if (Password !== ConformPassword) {
        console.log("hi");
        errorMessage.style.display = "block";
        errorMessage.innerText = "Password is not match"
        return false
    }
    else {
        errorMessage.style.display = "none"

    }

    userArrayData.push(userData)

    console.log("if array data", userArrayData);



    // convert 
    let JSONObj = JSON.stringify(userArrayData);
    console.log(JSONObj);


    // Store the data into local.
    localStorage.setItem("userDetails", JSONObj);
    errorMessage.style.display = "block";

    errorMessage.innerText = "Registration Successfull ";
    errorMessage.style.color = "green"

    setTimeout(() => {
        window.open("/login.html")
    }, 2000)

}
