$(document).ready(function(){

  function revealText(event){
      event.preventDefault();
      $('#show-this-on-click').removeClass('hide');
    }

  function revealText(event){
      event.preventDefault();
      $('#learnmoretext').removeClass('hide');
    }

    function hideText(event){
        event.preventDefault();
        $('.readless').addClass('hide');
      }

$('.readmore a').on('click', revealText);
$('.learnmore').on('click', revealText);
$('.readless hide a').on('click', hideText);


});
