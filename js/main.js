const form = document.getElementById("#container")
let dia = document.getElementById("dia")
dia.addEventListener("input", () =>{
    console.log(dia.value)
})

let mes = document.getElementById("mes")
mes.addEventListener("input", () =>{
    console.log(mes.value)
})

let descripcion = document.getElementById("descripcion")
descripcion.addEventListener("input", () =>{
    console.log(descripcion.value)
})


    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML= `
    <p>Tu día: ${dia} </p>
    <p>Del mes: ${mes} </p>
    <h4>Tenés lo siguiente: ${descripcion} </h4>
    `
    container.appendChild(card)

/*Tuve que cambiar todo el codigo a ultimo momento, tenia todo con prompt y con boton, ahora no puedo hacer andar el form*/