const email = document.getElementById(`email`),
      password = document.getElementById(`password`),
      homeContainer = document.getElementById(`home_container`),
      loginContainer = document.getElementById(`login_container`),
      userEmail = document.getElementById(`user_email`);
    
function loginUser() {
    if(!email.value.trim() && !password.value.trim()) return alert(`Please Enter Email or Password`);

    localStorage.setItem(`email`, email.value);

    checkIsUserLogin();
}

function checkIsUserLogin(){
    var email = localStorage.getItem(`email`)
    if(email){
        var firstLetter  = email.charAt(0).toUpperCase();
        homeContainer.style.display = `block`;
        loginContainer.style.display = `none`;
        userEmail.innerText = `${firstLetter}`;
    }else{
        homeContainer.style.display = `none`;
        loginContainer.style.display = `block`;
    }
}

checkIsUserLogin();

function signOut(){
    localStorage.removeItem('email');
    checkIsUserLogin();
}

userEmail.innerHTML = email.value;