/*PROFE NO SUPE COMO VOLVER A REPREGUNTAR PARA QUE SE VUELVA A GENERAR EL CICLO, DE TODAS MANERAS QUERIA QUE QUEDE REGISTRADO EN TABLA TODAS LAS RE CONSULTAS DE DIVISAS*/
let miArray = []
function preguntar(){
    let divisa = prompt("Ingrese Divisa a convertir en Ars")
    if(divisa == "dolar"){
        alert("Valor Ars 1130 " + divisa)
        while(divisa == "dolar"){
            miArray.push(divisa)
            divisa = prompt("ingresa otra divisa o apretá cancelar para finalizar" )
        }
        console.table(miArray)
    }if(divisa == "euro"){
        alert("Valor Ars 1237.24 " + divisa)
        while(divisa == "euro"){
            miArray.push(divisa)
            divisa = prompt("ingresa otra divisa o apretá cancelar para finalizar" )
        }
        console.table(miArray)
    }if(divisa == "real"){
        alert("Valor Ars 232.33 " + divisa)
        while(divisa == "real"){
            miArray.push(divisa)
            divisa = prompt("ingresa otra divisa o apretá cancelar para finalizar" )
        }
        console.table(miArray)
    }if(divisa == "yuan"){
        alert("Valor Ars 158.61 " + divisa)
        while(divisa == "yuan"){
            miArray.push(divisa)
            divisa = prompt("ingresa otra divisa o apretá cancelar para finalizar" )        
        }
        console.table(miArray)
        }
    }
preguntar()




