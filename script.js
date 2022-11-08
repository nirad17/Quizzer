

    var time = 15 * 60;
    let counter =1;
    var timer = setInterval(function () {

        var minutes = parseInt(time / 60, 10);
        var seconds = parseInt(time % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;

        --time;
    }, 1000);
    
    var total = 20;
   
    
    // Init Question
    function init() {
        // set correct answers
        sessionStorage.setItem('a1', 'b');
        sessionStorage.setItem('a2', 'a');
        sessionStorage.setItem('a3', 'b');
        sessionStorage.setItem('a4', 'a');
        sessionStorage.setItem('a5', 'b');
        sessionStorage.setItem('a6', 'c');
        sessionStorage.setItem('a7', 'a');
        sessionStorage.setItem('a8', 'b');
        sessionStorage.setItem('a9', 'b');
        sessionStorage.setItem('a10', 'c');
        sessionStorage.setItem('a11', 'b');
        sessionStorage.setItem('a12', 'd');
        sessionStorage.setItem('a13', 'a');
        sessionStorage.setItem('a14', 'b');
        sessionStorage.setItem('a15', 'b');
        sessionStorage.setItem('a16', 'd');
        sessionStorage.setItem('a17', 'c');
        sessionStorage.setItem('a18', 'a');
        sessionStorage.setItem('a19', 'b');
        sessionStorage.setItem('a20', 'c');

    }
    $(document).ready(function () {
        var current;
        var next;
        // make a json object for questions and answers
        // initialize current and next
        current = 0;
        next = 1;
        // Hide all questions
        $('.questionForm').hide();
        // Show first question
        $('#q1').show();
        $('.questionForm #submit').click(function () {
            // Get data attributes
            current = $(this).parents('form:first').data('question');
            next = $(this).parents('form:first').data('question') + 1;
            counter=counter+1;
            console.log(counter);
            // Hide all questions
            $('.questionForm').hide();
            // Show next question
            $('#q' + next + '').fadeIn(300);
            process('' + current + '');
            // log the checked option in console
            console.log($('input[name=q' + current + ']:checked').val());
            // if nothing if checked, make is null
            // if($('input[name=q' + current + ']:checked').val() == undefined){
            //     $('input[name=q' + current + ']:checked').val() = null;
            // }
            if(counter ==11){
                time =15*60;
            }
            if ( counter == 16){
                time=8*60;
            }


            return false;
        });

        // previos button
        $('.questionForm #prev').click(function () {
            // Get data attributes
            current = $(this).parents('form:first').data('question');
            next = $(this).parents('form:first').data('question') - 1;
            counter=counter-1;
            console.log(counter);
            // Hide all questions
            $('.questionForm').hide();
            // Show next question
            $('#q' + next + '').fadeIn(300);
            console.log($('input[name=q' + current + ']:checked').val());
            // console.log(current)
            return false;
        });
        // conituously check if current question <10 and time is 0
        setInterval(function () {
            if (counter <=10 && time == 0) {
                process(counter);

                time = 15* 60;
                document.getElementById("round_no").innerHTML = "Round 2 - General Knowledge";
                // display 10th question
                $('.questionForm').hide();
                $('#q11').fadeIn(300);
                counter=11;
                // process('' + current + '');


                return false;
            }
            if ((counter > 10 && counter<=15) && time == 0) {
                $('.questionForm').hide();
                time=15*60;
                $('#q16').fadeIn(300);
                counter=16;
                process(counter);
                console.log(counter);
                return false;
            }
            if(counter>=16 && time==0){
                time=8*60
                $('.questionForm').hide();
                // stop the timer
                $('#time').hide();
                console.log("hidden");
                counter=20;
                process(counter);
                // make the unanswered questions undefined and consider them answered
                
                return false;
            }
            if (counter == 11) {
                document.getElementById("round_no").innerHTML = "Round 2 - General Knowledge";
                return false;

            }
            if (counter == 16) {
                
                // process(16);
                document.getElementById("round_no").innerHTML = "Round 3 - Logo Identification";
                return false;
            }
            if(counter == 21){
                process(20);
                document.getElementById("round_no").innerHTML = "Results";
                return false;
            }

        }, 100);
    });

    function process(n) {
        // Get input value
        // after 10 questions reset the timer to 15 minutes
        // console.log(n);
        // if (n >= 11) {

        //     time = 15 * 60;
        //     // chane round_no innerhtml
        // }
        // if(n>=16){
        //     time=15*60;
        // }



        if (n == 20) {
            // hide the timer
            document.getElementById("time").style.display = "none";
            
            // Hide all questions
            $('.questionForm').hide();
            // Show all questions
            $('#results').fadeIn(300);
            // for first 10 questions, 2 marks each ,for next 5 questions, 2 marks each for last 5 questions, 4 marks each
            // for first 10 questions
            var mark = 2;
            var score=0;
            var score1 = 0;
            for (i = 1; i <= 10; i++) {
                // if user selected no option , go to next question
                if ($('input[name=q' + i + ']:checked').val() == undefined) {
                    continue;
                }
                // Get input value
                answer = $('input[name=q' + i + ']:checked').val();
                // Check answer
                // if not answered then ignore


                if (answer == sessionStorage.getItem('a' + i + '')) {
                    // Increase score
                    score1 = score1 + mark;
                }
            }
            // for next 5 questions
            mark = 2;
            var score2 = 0;
            for (i = 11; i <= 15; i++) {
                // Get input value
                answer = $('input[name=q' + i + ']:checked').val();
                // Check answer
                if (answer == sessionStorage.getItem('a' + i + '')) {
                    // Increase score
                    score2 = score2 + mark;
                }
            }
            // for last 5 questions
            mark = 4;
            var score3 = 0;
            for (i = 16; i <= 20; i++) {
                // Get input value
                answer = $('input[name=q' + i + ']:checked').val();
                // Check answer
                if (answer == sessionStorage.getItem('a' + i + '')) {
                    // Increase score
                    score3 = score3 + mark;
                }
            }
//                 Cumulative score of above 9.5 can get admission in Vellore, above 7.5 to 9.4 admitted in Chennai 
// campus, above 6.5 to 7.4 admitted in Amravati campus and below 6 will not be admitted.
            // calculate 
            score = score1 + score2 + score3;
            score=score/50;
            score=score*10;
            score=score.toPrecision(3) 
            console.log(score1,score2,score3);           
            // Display score and campus name
            if (score > 9.5) {
                $('#results').html('<h3>Congrats! your score is ' + score + ' </h3>');
                $('#campus').html('<h3>You are admitted in Vellore campus 🥳</h3>');
            } else if (score > 7.5 && score < 9.4) {
                $('#results').html('<h3>Your score is ' + score + ' and you are admitted in Chennai campus 🥳</h3>');
            } else if (score > 6.5 && score < 7.4) {
                $('#results').html('<h3>Your score is ' + score + ' and you are admitted in Amravati campus 🥳</h3>');
            } else {
                $('#results').html('<h3>Your score is ' + score + ' and you are not admitted 😞</h3>');
            }



           

            return false;
        }
        return false;
    }
    // add event listener to load the init function on page load
    window.addEventListener('load', init, false);

