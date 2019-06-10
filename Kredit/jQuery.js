
$(document).ready(function() {
    $ ("#budgetClick").click (function() {
        $("#credit").hide();
        $("#loan").hide();
        $("#investment").hide ();
        $("#budget").fadeIn (1000);
        $("#first").hide();
        $(this).css ({'color': 'rgb(150, 150, 150)'  });
        $("#creditClick").css ({'color': 'rgb(177,177,177)'});
        $("#loanClick").css ({'color': 'rgb(177,177,177)'});
        $("#investmentClick").css ({'color': 'rgb(177,177,177)'});
        $(document).ready(function() {
            $("#credit").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#loan").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#investment").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
        });
    });
});

$(document).ready(function() {
    $ ("#creditClick").click (function() {
        $("#budget").hide();
        $("#loan").hide();
        $("#investment").hide();
        $("#credit").fadeIn (1000);
        $("#first").hide();
        $(this).css ({'color': 'rgb(150, 150, 150)'  });
        $("#budgetClick").css ({'color': 'rgb(177,177,177)'});
        $("#loanClick").css ({'color': 'rgb(177,177,177)'});
        $("#investmentClick").css ({'color': 'rgb(177,177,177)'});
        $(document).ready(function() {
            $("#budget").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#loan").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#investment").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
        });
    });
});

$(document).ready(function() {
    $ ("#loanClick").click (function() {
        $("#budget").hide();
        $("#credit").hide();
        $("#investment").hide();
        $("#loan").fadeIn(1000);
        $("#first").hide();
        $(this).css ({'color': 'rgb(150, 150, 150)'  });
        $("#budgetClick").css ({'color': 'rgb(177,177,177)'});
        $("#creditClick").css ({'color': 'rgb(177,177,177)'});
        $("#investmentClick").css ({'color': 'rgb(177,177,177)'});
        $(document).ready(function() {
            $("#budget").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#credit").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#investment").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
        });
    });
});

$(document).ready(function() {
    $ ("#investmentClick").click (function() {
        $("#budget").hide();
        $("#credit").hide();
        $("#loan").hide();
        $("#investment").fadeIn(1000);
        $("#first").hide();
        $(this).css ({'color': 'rgb(150, 150, 150)'  });
        $("#budgetClick").css ({'color': 'rgb(177,177,177)'});
        $("#creditClick").css ({'color': 'rgb(177,177,177)'});
        $("#loanClick").css ({'color': 'rgb(177,177,177)'});
        $(document).ready(function() {
            $("#budget").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#credit").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
            $("#loan").hover(function(){
                $(this).css ({'color': 'rgb(150, 150, 150)' })
            });
        });
    });
});

$(document).ready(function() {
    $("#credit").hover(function(){
        $(this).css ({'color': 'rgb(150, 150, 150)' })
    });
    $("#loan").hover(function(){
        $(this).css ({'color': 'rgb(150, 150, 150)' })
    });
    $("#investment").hover(function(){
        $(this).css ({'color': 'rgb(150, 150, 150)' })
    });
});

$(document).ready(function() {
    setTimeout(function() {
        $("#total").fadeIn(700);
    });
});


/*
function budgetClick () {
    document.getElementById("first").style.display = "none";
    document.getElementById("credit").style.display = "none";
    document.getElementById("loan").style.display = "none";
    document.getElementById("investment").style.display = "none";
    document.getElementById("budget").style.display = "block";
}

function creditClick () {
    document.getElementById("first").style.display = "none";
    document.getElementById("budget").style.display = "none";
    document.getElementById("loan").style.display = "none";
    document.getElementById("investment").style.display = "none";
    document.getElementById("credit").style.display = "block";
}

function loanClick () {
    document.getElementById("first").style.display = "none";
    document.getElementById("budget").style.display = "none";
    document.getElementById("credit").style.display = "none";
    document.getElementById("investment").style.display = "none";
    document.getElementById("loan").style.display = "block";
}

function investmentClick () {
    document.getElementById("first").style.display = "none";
    document.getElementById("budget").style.display = "none";
    document.getElementById("credit").style.display = "none";
    document.getElementById("loan").style.display = "none";
    document.getElementById("investment").style.display = "block";
}
*/
