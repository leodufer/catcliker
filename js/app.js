/*
*dato el proyecto catclicker declarar una variable cat 
con los atributos name, photo, voteup, votedown
asignar los valores del modelo datos a la estructura 
html e implementar los eventos clik para el incremento 
o decremento de los votos
*/

var cat = {
	name : 'Ruano',
	photo : 'img/cats/1.jpg',
	voteup:10,
	votedown:11
}


function init(){
	showData(cat);
	bindEvent();
}

function showData(cat){

	$('h1').text(cat.name);
	$('img').attr('src',cat.photo);
	$('#up span').text(cat.voteup);
	$('#down span').text(cat.votedown);
}


function clickUp(){
	cat.voteup++;
	$('#up span').text(cat.voteup);
}

function clickDown(){
	cat.votedown++;
	$('#down span').text(cat.votedown);
}


function bindEvent(){
	$('#up').click(clickUp);
	$('#down').click(clickDown);	
}

init();
