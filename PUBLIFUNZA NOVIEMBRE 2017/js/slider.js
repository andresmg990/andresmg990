//almacenar slider en una variable
var slider = $('#slider');

//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

$('#slider section:last').insertBefore('#slider section:first');

//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');


function moverD() {
	slider.animate({marginLeft:'-'+200+'%'},700, function(){
	$('#slider section:first').insertAfter('#slider section:Last');
	slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({marginLeft:0},700, function(){
	$('#slider section:last').insertBefore('#slider section:First');
	slider.css('margin-left', '-'+100+'%');
	
	});
}

siguiente.on('click', function() {
	moverD();
});

anterior.on('click', function() {
	moverI();
});

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 10000);
}

autoplay();