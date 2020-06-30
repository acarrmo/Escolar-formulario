window.addEventListener("load", function(){

	var registro = document.getElementById("boton");
	boton.addEventListener("click",function(e){
		var valida = validaCampos();

		if (!valida){
			e.preventDefault();
		}
	});
});

function validaCampos(){

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var correo = document.getElementById('correo').value;
	var alerta = '';
	var camposValidados = true;

	if (nombre.length == 0){
		alerta += 'Nombre requerido';
	}

	if (apellido.length == 0){
		alerta += 'Apellido requerido';
	}


	if (correo.length == 0){
		alerta += 'Correo requerido';
	}

	if (alerta.length !=0){
		camposValidados = false;
		alerta(alerta);
	}

	return camposValidados
}

