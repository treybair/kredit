$(document).ready(function() {
    setTimeout(function() {
        $("#total").fadeIn(500);
    });
});

$(document).ready(function() {
    $('#quiz').click (function() {
        $('#popup').show();
    })
})

$(document).ready(function() {
    $('#exit').click (function() {
        $('#popup').hide();
    })
})