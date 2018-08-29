
$('#menuButton').click(function(){
        $('.menu'). animate({"left":"0px"}, 500);
       });

$('.closeButton').click(function(){
        $('.menu').animate({"left":"-200px"}, 500);
});


$('#btn').click(function(){
	let artist = $('#artist').val()
	let link = "http://www.musicroamer.com/#/search?artist=" + artist;
    window.location.assign(link);
});



function rotateForEver($elem, rotator) {
    if (rotator === void(0)) {
        rotator = $({deg: 0});
    } else {
        rotator.get(0).deg = 0;
    }

    return rotator.animate(
        {deg: 360},
        {
            duration: 5000,
            easing: 'linear',
            step: function(now){
                $elem.css({transform: 'rotate(' + now + 'deg)'});
            },
            complete: function(){
                rotateForEver($elem, rotator);
            },
        }
    );
}


$(function() {
    var $rotator = rotateForEver($('#vinyl'));
    $('#vinyl').click(function() {
        $rotator.stop();
    });
});

