var question = document.getElementById("question");
var form = document.getElementById("form")
var index = 0;
var score = 0;


var questions = [
    {
        question: "What is the capital city of Pakistan?",
        option1: "Karachi",
        option2: "Lahore",
        option3: "Islamabad",
        option4: "Gilgit",
        answer: "Islamabad",
    },
    {
        question: "What is the official name of the national airline of Pakistan?",
        option1: "Pakistan Airways",
        option2: "Pakistan International Airlines (PIA)",
        option3: "Air Pakistan",
        option4: "Pakistan Air Connect",
        answer: "Pakistan International Airlines (PIA)",
    },
    {
        question: "Which sport is Pakistan's national game?",
        option1: "Polo",
        option2: "Football",
        option3: "Cricket",
        option4: "Hockey",
        answer: "Hockey",
    },
    {
        question: "What is the highest mountain in Pakistan and the second-highest in the world?",
        option1: "Mount Everest",
        option2: "K2",
        option3: "Nanga Parbat",
        option4: "Mount Kilimanjaro",
        answer: "K2",
    },
    {
        question: "What is the largest province by area in Pakistan?",
        option1: "Sindh",
        option2: "Punjab",
        option3: "Balochistan",
        option4: "Kpk",
        answer: "Balochistan",
    }
]


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
    else if (userName === 'smit' && password === 'smit') {
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


function forget() {
    Swal.fire("Username: smit" + " " + "\n" + "password: smit")
}

function renderQuestion() {
    var question = document.getElementById("question");
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            console.log(options[i].value, questions[index - 1].answer)
            if (options[i].value === questions[index - 1].answer) {
                score++;
            }
        }
    }

    if (!questions[index]) {
        console.log("score " + score);
        return;
    }

    question.innerHTML = `
    <div class="quiz">
        <div class="heading" id="heading">
          <h3>Quiz App</h3>
        </div>
        <div class="title">
          <p>${questions[index].question}</p>
        </div>
        <div class="options">
          <div>
            <label><input type="radio" name="option" value=${questions[index].option1} />${questions[index].option1}</label>
          </div>
          <div>
            <label><input type="radio" name="option" value=${questions[index].option2} />${questions[index].option2}</label>
          </div>
          <div>
            <label><input type="radio" name="option" value=${questions[index].option3} />${questions[index].option3}</label>
          </div>
          <div>
            <label><input type="radio" name="option" value=${questions[index].option4}>${questions[index].option4}</label>
          </div>
          <button onclick="next()">Next</button>
        </div>
      </div>
    `
}

renderQuestion()

function next() {
    index++;
    renderQuestion()
}