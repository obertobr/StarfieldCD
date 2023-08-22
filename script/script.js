const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);

let lancamento = 1693958400
let body = document.body
let progesso = document.getElementById("progresso")
let timer = document.getElementById("timer")
let vars = document.querySelector(':root');
let index = Math.floor(Math.random() * 3)+1
body.style = `animation: roll${index}  linear 600s 1; background-image: url(./imgs/${index}.png);`

setInterval(() => {
    index++
    if(index==4){index=1}
    body.style = `animation: roll${index}  linear 600s 1; background-image: url(./imgs/${index}.png);`
},599500)

setInterval(() => {
    contagem = lancamento*1000 - Date.now()
    let data = new Date(contagem);
    progresso.style = `stroke-dashoffset: ${contagem/2419200000*454};`
    timer.innerText = `${data.getDate()}:${pad(data.getHours())}:${pad(data.getMinutes())}:${pad(data.getSeconds())}`
},1000)