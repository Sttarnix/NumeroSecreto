let jogarNovamente = "S";

while (jogarNovamente.toUpperCase() == "S") {
    alert('Boas vindas ao jogo do número secreto');

    let modo = prompt('Escolha o modo do jogo: 1 para Normal, 2 para Difícil');
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 1;
    let limiteTentativas = (modo == "2") ? 5 : Infinity;
    console.log(numeroSecreto);
    let chute;

    //enquanto chute não for igual ao n.s.
    while (chute != numeroSecreto) {
        chute = prompt('Escolha um número entre 1 e 100');
        // se chute for igual ao número secreto

        if (chute == numeroSecreto) {
            alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
            //Soma das tentativas do usuário.
            tentativas ++;

            if(tentativas > limiteTentativas) {
                alert(`Suas ${limiteTentativas} tentativas acabaram! O número secreto era ${numeroSecreto}.`);
                break;
            }
        }
    }
    jogarNovamente = prompt('Deseja jogar novamente? S para sim ou N para não');
} 
