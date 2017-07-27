var HTMLimages = "";
for(var n = 1; n<=151; n++){
    HTMLimages += '<img src="http://pokeapi.co/media/img/'+n+'.png" alt="pokeman '+n+'">'
}



$(document).ready(function(){
    $("#poketainer").append(HTMLimages);


})