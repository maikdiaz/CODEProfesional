(function()
{
	/*alert("holaaa2");*/
})();

function validarCorreo(email)
{
	var correo = document.getElementById('correo').value;

	var expresion=/[a-zA-Z]$/;


    if(! correo.match(expresion) )
    {
    	document.getElementById(email).style.backgroundColor="#FD8986";

    }
    else{
    	document.getElementById(email).style.backgroundColor="#7DBE74";
    }
}


function validarCorreo2()
{
	document.getElementById('correo2').addEventListener('blur',validarCorreo('correo2'),false);
}

addEventListener('load',validarCorreo2,false);