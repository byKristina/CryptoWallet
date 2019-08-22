 var data3 = [
  {
	icon : "fa fa-building-o",
    title : "$50B+",
    text : "IN DIGITAL CURRENCY EXCHANGED",
  },
  {
	icon : "fa fa-globe",
    title : 32,
    text : "COUNTRIES SUPPORTED",
  },
 {
	icon : "fa fa-users",
    title : "10M+",
    text : "CUSTOMERS SERVED",
  }
]


var ispis = "" ;

for(var i = 0; i < data3.length; i++){
	ispis += '<div class="col-lg-4"><i class="' + data3[i].icon +'" aria-hidden="true"></i><h3>' + data3[i].title + '</h3><p class="lead mb-0">' + data3[i].text + '</p></div>';
		 }

document.querySelector("#ispisi").innerHTML += ispis;


//select found text

function findString (str) {
	if(this.t1.value!=null && this.t1.value!=''){
 var strFound;
 if (window.find) {

  strFound=self.find(str);
  if (!strFound) {
   strFound=self.find(str,0,1);
   while (self.find(str,0,1)) continue;
  }
 }

 if (!strFound) alert ("String '"+str+"' not found!")
 return;
  }
}

//slider
window.onload = function(){
	var image= document.querySelector("#slider");
	var imgArray =["img/bitcoin.png","img/ethereum.png", "img/ripple.png"];
	var index = 0;
function slider()
{
 image.setAttribute("src",imgArray[index]);
 index++;
 if(index >= imgArray.length)
 {
 index=0;
 }
}
setInterval(slider,1500);
}

$(document).ready(function(){
//accordion	
	$('.accordion-header').toggleClass('inactive-header');
	
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({'width' : contentwidth });
	
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');

	$('.accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	
	  

	  
//zoom team member

$('.team-member img').hover(function(){

        $(this).animate({width: '+=15px',height: '+=15px'}, 500).css({'cursor': 'pointer'});

   }, function(){

        $(this).animate({width: '-=15px',height: '-=15px'}, 500);

   });


//sign-in
	
    $('#sign-in-readmore').click(function(e){
       e.preventDefault();

       if($('#sign-in-details').is(':visible')){
           $('#sign-in-details').slideUp('slow');
		      $(this).val('Show more');
		
       } else {
           $('#sign-in-details').slideDown('slow');
		   $(this).val('Show less');
       }
   });
   

   //expand menu for smaller devices
$('#navbar').css({display: "none"});

 $('.navbar-toggle').click(function(e){
       e.preventDefault();

       if($('#navbar').is(':visible')){
           $('#navbar').slideUp();
         
       } else {
           $('#navbar').slideDown();
       }
   });
	
// scrolling
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	
	
	$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top -50
	}, 500, 'linear');
});	
	
	
});
