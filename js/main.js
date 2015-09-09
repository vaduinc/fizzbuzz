/**
 * Created by jaimevalencia on 9/7/15.
 */
$(document).ready(function() {

    /**
     * It checks whether the input 'num' parameter is multiple of
     * 3, 5 or none, then set response accordingly.
     *
     * @param num
     * @returns {string}
     */
    var fizzOrBuzz = function(num){

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

    /**
     * It appends the current 'i' input parameter result with the
     * previous content
     * @param i
     */
    var printOutput = function(i){
         $('#results').text($('#results').text() + ' ' +fizzOrBuzz(i));
    };


    /**
     * Executes the code once the button is clicked
     */
    $('#apply-button').click(function (e) {
            $('#results').text('');
            var iterations = $('#counter').val();
            for (var i=1; i<=iterations;i++){
                printOutput(i);
            }
        }
    );
});