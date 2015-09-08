/**
 * Created by jaimevalencia on 9/7/15.
 */
$(document).ready(function() {

    var oneUp = function(num){

        var consoleNum = '';

        if ((num % 3) == 0){
            consoleNum = 'Fizz';
        }
        if ((num % 5) == 0){
            consoleNum = consoleNum + 'Buzz';
        }
        if ((num % 3) != 0 && (num % 5) != 0){
            consoleNum =  num;
        }
        return consoleNum;
    };

    var printNum = function(i){
         $('#output').text($('#output').text() + ' ' +oneUp(i));
    };


    $('#my-button').click(function (e) {

            $('#output').text('');
            var iterations = $('#counter').val();
            for (var i=1; i<=iterations;i++){
                printNum(i);
            }
        }
    );
});