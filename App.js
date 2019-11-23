$('.poerfolio').each(function(index) {
    $(this).after('id', 'img' + (index + 1))
});

$('.poerfolio').each(function() {
    $('#navi').append('<div class="circle"></div>')
});

$('.circle').each(function(index) {
   $(this).attr('id', 'circle' + (index + 1));
});

$('.poerfolio').click(function() {
    if($(this).hasClass)('opened'){
        $(this).removeClass('opened');
        $(".poerfolio").fadeIn("fast");
        $(this).find('.ombra').fadeOut();
        $("#circle" + index).addClass('activenav');

    }
    
});



