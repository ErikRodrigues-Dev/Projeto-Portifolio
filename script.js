function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5581985216038'

    const texto = `Olá, Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wame.me/${telefone}&text=${msgFormatada}`

    Window.open(url, '_blank')
}


