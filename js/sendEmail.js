$('#enviarCorreo').click(function() {
	let campoUno = $('#tipoConsulta').val(),
	campoDos = $('#consulta').val(),
	campoTres = $('#phone').val(),
	campoCuatro = $('#email').val(),
	campoCinco = $('#text').val();
	if (
		campoUno != '' &&  
		campoDos != '' && 
		campoTres != '' &&  
		campoCuatro != '' && 
		campoCinco != '') {

		$.ajax({
			type:'post',
			url:'https://byteflowpos.online/correo.php',
			data:{campoUno:campoUno,campoDos:campoDos,campoTres:campoTres, campoCuatro:campoCuatro, campoCinco:campoCinco},
			success: function(res){
				console.log( res );
			}
		})
	}else{
		alert('estan vacios')
	}
})