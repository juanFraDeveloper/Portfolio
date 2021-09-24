/*========================

JAVASCRIPT CODE
AUTOR: JUAN FRANCISCO LOPEZ

========================*/

/*========================
VARIABLES
========================*/
const contSlider = document.querySelector(".projects");
let seccion = document.querySelectorAll(".cont-project");
let sliderLAST = seccion[seccion.length - 1];
const btnLEFT = document.querySelector("#btn-slider-left");
const btnRIGHT = document.querySelector("#btn-slider-right");
var ancho = window.innerWidth;
var nav = 0;
var nav2 = 0;
var active = 0;
var activeBefore = '#line-active1';
var turno = 1;

/*========================
GENERAL
========================*/
contSlider.insertAdjacentElement('afterbegin', sliderLAST);


/*========================
FUNCTIONS
========================*/
function funSlidesLeft(){
	if(turno == 1){
		let section = document.querySelectorAll(".cont-project");
		let sliderLast = section[section.length - 1];
		if(ancho > 470){
			contSlider.style.marginLeft = '0';
		}else{
			contSlider.style.marginLeft = '0%';
		}
		contSlider.style.transition = 'all .7s';
		funBTNSlider();
		setTimeout(function(){
			contSlider.style.transition = 'none';
			contSlider.insertAdjacentElement('afterbegin', sliderLast);
			if(ancho > 470){
				contSlider.style.marginLeft = '-360px';
			}else{
				contSlider.style.marginLeft = '-100%';
			}
		},700)
	}
}
function funSlidesRight(){
	if(turno == 1){
		var cont = document.querySelector(".projects");
		let sliderFirst = document.querySelectorAll(".cont-project")[0]
		if(ancho > 470){
			contSlider.style.marginLeft = '-720px';
		}else{
			contSlider.style.marginLeft = '-200%';
		}
		cont.style.transition = 'all .7s';
		funBTNSlider();
		setTimeout(function(){
			cont.style.transition = 'none';
			cont.insertAdjacentElement('beforeend', sliderFirst);
			if(ancho > 470){
				contSlider.style.marginLeft = '-360px';
			}else{
				contSlider.style.marginLeft = '-100%';
			}
		},700);
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
btnRIGHT.addEventListener('click', () => {
	funSlidesRight();
});
btnLEFT.addEventListener('click', () => {
	funSlidesLeft();
});