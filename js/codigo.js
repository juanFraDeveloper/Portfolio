/*========================

JAVASCRIPT CODE
AUTHOR: JUAN FRANCISCO LOPEZ

========================*/

/*========================
VARIABLES
========================*/
var ancho = window.innerWidth;
var nav = 0;
var nav2 = 0;
var active = 0;
var activeBefore = '#line-active1';
var turno = 1;

/*========================
GENERAL
========================*/
$(document).ready(function(){
	if(ancho < 801){
		$('#fondo_ilustracion').attr('src', 'img/fondo(movil).png');
		$('#estrellas').attr('src', 'img/estrellas(movil).png');
	}
});

/*========================
FUNCTIONS
========================*/

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
				$("#cont-nav2").css('backgroundColor', 'rgba(10, 34, 72, .7)');
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
function funMostrarFoto1(){
	$('#fondo_ilustracion').attr('src', 'img/fondo(movil).png');
	$('#estrellas').attr('src', 'img/estrellas(movil).png');
	$('#imgResponsive').css('display', 'block');
}
function funMostrarFoto2(){
	$('#fondo_ilustracion').attr('src', 'img/fondo.png');
	$('#estrellas').attr('src', 'img/estrellas.png');
	$(".cont-profile-image").css('transform', 'scale(.7)');
	$('#imgResponsive').css('display', 'none');
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

//Phone rotation
window.matchMedia('(orientation: portrait)').addListener(function(m){
	$(document).ready(function(){
		if(ancho < 667){
			if(m.matches){
				//movil screen
				funMostrarFoto1();
			}else{
				//portatil screen
				funMostrarFoto2();
			}
		}
		if(ancho < 500){
			if(m.matches){
				document.querySelector('#efecto_name span').style.fontSize = '40px';
				$('#cont-name').css('height', '70vh');
				$('#cont-name').css('paddingTop', '30vh');
				funMostrarFoto1();
			}else{
				document.querySelector('#efecto_name span').style.fontSize = '35px';
				$('#cont-name').css('height', '75vh');
				$('#cont-name').css('paddingTop', '25vh');
				funMostrarFoto2();
			}
		}
		if(ancho < 470){
			if(m.matches){
				document.querySelector('#efecto_name span').style.fontSize = '35px';
				$('#cont-name').css('height', '70vh');
				$('#cont-name').css('paddingTop', '30vh');
				funMostrarFoto1();
			}else{
				document.querySelector('#efecto_name span').style.fontSize = '30px';
				$('#cont-name').css('height', '85vh');
				$('#cont-name').css('paddingTop', '15vh');
				funMostrarFoto2();
			}
		}
		if(ancho < 400){
			if(m.matches){
				$('#fondo_ilustracion').attr('src', 'img/fondo(movil).png');
				$('#estrellas').attr('src', 'img/estrellas(movil).png');
				$('#imgResponsive').css('display', 'block');
			}else{
				$('#fondo_ilustracion').attr('src', 'img/fondo.png');
				$('#estrellas').attr('src', 'img/estrellas.png');
				$('#imgResponsive').css('display', 'block');
			}
		}
	});
});