//JavaScript
	var audio;
$(function(){	

	// asigna la altura de page y page tiene la funcion para calcular el alto
	document.addEventListener("deviceready",function(){
		audio= window.plugins.LowLatencyAudio; //construye la variable audio a un objeto
    	//audio.preloadFX('id', 'ubicacion', que se hace si carga Bien el sonido, que voy a hacer si carga mal el sonido);
		audio.preloadFX('do','audio/DO.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('re','audio/RE.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('mi','audio/MI.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('fa','audio/FA.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('sol','audio/SOL.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('la','audio/LA.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('si','audio/SI.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Do','audio/Do-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Re','audio/Re-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Mi','audio/Mi-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Fa','audio/Fa-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Sol','audio/Sol-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('La','audio/La-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Si','audio/Si-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		
		audio.preloadFX('doS', 'audio/DO#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('reS', 'audio/RE#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('faS', 'audio/FA#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('solS', 'audio/SOL#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('laS', 'audio/LA#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('doSS', 'audio/DO#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('reSS', 'audio/RE#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('faSS', 'audio/FA#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('solSS', 'audio/SOL#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});
        audio.preloadFX('laSS', 'audio/LA#.mp3', function(){}, function(msg){alert ('Error: ' + msg);});

		$('.nota').bind('touchstart', function(){//bind escucha cualquier evento, 'touchstart'para donde den tap en la nota
			$(this).addClass('tocada');//funcionalidad css que agrega clase
			audio.play($(this).attr('id'));//play()reproducir la nota, $(this).attr('id') el atributo de quien lo invoco y lo reproduce	
			}).bind('touchend',function(){//cierra nota .bind
					$(this).removeClass('tocada');
				});//bind
				
		 $('.nota1').bind('touchstart', function(){
             $(this).addClass('tocada');
            audio.play($(this).attr('id'));
            }).bind('touchend', function(){
               $(this).removeClass('tocada');
              });
	},false); //deviceready
});//ready