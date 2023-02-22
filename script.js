function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
msg.innerHTML= `Agora são ${hora} horas.
`
if (hora>=0 && hora<12) {
    img.src ='fotomanha.png'
    document.body.style.background='#c2cd91'
    // bom dia 
} else if ( hora>=12 && hora<18){
    img.src = 'fototarde.png'
    document.body.style.background='#b9846f'
    // boa tarde 
} else {
    img.src ='fotonoite.png'
    document.body.style.background='#515154'
}

}
