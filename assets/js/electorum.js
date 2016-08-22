var $firstStep,
    $secondStep,
    $status,
    i = 0,
    $alert_message_demo

    ;

$(document).ready(function(){
    //$('select.select2-list').select2();
    $firstStep = $("#firstStep");
    $secondStep = $("#secondStep");
    $status = $("#status");


    $alert_message_demo = $(".alert-message-demo");
    $alert_message_demo.click(function(event){
        event.preventDefault();
        alert("Esta función no esta disponible en el demo");
    });

});

function analizarFake(){
    $firstStep.hide();
    $secondStep.show();

    $status.text("24");
    var i = 23;

    function myLoop () {
        setTimeout(function () {
            $status.text(i);
            if (i >= 1) {
                i--;
                myLoop();
            }else{
                setTimeout(function(){
                    window.location.href = "/distritos.html";
                }, 300);
            }
        }, 300)
    }
    myLoop();
}