function scrollIni(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' /* smooth suave | auto de uma só vez*/
    })
}

function sumirBotaoScroll(){

        if (scrollY < 01) {
            document.querySelector("button").classList.remove("dpblock")
        } else if (scrollY >= 1) {
            document.querySelector("button").classList.add("dpblock")
        }

}

window.addEventListener('scroll', sumirBotaoScroll )

