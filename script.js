//1 - crie uma função que exiba uma mensagem no console

function oi(){
    console.log('Olá! Seja Bem Vindo')
}
oi()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console


function quem(name) {
    console.log(`Prazer meu nome é ${name}.`);
}

quem("Taíse");


//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

    function apresentacao(nome1, idade, musica) {
        console.log(`Meu nome é ${nome1}, tenho ${idade} anos de idade e meu estilo musical favorito é ${musica}.`);
    }

    apresentacao("Taíse", "32", "Heavy Metal");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console, 

function midia(filme, musica1) {
    console.log(`Ultimo filme que gostei de assistir foi ${filme}, e uma das minhas músicas favoritas é ${musica1}`)
}

midia("Uncharted - Fora do mapa", "snuff - Slipknot")


//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(number){
    return number*3
}

console.log(triplo(5))