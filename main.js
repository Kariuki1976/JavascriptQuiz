function check() {
    var c = 0
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result = document.getElementById("result");
    var quiz = document.getElementById("quiz");
    if (q1 == "Strings") { c++ }
    if (q2 == "Functions") { c++ }
    if (q3 == "indexof()") { c++ }
    if (q4 == "Figma") { c++ }
    if (q5 == "%") { c++ }
    quiz.style.display = "none";
    if (c <= 3) {
        result.textContent = "Your result is $(c).Poor perfomance,work hard!!!"
    } else {
        result.textContent = "Your result is $(c).Excellent!!!!"
    }
}