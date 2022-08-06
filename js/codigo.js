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
}else if(ancho < 791){
	contSlider.style.marginLeft = '-720px';
	btnLEFT.style.display = 'none';
}

/*==================================
Particulas - Header configuracion
==================================*/
particlesJS(
{
	"particles": {
		"number": {
			"value": 120,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#C3E3F7"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 1,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 4,
				"size_min": 0.3,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 600
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 250,
				"size": 0,
				"duration": 2,
				"opacity": 0,
				"speed": 3
			},
			"repulse": {
				"distance": 400,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
}
);
/*======================*/


/*========================
FUNCTIONS
========================*/
function funSlidesLeft(){
	if(turno == 1){
		if(ancho > 790){
			contSlider.style.marginLeft = '-360px';
			btnLEFT.style.display = 'none';
			btnRIGHT.style.display = 'block';
		}else{
			btnRIGHT.style.display = 'block';
			valorSlider = valorSlider - 360;
			contSlider.style.marginLeft = valorSlider+'px';
			if(valorSlider == -720){
				btnLEFT.style.display = 'none';
			} 
		}
		contSlider.style.transition = 'all .7s';
		funBTNSlider();
		
	}
}
function funSlidesRight(){
	if(turno == 1){
		if(ancho > 790){
			contSlider.style.marginLeft = '0';
			btnLEFT.style.display = 'block';
			btnRIGHT.style.display = 'none';
		}else{
			btnLEFT.style.display = 'block';
			valorSlider = valorSlider + 360;
			contSlider.style.marginLeft = valorSlider+'px';
			if(valorSlider == 0){
				btnRIGHT.style.display = 'none';
			} 
		}
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
btnRIGHT.addEventListener('click', funSlidesRight);
btnLEFT.addEventListener('click', funSlidesLeft);