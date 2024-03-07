const lista = []

const agregarRegistro = (event)=>{
    event.preventDefault()

    let nombre = document.getElementById("nombre")
    let email = document.getElementById("email")
    let direccion = document.getElementById("direccion")
    let problema = document.getElementById("problema")

    let registro = {
        nombre: nombre.value,
        email: email.value,
        direccion: direccion.value,
        problema: problema.value,
        id: lista.length
    }

    lista.push(registro)
    mostrarRegistros()
}

const mostrarRegistros = ()=>{
    let salida = document.getElementById("salida")
    salida.innerHTML=``

    lista.map((registro)=>{
        salida.innerHTML+=`
        <tr>
            <td>${registro.id}</td>
            <td>${registro.nombre}</td>
            <td>${registro.email}</td>
            <td>${registro.direccion}</td>
            <td>${registro.problema}</td>
        </tr>
        `
    })
}