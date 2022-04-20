function imgSlider(anything) {
    document.querySelector('.pepsi').src = anything
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function NewImage(novaimagem) {
    document.querySelector('.logo').src = novaimagem
}

function NewText_1() {
    document.querySelector('.textBox').innerHTML = '<div class="textBox"> <h2>É DISSO QUE EU<br> <span>GOSTO!</span></h2> <p>A #PepsiClássica é toda trabalhada no seu sabor intenso e refrescante, para aqueles dias de calor. Tudo isso para deixar até as pessoas que não gostão de refrigerante com água na boca 🤤 #TomaEssa</p> <a href="#">Ver Produtos!</a> </div> '
}

function NewText_2() {
    document.querySelector('.textBox').innerHTML = '<div class="textBox"> <h2>É DISSO QUE EU<br> <span>GOSTO!</span></h2> <p>A #PepsiDiet é para você que quer consumir menos açúcares e não quer perder aquele sabor intenso e refrescante que toda #Pepsi tem. Só de pensar nisso já estou com água na boca 🤤 <br> #TomaEssa</p> <a href="#">Ver Produtos!</a> </div> '
}

function NewText_3() {
    document.querySelector('.textBox').innerHTML = '<div class="textBox"> <h2>É DISSO QUE EU<br> <span>GOSTO!</span></h2> <p>A nova #PepsiBlack é toda trabalhada na beleza e no seu sabor intenso. Tudo isso para deixar até as pessoas que fazem cara feia quando quebram as regras na hora de comer 🤤 com água na boca 🤤 #TomaEssa</p> <a href="#">Ver Produtos!</a> </div> '
}


function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

