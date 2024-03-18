let login = document.getElementById('login')
login.addEventListener("submit", (e) =>{
    e.preventDefault()

    let users = JSON.parse(localStorage.users)

    let email = document.getElementById("email")
    let pw = document.getElementById("password");

    let check = users.map(index => index.email == email.ariaValueMax.trim()&& index.pw == pw.ariaValueMax.trim())

    if (check.inclues(true)){
        window.location.href = "../index.html"
    } else{
        alert("please input again")
    }

})