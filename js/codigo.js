/*========================

JAVASCRIPT CODE
AUTOR: JUAN FRANCISCO LOPEZ

========================*/

/*========================
VARIABLES
========================*/
const contSlider = document.querySelector(".projects");
const btnLEFT = document.querySelector("#btn-slider-left");
const btnRIGHT = document.querySelector("#btn-slider-right");
var ancho = window.innerWidth;
var nav = 0;
var nav2 = 0;
var active = 0;
var activeBefore = '#line-active1';
var turno = 1;
var valorSlider = -720;

/*========================
GENERAL
========================*/
if(ancho < 1151 && ancho > 790){
	contSlider.style.marginLeft = '-360px';
	btnLEFT.style.display = 'none';
}
$(document).ready(function(){
	if(ancho < 801){
		$('#fondo_ilustracion').attr('src', 'img/fondo(movil).png');
		$('#estrellas').attr('src', 'img/estrellas(movil).png');
	}
});

/*========================
FUNCTIONS
========================*/
function funSlidesLeft(){
	if(turno == 1){
		contSlider.style.marginLeft = '-360px';
		btnLEFT.style.display = 'none';
		btnRIGHT.style.display = 'block';
		contSlider.style.transition = 'all .7s';
		funBTNSlider();
		
	}
}
function funSlidesRight(){
	if(turno == 1){
		contSlider.style.marginLeft = '0';
		btnLEFT.style.display = 'block';
		btnRIGHT.style.display = 'none';
		contSlider.style.transition = 'all .7s';
		funBTNSlider();
	}
}
function funBTNSlider(){
	turno = 0;
	setTimeout( () => {turno = 1;}, 700);
}
//NAV
function funActiveNav(dato){
	var datoId = '#line-'+dato;
	$(document).ready(function(){
		$(activeBefore).css('transform', 'translateX(-100%)');
		$(activeBefore).css('opacity', '0');
		$(datoId).css('transform', 'translateX(0%)');
		$(datoId).css('opacity', '1');
		activeBefore = datoId;
	});
}
//NAV2
function funShowNa2(){
	$(document).ready(function(){
		if(nav2 == 0){
			$(".contNavUl2").css('display', 'block');
			setTimeout( () => {
				$("#cont-nav2").css('backgroundColor', '#808B96');
				$(".nav2").css('opacity', '1');
				$(".open").css('opacity', '0');
				$(".close").css('opacity', '1');
			},100)
		
			nav2=1;
		}else if(nav2 == 1){
			funHideNav2();
		}
	});
}
function funHideNav2(){
	$(document).ready(function(){
		$(".open").css('opacity', '1');
		$(".close").css('opacity', '0');
		$(".nav2").css('opacity', '0');
		$("#cont-nav2").css('backgroundColor', 'rgba(0,0,0,0)');
		setTimeout( () => {$(".contNavUl2").css('display', 'none');},500)
		nav2=0;
	})
}
/*========================
DOM
========================*/
window.addEventListener('scroll', () => {
	let value = window.scrollY;

	if( value > 0 ){
		document.getElementById('efecto_name').style.transform = 'scale(0)';
		document.querySelector('.btn-header').style.transform = 'scale(0)';
		document.getElementById('efecto_name').style.opacity = '0';
		document.querySelector('.btn-header').style.opacity = '0';
	}else{
		document.getElementById('efecto_name').style.transform = 'scale(1)';
		document.querySelector('.btn-header').style.transform = 'scale(1)';
		document.getElementById('efecto_name').style.opacity = '1';
		document.querySelector('.btn-header').style.opacity = '1';
	}

	document.getElementById('estrellas').style.left = value * 0.25 + 'px';
	document.getElementById('planeta_1').style.top = value * 0.5 + 'px';
	document.getElementById('planeta_2').style.top = value * 0.7 + 'px';
	document.getElementById('planeta_3').style.top = value * 0.8 + 'px';
});
btnRIGHT.addEventListener('click', funSlidesRight);
btnLEFT.addEventListener('click', funSlidesLeft);

//Rotacion del telefono
window.matchMedia('(orientation: portrait)').addListener(function(m){
	$(document).ready(function(){
		if(ancho > 667 && ancho < 791){
			if(m.matches){
				contSlider.style.marginLeft = 'auto';
				btnLEFT.style.display = 'none';
				btnRIGHT.style.display = 'none';
			}else{
				contSlider.style.marginLeft = '-360px';
				btnLEFT.style.display = 'none';
				btnRIGHT.style.display = 'block';
			}
		}
		if(ancho < 667){
			if(m.matches){
				//ventana movil
				$('#fondo_ilustracion').attr('src', 'img/fondo(movil).png');
				$('#estrellas').attr('src', 'img/estrellas(movil).png');
				$('#imgResponsive').css('display', 'block');
				contSlider.style.marginLeft = 'auto';
				btnLEFT.style.display = 'none';
				btnRIGHT.style.display = 'none';
			}else{
				//ventana portatil
				$('#fondo_ilustracion').attr('src', 'img/fondo.png');
				$('#estrellas').attr('src', 'img/estrellas.png');
				$(".cont-profile-image").css('transform', 'scale(.7)');
				contSlider.style.marginLeft = '-360px';
				btnLEFT.style.display = 'none';
				btnRIGHT.style.display = 'block';
			}
		}
	});
});