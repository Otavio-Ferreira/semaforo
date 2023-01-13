function ligar(){
    var vermelho = document.getElementById('red')
    var amarelo = document.getElementById('yellow')
    var verde = document.getElementById('green')
    const date = new Date()
    var hora = date.getUTCSeconds()

    
   
    if(hora >= 1 && hora <= 20){
        vermelho.style.background = "red"
        amarelo.style.background = 'gray'
        verde.style.background = 'gray'

    } else if (hora >= 21 && hora <= 40){
        vermelho.style.background = "gray"
        amarelo.style.background = 'gray'
        verde.style.background = 'green'
    } else if(hora >= 41 && hora <= 59){
        vermelho.style.background = "gray"
        amarelo.style.background = 'yellow'
        verde.style.background = 'gray'

    }

    
window.onclick = function(){
    var button = document.getElementById('clickButton');
    setInterval(function(){
        button.click();
    },1000);  // estrutura para dar clicks infinitos no botao ligar
};
}

function stop(){
    window.location.reload()
} 
