

function resumen(){

    var cantidadEntradas = document.getElementById("CantidadEntradas").value
        console.log (cantidadEntradas)

    const botonCalcular = document.getElementById("botonCalcular")

    const categoria = document.getElementById("inputState").value
        console.log (categoria)
   
    var totalCompra = cantidadEntradas * 200
        console.log (totalCompra)

    if (categoria=="1"){
        
        var resultadoTotal= (totalCompra * 0.20);
            console.log (resultadoTotal);
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Total a Pagar: $ " + resultadoTotal;

    } else if (categoria=="2"){

        var resultadoTotal= (totalCompra * 0.50);
            console.log (resultadoTotal);
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Total a Pagar: $ " + resultadoTotal;

    } else if (categoria=="3"){

        var resultadoTotal= (totalCompra * 0.85);
            console.log (resultadoTotal);
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Total a Pagar: $ " + resultadoTotal;

    } 

}

