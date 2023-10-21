var form = document.getElementById("form")

function login() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    if (userName === "" || password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username and password cant be empty!',
        });
    }
    else if (userName === 'abc' && password === '123') {
        alert("Login Successfully!");
        window.location.assign("quiz.html");
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter correct username and password!',
        });
    }
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";

}
