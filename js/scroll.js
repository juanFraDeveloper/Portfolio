/*========================

SCROLL JAVASCRIPT CODE
AUTHOR: JUAN FRANCISCO LOPEZ

========================*/

/*========================
variables
========================*/
var ancho = window.innerWidth;

/*========================
General
========================*/
$(document).ready(function(){
	setTimeout( () => {
		$(".cont-iam").css('transform', 'scaleY(1)');
		setTimeout( () => {
			$(".changeIam1").css('transform', 'translateX(0%)');
			$(".changeIam1").css('opacity', '1');
		}, 700);
		setTimeout( () => {
			$(".changeIam2").css('transform', 'translateX(0%)');
			$(".changeIam2").css('opacity', '1');
		}, 900);
		setTimeout( () => {
			$(".changeIam3").css('transform', 'translateX(0%)');
			$(".changeIam3").css('opacity', '1');
		}, 1100);
		setTimeout( () => {$("#btnHeader").css('transform', 'scale(1)');}, 1300);
	}, 200);
	
});

/*========================
DOM
========================*/
window.addEventListener('scroll', () => {
	var alto = window.innerHeight/1.4;
	$(document).ready(function(){

		var block = document.querySelector("#block1");
		var alturaBlock1 = block.getBoundingClientRect().top;
		if(alturaBlock1 <= alto){
			if(nav == 0){
				//========== show nav ==========//
				$("nav").css('top', '-60px');
				setTimeout( () => {
					$("nav").css('transition', '.3s');
					$("nav").css('top', '0');
					$("nav").css('position', 'fixed');
					$("nav").css('boxShadow', '0 3px 5px rgba(184, 232, 210, .3)');
					$("nav").css('backgroundColor', '#030F22');
					if(ancho > 470){
						$(".changeTopLogo").css('top', '11px');
					}
					//$(".colorChange").css('background', 'linear-gradient(270deg, transparent, #273746)');
				}, 200);
				nav=1;
			}
			/*========== Block 1 ==========*/
			$(".up").css('transform', 'scale(1)');
			$(".cont-redes-bottom").css('transform', 'scaleY(1)');
			$(".cont-redes-bottom").css('opacity', '1');

			setTimeout( () => {$(".scroll1Block1").css('transform', 'scale(1)');}, 300);
			setTimeout( () => {
				$(".scroll2Block1").css('transform', 'translateX(0%)');
				$(".scroll2Block1").css('opacity', '1');
			}, 700);
			setTimeout( () => {$(".scrollLine1").css('transform', 'scaleX(1)');}, 700);
			setTimeout( () => {
				$(".scroll3Block1").css('transform', 'scaleX(1)');
				$(".scroll3Block1").css('opacity', '1');
			}, 1100);
			setTimeout( () => {$("#btnCV").css('transform', 'scale(1)');}, 1100);
			if(ancho > 980){
				setTimeout( () => {$(".cont-profile-image").css('transform', 'scale(.9)')}, 1300);
			}else{
				if(ancho < 667){
					setTimeout( () => {$("#imgResponsive").css('opacity', '1');}, 1300);
				}else{
					setTimeout( () => {$(".cont-profile-image").css('transform', 'scale(.7)');}, 1300);
				}	
			}	
		}else{
			//========== hide nav ==========//
			$("nav").css('transition', 'none');
			$("nav").css('position', 'initial');
			$("nav").css('position', 'absolute');
			$("nav").css('top', '0');
			$("nav").css('boxShadow', '0 3px 5px rgba(0,0,0,0)');
			$("nav").css('backgroundColor', 'rgba(0,0,0,0)');
			if(ancho > 470){
				$(".changeTopLogo").css('top', '6px');
			}
			//$(".colorChange").css('background', '#fff');
			$(".up").css('transform', 'scale(0)');
			$(".cont-redes-bottom").css('transform', 'scaleY(0)');
			$(".cont-redes-bottom").css('opacity', '0');
			nav=0;
		}

		/*========== Block 2 ==========*/
		var block2 = document.querySelector("#block2");
		var altoBlock2 = block2.getBoundingClientRect().top;

		if(altoBlock2 <= alto){
			setTimeout( () => {
				$(".scroll1Block2").css('transform', 'translateX(0%)');
				$(".scroll1Block2").css('opacity', '1');	
			}, 200);
			setTimeout( () => {$(".scrollLine2").css('transform', 'scaleX(1)');}, 500);
			setTimeout( () => {
				$(".scroll2Block2").css('transform', 'scaleX(1)');
				$(".scroll2Block2").css('opacity', '1');
				$(".projects").css('opacity', '1');	
			}, 800);
			setTimeout( () => {
				$(".scrollProject1").css('transform', 'scale(1)');
			}, 1700);
			setTimeout( () => {$(".scrollProject2").css('transform', 'scale(1)');}, 1900);
			setTimeout( () => {$(".scrollProject3").css('transform', 'scale(1)');}, 2300);
		}
		/*========== Block 3 ==========*/
		var block3 = document.querySelector("#block3");
		var altoBlock3 = block3.getBoundingClientRect().top;

		if(altoBlock3 <= alto){
			setTimeout( () => {
				$(".scroll1Block3").css('transform', 'scale(1)');
				$(".scroll1Block3").css('opacity', '1');
			}, 200);
			setTimeout( () => {$(".scrollLine3").css('transform', 'scaleX(1)')}, 700);
			setTimeout( () => {
				$(".scroll2Block3").css('transform', 'scaleX(1)');
				$(".scroll2Block3").css('opacity', '1');
			}, 900);

			//Skill icons
			setTimeout( () => {
				$(".scroll1Skill").css('transform', 'translateY(0%)');
				$(".scroll1Skill").css('opacity', '1');
				setTimeout( () => {$(".scrollLineSkill1").css('width', '100%');}, 400);
			}, 1000);
			setTimeout( () => {
				$(".scroll2Skill").css('transform', 'translateY(0%)');
				$(".scroll2Skill").css('opacity', '1');
				setTimeout( () => {$(".scrollLineSkill2").css('width', '100%');}, 400);
			}, 1200);
			setTimeout( () => {
				$(".scroll3Skill").css('transform', 'translateY(0%)');
				$(".scroll3Skill").css('opacity', '1');
				setTimeout( () => {$(".scrollLineSkill3").css('width', '100%');}, 400);
			}, 1500);
			setTimeout( () => {
				$(".scroll4Skill").css('transform', 'translateY(0%)');
				$(".scroll4Skill").css('opacity', '1');
				setTimeout( () => {$(".scrollLineSkill4").css('width', '100%');}, 400);
			}, 1800);
			setTimeout( () => {
				$(".scroll5Skill").css('transform', 'translateY(0%)');
				$(".scroll5Skill").css('opacity', '1');
				setTimeout( () => {$(".scrollLineSkill5").css('width', '100%');}, 400);
			}, 2100);
			setTimeout( () => {
				$(".scroll6Skill").css('transform', 'translateY(0%)');
				$(".scroll6Skill").css('opacity', '1');
				setTimeout( () => {$(".scrollLineSkill6").css('width', '100%');}, 400);
			}, 2400);
			setTimeout( () => {
				$(".scroll7Skill").css('transform', 'translateY(0%)');
				$(".scroll7Skill").css('opacity', '1');
				setTimeout( () => {$(".scrollLineSkill7").css('width', '100%');}, 400);
			}, 2700);
		}
		/*========== Block 4 ==========*/
		var block4 = document.querySelector("#block4");
		var altoBlock4 = block4.getBoundingClientRect().top;
		if(altoBlock4 <= alto){
			setTimeout( () => {
				$(".scroll1Block4").css('transform', 'translateX(0%)');
				$(".scroll1Block4").css('opacity', '1');
			}, 200);
			setTimeout( () => {$(".scrollLine4").css('transform', 'scaleX(1)')}, 700);
			$(".cont-redes-bottom").css('opacity', '0');
			setTimeout( () => {
				$("footer").css('opacity', '1');
				$(".scroll1Block5").css('transform', 'scale(1)');
			}, 200);
		}else{
			$(".cont-redes-bottom").css('opacity', '1');
		}

	});//end ready
});//end window scroll