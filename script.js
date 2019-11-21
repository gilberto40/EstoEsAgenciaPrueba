$(document).ready(function () {
        // if(screen.width>768){
        //     $('._carrusel').show();
        // }
       
        $('#4').hide();
        $('#5').hide();

        $('#b2').click(function(){
            $('#1').hide();
            $('#4').show();
        })

        $('#b3').click(function(){
            $('#2').hide();
            $('#5').show();

        })

        $('#b1').click(function(){
            $('#5').hide();
            $('#4').hide();
            $('#1').show();
            $('#2').show();
        })

       









});