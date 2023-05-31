//variaveis
let btn1 = 0
let btn2 = 0
let btn3 = 0
let btn4 = 0
let btn5 = 0
let btn6 = 0
let btn7 = 0
let btn8 = 0
let btn9 = 0
let controle = 0
let jogadas = 0
let finalJogo = false


//click botão 1
function clickbtn1() {
    
    let btn = document.getElementById('btn1')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn1 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn1 = "O"

      }
    
    }
   

    vereficarGanhador()
    
}
// click 2
function clickbtn2() {
    
    let btn = document.getElementById('btn2')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn2 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn2 = "O"

      }
    
    }
   

    vereficarGanhador()
}
//click 3
function clickbtn3() {
    
    let btn = document.getElementById('btn3')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn3 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn3 = "O"

      }
    
    }
   

    vereficarGanhador()
}
//click 4
function clickbtn4() {
   
    let btn = document.getElementById('btn4')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn4 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn4 = "O"

      }
    
    }
   

    vereficarGanhador()
}
//click 5
function clickbtn5() {
    
    let btn = document.getElementById('btn5')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn5 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn5 = "O"

      }
    
    }
   

    vereficarGanhador()
}
//click 6
function clickbtn6() {
   
    let btn = document.getElementById('btn6')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn6 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn6 = "O"

      }
    
    }
   

    vereficarGanhador()
}
//click 7 
function clickbtn7() {
    
    let btn = document.getElementById('btn7')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn7 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn7= "O"

      }
    
    }
   

    vereficarGanhador()
}
//click 8
function clickbtn8() {
    
    let btn = document.getElementById('btn8')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn8 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn8 = "O"

      }
    
    }
   

    vereficarGanhador()
}
//click 9
function clickbtn9() {
    
    let btn = document.getElementById('btn9')

    if (btn.value == " " && !finalJogo){
        jogadas++
    if (controle == 0){
        controle = 1
        btn.value = "x"
        btn9 = "x"
    } else {
        controle = 0
        btn.value = "O"
        btn9 = "O"

      }
    
    }
   

    vereficarGanhador()
}
//Verefica ganhador
function vereficarGanhador(){
    let lblJogador = document.getElementById("lblJogador")
    let iblJogadas = document.getElementById("lblJogadas")
    
    //verefica se o jogador x ganhou
    if(btn1=='x' && btn2=='x' && btn3=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return

    }
    if(btn4=='x' && btn5=='x' && btn6=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return

    }
    if(btn7=='x' && btn8=='x' && btn9=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return

    }
    if(btn1=='x' && btn4=='x' && btn7=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return

    }
    if(btn1=='x' && btn5=='x' && btn9=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return

    }
    if(btn3=='x' && btn6=='x' && btn9=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return
        

    }
    if(btn2=='x' && btn5=='x' && btn8=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return
        

    }
    if(btn3=='x' && btn5=='x' && btn7=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return
        

    }
    if(btn3=='x' && btn5=='x' && btn7=='x') {
        finalJogo = true
        lblJogador.innerText ='O Jogador x ganhou!'
        lblJogadas.innerText =''
        return
    }

    //Ganhador O

    
    if(btn1=='O' && btn2=='O' && btn3=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn1=='O' && btn5=='O' && btn9=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn4=='O' && btn5=='O' && btn6=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn7=='O' && btn8=='O' && btn9=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn2=='O' && btn5=='O' && btn8=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn1=='O' && btn2=='O' && btn3=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn1=='O' && btn2=='O' && btn3=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn1=='O' && btn2=='O' && btn3=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    if(btn1=='O' && btn2=='O' && btn3=='O') {
    finalJogo = true
    lblJogador.innerText ='O Jogador O ganhou!'
    lblJogadas.innerText =''
    return


    }
    

    //vereficar em caso de empate
    if(jogadas==9){
        finalJogo = true
        lblJogador.innerText = 'Empate'
        lblJogadas.innerText = ' '
        return
    }
    if(controle==0) {
        lblJogador.innerText = 'Jogador X';
    } else {
        lblJogador.innerText = 'Jogador O';
    }
        lblJogadas.innerText ='(' + (jogadas+1) + 'ª jogadas)'
    
}
//click do botao reiniciar
function clickReiniciar() {
    //reiniciar variaveis
    btn1 = 0
    btn2 = 0
    btn3 = 0
    btn4 = 0
    btn5 = 0
    btn6 = 0
    btn7 = 0
    btn8 = 0
    btn9 = 0
    controle = 0
    jogadas = 0
    finalJogo = false
    //reiniciar botoes
    let b1 = document.getElementById ('btn1');
    let b2 = document.getElementById ('btn2');
    let b3 = document.getElementById ('btn3');
    let b4 = document.getElementById ('btn4');
    let b5 = document.getElementById ('btn5');
    let b6 = document.getElementById ('btn6');
    let b7 = document.getElementById ('btn7');
    let b8 = document.getElementById ('btn8');
    let b9 = document.getElementById ('btn9');
    b1.value = ' ';
    b2.value = ' ';
    b3.value = ' ';
    b4.value = ' ';
    b5.value = ' ';
    b6.value = ' ';
    b7.value = ' ';
    b8.value = ' ';
    b9.value = ' ';
    //reiniciar label
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');

    lblJogador.innerText = 'Jogador X';
    lblJogadas.innerText = '(1ª Jogada)';
}