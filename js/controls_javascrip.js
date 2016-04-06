var mq = window.matchMedia( "(min-width: 768px)" );
if (mq.matches) {
  // > 786
  var iniSpace = 200;
  var space = 100;
  var percent = '5%';
  var maior = true;
} else {
  // < 786
  var iniSpace = 100;
  var space = 50;
  var percent = '20%';
  var maior = false;
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - space
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
	$('.carousel').carousel({
	  interval: 5000
	});
	
	$('#menu').affix({
	  offset: {
		top: iniSpace
	  }
	});

	$('#menu').on('affix.bs.affix', function(){
        space = 50;
		$('.navbar-brand').css('visibility','visible');
		$('.faceb').css('right',percent);
		$('#collapse').removeClass('in');
    });

	$('#menu').on('affixed-top.bs.affix', function(){
        space = 100;
		$('.navbar-brand').css('visibility','hidden');
		$('.faceb').css('right',percent);
		$('#collapse').removeClass('in');
    });
		
	$('.dqcx1').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.005000099001!2d-43.25997538503831!3d-22.690857785121988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9973f384783f81%3A0xb17b441947c0419d!2sAv.+Vicente+Celestino%2C+704+-+Jardim+Primavera%2C+Duque+de+Caxias+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1456924971722',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.dqcx2').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.705747465257!2d-43.21264797600892!3d-22.619222062538974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990afa9e78f2b1%3A0x9d73ce7e786185d1!2sPra%C3%A7a+Adolfo+David+-+Parada+Ang%C3%A9lica%2C+Duque+de+Caxias+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1456925263782',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.itabr').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4850702955914!2d-42.860505685414076!3d-22.747372985093023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99c00c87de3a03%3A0xfb39b056b60b387a!2sAv.+Vinte+e+Dois+de+Maio%2C+5600+-+Centro%2C+Itabora%C3%AD+-+RJ%2C+24800-097!5e0!3m2!1spt-BR!2sbr!4v1456925484233',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.mage1').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.175560518434!2d-43.1822978454657!3d-22.647242066901722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990aa5c1ff0b1f%3A0xc38cef8d0439fafc!2sAv.+Santos+Dumont%2C+413+-+Parque+Veneza%2C+Mag%C3%A9+-+RJ%2C+25900-000!5e0!3m2!1spt-BR!2sbr!4v1456925971854',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.mage2').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.376011224227!2d-43.17602598541476!3d-22.71426148511001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999e2089fd76e7%3A0xd4cb6cecc2e92223!2sDrogaria+Farmares+de+Mau%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1456926351847',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.mage3').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.906509730007!2d-43.04220868541595!3d-22.65727408513922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a3181525d305%3A0x971f2df5e9eaae5c!2sDROGARIAS+CONCEITO!5e0!3m2!1spt-BR!2sbr!4v1456926588928',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.mage4').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.772513739808!2d-43.13045698541593!3d-22.662268785136703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a1cf043a0db9%3A0x352474fc3fdf8f84!2sR.+Cap.+Jos%C3%A9+de+Paula%2C+322+-+Suru%C3%AD%2C+Mag%C3%A9+-+RJ%2C+25900-000!5e0!3m2!1spt-BR!2sbr!4v1456926661127',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.mage5').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.954795297264!2d-43.040692885415986!3d-22.6554739851402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a33d5d0616bf%3A0x8cb2617dbe11ed23!2sAv.+Sim%C3%A3o+da+Mota%2C+555+-+Vila+Esperanca%2C+Mag%C3%A9+-+RJ%2C+25900-000!5e0!3m2!1spt-BR!2sbr!4v1456927010502',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.mage6').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.695868449239!2d-43.18861538541737!3d-22.59047548517356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990a105338fea3%3A0x5b11b53df3777f56!2sAv.+Autom%C3%B3vel+Clube%2C+3016+-+Fragoso%2C+Mag%C3%A9+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1456927079822',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.rioj1').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.934311631433!2d-43.389362985409775!3d-22.95264618498857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd96a7ecc30d3%3A0xa2ce256418aefc95!2sR.+do+Di%C3%A1logo%2C+10+-+Curicica%2C+Rio+de+Janeiro+-+RJ%2C+22780-730!5e0!3m2!1spt-BR!2sbr!4v1456927340262',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.rioj2').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6180908694546!2d-43.38506818540882!3d-23.001067184963937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdba30ad4b225%3A0x148c8b16d64bceed!2sAv.+das+Am%C3%A9ricas%2C+7607+-+Barra+da+Tijuca%2C+Rio+de+Janeiro+-+RJ%2C+22793-081!5e0!3m2!1spt-BR!2sbr!4v1456927399770',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.rioj3').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5449846120537!2d-43.37864278540869!3d-23.003753784962523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbaf0ae7d367%3A0xabaeee4ea32d79a6!2sR.+Dr.+Poti+Medeiros+-+Barra+da+Tijuca%2C+Rio+de+Janeiro+-+RJ%2C+22793-550!5e0!3m2!1spt-BR!2sbr!4v1456927625185',
	   'size': 'full',
	   'iframeHeight': '75%'
	});

	$('.saqur').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5478974462403!2d-42.47059578541106!3d-22.893153585018762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x975dff5806d5b5%3A0xed9729d6a4e8c6f9!2sR.+Prof.+Francisco+Fonseca%2C+29+-+Bacax%C3%A1%2C+Saquarema+-+RJ%2C+28990-000!5e0!3m2!1spt-BR!2sbr!4v1456927731792',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.tangua').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.821125309038!2d-42.722220985414324!3d-22.734888985099502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99c358fa7ee11f%3A0x5dc06da50cb8cab6!2sR.+Manoel+Jo%C3%A3o+Gon%C3%A7alves%2C+7+-+Vila+Cortes%2C+Tangu%C3%A1+-+RJ%2C+24890-000!5e0!3m2!1spt-BR!2sbr!4v1456928039126',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.tere1').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.103328487438!2d-42.96805038542075!3d-22.42513638525884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b33478c8f0e9%3A0x5b422da0fae33947!2sR.+Pedro+Struchi+-+Bairro+da+S%C3%A3o+Pedro%2C+Teres%C3%B3polis+-+RJ%2C+25955-230!5e0!3m2!1spt-BR!2sbr!4v1456928131025',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.tere2').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.7663582292857!2d-42.981524985420485!3d-22.437818085252307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b32026ac0ba3%3A0x90da8daa36f1850c!2sAv.+Oliveira+Botelho%2C+275+-+Alto%2C+Teres%C3%B3polis+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1456928217111',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.tere3').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3079700724657!2d-42.974971685420904!3d-22.417431485262863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984cd2574a753f%3A0x72dbb0d901669cb5!2zQXYuIEZlbMOtY2lhbm8gU29kcsOpLCA3NzAgLSBWw6FyemVhLCBUZXJlc8OzcG9saXMgLSBSSg!5e0!3m2!1spt-BR!2sbr!4v1455744710775',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.tere4').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.4392976687036!2d-42.968989985421054!3d-22.4124855852654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984cc5f7bb31af%3A0xd7b1a4a04e801f8f!2sAv.+Delfim+Moreira%2C+402+-+V%C3%A1rzea%2C+Teres%C3%B3polis+-+RJ%2C+25953-230!5e0!3m2!1spt-BR!2sbr!4v1456928287565',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.tere5').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.482108151165!2d-42.97041288542113!3d-22.410873085266225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984cc59fab3307%3A0xc21931b7f624f2f5!2sAv.+L%C3%BAcio+Meira%2C+687+-+V%C3%A1rzea%2C+Teres%C3%B3polis+-+RJ%2C+25953-008!5e0!3m2!1spt-BR!2sbr!4v1456928333100',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
	$('.guapi').alertOnClick({
	   'iframe': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4097918436514!2d-42.98457838541876!3d-22.526316985206666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b1a982a5ce23%3A0xcc2d3d8a35ceb76f!2sAv.+Dedo+de+Deus%2C+591+-+Vila+Constancia%2C+Guapimirim+-+RJ%2C+25940-000!5e0!3m2!1spt-BR!2sbr!4v1456928386429',
	   'size': 'full',
	   'iframeHeight': '75%'
	});
});
