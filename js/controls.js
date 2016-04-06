var m640 = window.matchMedia( "(min-width: 640px)" );
var m768 = window.matchMedia( "(min-width: 768px)" );
var m992 = window.matchMedia( "(min-width: 992px)" );
var m1280 = window.matchMedia( "(min-width: 1280px)" );

if(m1280.matches) {
  var iniSpace = 277; // Define a altura em pixels em que o menu será fixado
  var space = 190; // Define a quantidade de pixels a ser diminuida do scroll
  var size = 1280; // Controle de resolução

}else if(m992.matches) {
  var iniSpace = 236;
  var space = 168;
  var size = 992;

}else if(m768.matches) {
  var iniSpace = 196;
  var space = 140;
  var size = 768;

} else if(m640.matches){
  var iniSpace = 120;
  var space = 108;
  var size = 640;
}else{  
  var iniSpace = 120;
  var space = 108;
  var size = 640;
}
	

$(document).ready(function(){

	//$('#debug').html('iniSpace: '+iniSpace+"<br>Space: "+space+"<br>Size: "+size);

	$('#menu').affix({
	  offset: {
		top: iniSpace
	  }
	});

	$('#menu').on('affix.bs.affix', function(){
		// Defino o tamanho em pixels a ser diminuido do scroll (sem os pixels do menu)
        switch(size){
			case 1280: space = 95; break;
			case 992: space = 84; break;
			case 768: space = 70; break;
			case 640: space = 54; break;
			default: space = 54;
		}
		// Mostro a logo quando o scroll passa pelo menu
		$('.navbar-brand').css('visibility','visible');
    });

	$('#menu').on('affixed-top.bs.affix', function(){
		// Defino o tamanho em pixels a ser diminuido do scroll(contando com os pixels do menu)
        switch(size){
			case 1280: space = 190; break;
			case 992: space = 168; break;
			case 768: space = 140; break;
			case 640: space = 108; break;
			default: space = 108;
		}
		// Retiro a logo do menu quando o scroll chega no topo
		$('.navbar-brand').css('visibility','hidden');
    });
	
	$('.foto01').alertOnClick({
		'image': 'img/foto1.jpg',
		'imageWidth': '100%',
		'size': 'lg'
	});
	$('.foto02').alertOnClick({
		'image': 'img/foto2.jpg',
		'imageWidth': '100%',
		'size': 'lg'
	});
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length){
		// Retiro o menu collapse após o click
		$('#collapse').removeClass('in');
		
        $('html, body').animate({
          scrollTop: target.offset().top - space
        }, 1000 /*,
			'swing',
			function(){
				$('#debug').html('iniSpace: '+iniSpace+"<br>Space: "+space+"<br>Size: "+size);
			}*/);
		return false;
      }
    }
  });
});
