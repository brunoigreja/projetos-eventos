const list = document.querySelector('ul')
const buttonShow = document.querySelector(".c-button")
let myLi = ''

function mostraTudo() {
  myLi = ''
  menuOptions.forEach(element => {
    myLi += `<li>
        <img src="${element.src}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>R$ ${element.price}</p>
    </li>`

  });

  list.innerHTML = myLi
}

const buttonMap = document.querySelectorAll('.c-button')[1]
const buttonSum = document.querySelectorAll('.c-button')[2]
const buttonSub = document.querySelectorAll('.c-button')[3]
const buttonDiv = document.querySelectorAll('.c-button')[4]

buttonShow.addEventListener('click', mostraTudo)
buttonMap.addEventListener('click', aplicarDesconto)
buttonSum.addEventListener('click', somarTudo)
buttonSub.addEventListener('click', filtrar)

function aplicarDesconto() {
  myLi = ''
  menuOptions.forEach(element => {
    const precoComDesconto = (element.price * 0.9).toFixed(2)
    myLi += `<li>
        <img src="${element.src}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p class="preco-original">R$ ${element.price}</p>
        <p class="preco-desconto">R$ ${precoComDesconto}</p>
    </li>`

  });

  list.innerHTML = myLi
}
function somarTudo() {
  const totalSemDesconto = menuOptions.reduce((acc, produto) => acc + produto.price, 0)
  const totalComDesconto = menuOptions.reduce((acc, produto) => acc + (produto.price * 0.9), 0)

  list.innerHTML = `<li class="total">
        <h2>Resumo dos Valores</h2>
        <p><strong>Total original:</strong> R$ ${totalSemDesconto.toFixed(2)}</p>
        <p><strong>Total com 10% de desconto:</strong> R$ ${totalComDesconto.toFixed(2)}</p>
    </li>`
}

function filtrar() {
  const produtosVegan = menuOptions.filter(produto => produto.vegan === true)
  myLi = ''

  produtosVegan.forEach(element => {
    myLi += `<li>
        <img src="${element.src}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>R$ ${element.price}</p>
    </li>`

  });

  list.innerHTML = myLi
}



