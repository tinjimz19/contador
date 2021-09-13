$(function () {
    /* =========================================
        COUNTDOWN 4
     ========================================= */

    $('#clock-c').countdown('2030/1/1').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%m</span> mese%!m'
        + '<span class="h1 font-weight-bold">%d</span> Dia%!d'
        + '<span class="h1 font-weight-bold">%H</span> Hr'
        + '<span class="h1 font-weight-bold">%M</span> Min'
        + '<span class="h1 font-weight-bold">%S</span> Sec'));
    });

    /* =========================================
        CALL TO ACTIONS FOR COUNTDOWN
     ========================================= */
    $('#btn-pause').click(function() {
        $('#clock-c').countdown('pause');
    });
    $('#btn-resume').click(function() {
        $('#clock-c').countdown('resume');
    });

});