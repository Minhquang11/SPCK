let login = document.getElementById('login')
login.addEventListener("submit", (e) => {
    e.preventDefault()

    let users = JSON.parse(localStorage.users)

    let email = document.getElementById("email")
    let pw = document.getElementById("password");

    let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim())

    if (check[0] == false){
        alert("You are successful")
        window.location.href = "../HOME.html"
    } else {
        alert("Please input again")
    }
})