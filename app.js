var form = document.getElementById("form")


event.preventDefault();

function login() {
    var userName = document.getElementById("username").value
    var password = document.getElementById("pass").value
    if (userName === 'abc' && password === '123') {
        alert("done")
        window.location.assign("quiz.html")
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter Correct username and passowrd !',
        })
    }

    userName.value = "";
    password.value = "";

}

