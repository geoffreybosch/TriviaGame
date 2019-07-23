var questions = [
    {question: "How far is the nearest black hole?",
        answers: ["1,600 light years away", "2,400 light years away", "800 light years away", "24,000 light years away"],
        rightChoice: "1,600 light years away"}, 
    {question: "How hot is the surface of the sun?",
        answers: ["7,000 degrees", "24,000 degrees", "16,000 degrees", "10,000 degrees"],
        rightChoice: "10,000 degrees"}, 
    {question: "What is the big red spot on Jupiter?",
        answers: ["The star of the next Dr. Pimple-Popper video", "A hurricane-like storm system", "A large crater", "A large cloud that circles the planet."],
        rightChoice: "A hurricane-like storm system"}, 
    {question: "What is a parsec?",
        answers: ["A unit of length equal to 3.261 light years.", "A wookies favorite type of stopwatch.", "How galactic golf courses are measured", "How our solar system measures time."],
        rightChoice: "A unit of length equal to 3.261 light years."}, 
    {question: "What is Elon Musk's end goal?",
        answers: ["To become a MemeLord", "To become the MemeLord of Mars.", "To become the MemeLord of Earth.", "To become the MemeLord of Earth & Mars."],
        rightChoice: "To become the MemeLord of Earth & Mars."}
]
var timer
var quizArea = $('.quiz')
var rules = {
    right:0,
    wrong:0,
    counter:50, 
    timer:function(){
        rules.counter--;
        if (rules.counter ==0){alert('Time up!')}
        $("#countdown").text(rules.counter+ " Seconds");
    },
    go:function(){
        $('#go').remove();
        timer = setInterval(rules.timer, 1000)
        $(".quiz-timer").append(
            "<h3> Time left: <p id='countdown'>50 Seconds<p> </h3>"
        )
        for (var i = 0; i < questions.length; i++) {
            quizArea.append("<h3>" + questions[i].question + "</h3>");
            for (var j = 0; j < questions[i].answers.length; j++) {
              quizArea.append("<br><br><input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
          }
          quizArea.append("<br><button id='stop'>Stop</button>");
    },
    stop: function() {
        var inputs = quizArea.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).val() == questions[i].rightChoice) {
            rules.right++;
          } else {
            rules.wrong++;
          }
        }
        this.score();
      },
    score: function() {
        clearInterval(timer);
        quizArea.html("<h2>Congrats!</h2>");
        quizArea.append("<h3>Right Answers: " + this.right + "</h3>");
        quizArea.append("<h3>Wrong Answers: " + this.wrong + "</h3>");
    }
}
$(document).on("click", "#go", function() {
    rules.go();
});
$(document).on("click", "#stop", function() {
    rules.stop();
});