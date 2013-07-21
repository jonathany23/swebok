$(document).ready(function(){
	start();

});

function start() {  
  onSelectChange();
}

function onSelectChange(){
	$.getJSON('data.json',
	function(data){
		log.info('hola');
	});
}

/*$.getJSON('data.json',
	function(data){
		$.each(data.areas, 
			function(i, item){
				if (item.length > 0) {
					for (var i = 0; i < item.length; i++) {
						$("nav nav-list").append("<li><a href='#'>"+item[i].name+"</a></li>")
					}
				} else{}
			});
	});*/