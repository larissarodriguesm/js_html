// const lista = Array.from(document.getElementsId("lista").children)
const lista = [...document.getElementsId("lista").children]

lista.forEach((item) => {

    item.onclick = concluir
})

function concluir(evento) {
    evento.target.classList.toggle("concluido")
}


