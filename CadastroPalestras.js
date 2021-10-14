/// Atividade online 2 - Cadastro de palestras
/// Lógica de Programação - Curso Dev Full Stack SENAI São Paulo
/// Cauê Oliveira
/// 13 out 2021

let idade = 18; 
console.log ("Informe primeiro a sua idade para começar o cadastro:");
console.log (`${idade} anos`);

if (idade >= 18){
    console.log ("Seja bem vindo! Para iniciar o seu cadastro, informe: Você é -Palestrante- ou -Participante-?")
    }else{
        console.log ("Muito obrigado! Porém, sua idade não é permitida na plataforma");
}
    /// No fluxograma, eu começava diretamente na escolha de uma data para palestras. 
    /// Acho que é mais conveniente limitar no primeiro passo a idade do usuário, pois se ela for inválida, ele já não seguirá mais em frente.

let tipoUsuario = ["Palestrante", "Participante"];
let usuarioFuncao = tipoUsuario[1];

if (usuarioFuncao == tipoUsuario[0]){
    console.log ("Sou Palestrante");
    console.log ("Escolha uma data para cadastrar sua palestra (modelo data MM/DD/AAAA):");
    }else{ (usuarioFuncao == tipoUsuario[1])
        console.log ("Sou -Participante-");
        console.log ("Escolha uma data para a palestra que você gostaria de participar (modelo data MM/DD/AAAA):");
}
/// No fluxograma eu estipulei apenas o acesso de "participantes", mas seria interessante colocar acesso de cadastro de "palestrantes" no sistema também.
/// Para isso, eu queria aninhar as linhas seguintes para dar dois caminhos na sequência de inserção de dados.
/// Um caminho para o "palestrante" e outro para o "participante".
/// Continuarei na sequência apenas para o "participante" até encontrar uma solução para isso.

let dataAtual = new Date ("10/13/2021");
let dataEscolhida = new Date ("11/04/2021");

if (dataEscolhida > dataAtual){
    console.log (`${dataEscolhida.toLocaleDateString("en-US")}`); 
    console.log ("Data escolhida! Veja abaixo a lista de palestras do dia escolhido:")
        }else{
            console.log ("Data inválida. Data inserida anterior à data atual. Escolha uma nova data");
}
/// Implementei função nativa do javascript para arrumar a data em modelo MM/DD/AAAA.
/// Porém ainda não achei uma solução para a inserção de dados ser através do modelo de data brasileiro 'new Date'.
/// Só consegui achar como colocar data em modelo pt-BR (DD/MM/AAAA) usando o toLocaleDateString.

let listaPalestras = ["Como vender melhor suas ideias", "10 passos para ser mais produtivo", "A importância de saber contar uma boa história"];
let palestrasCadastradas = [];

    while (palestrasCadastradas < 3){
        if (palestrasCadastradas == 0){
            console.log (`1 - ${listaPalestras[0]}`)
        }else if (palestrasCadastradas == 1){
            console.log (`2 - ${listaPalestras [1]}`)
        }else{
            console.log (`3 - ${listaPalestras [2]}`)
        }
        palestrasCadastradas++
    }

console.log ("- Selecione a palestra que você quer participar -");

let numCadastradosPalestra1 = 100;
let numCadastradosPalestra2 = 100;
let numCadastradosPalestra3 = 80;

let palestraEscolhida = numCadastradosPalestra3

if (palestraEscolhida < 100){
    console.log ("Você garantiu sua vaga! Termine a inscrição adicionando seu nome completo, e-Mail e telefone para contato.")
    }else{
        console.log ("Limite de participantes excedido para a palestra escolhida. Escolha outra palestra.")
}

let dadosUsuario = ["Nome:", "João", "Sobrenome:", "Silva", "e-Mail:", "js2000@email.com.br", "Telefone:", "(99) 55555-5555"]
let listaDados = dadosUsuario.length
let dadosUsuario1 = dadosUsuario.join (' ') ///variável para tirar vírgula de uma array

if (listaDados < 8){
    console.log ("Dados incompletos. Preencha todos os campos com seus dados")
    }else{
        console.log (`${dadosUsuario1}`)
        console.log ("Participante cadastrado com sucesso! Marque a data da palestra escolhida em sua agenda.")
        console.log ("30 minutos antes da palestra, iremos enviar um alerta em seu e-Mail cadastrado.")
}

///Revendo meu fluxograma, acabei invertando algumas condições de 'if/else' para ficar melhor. 
///Algumas perguntas como "número de participantes maior que 100", por exemplo, optei no código usar como condição verdadeira o contrário.
///Ainda quero colocar no sistema a possibilidade de continuar o cadastro como palestrante.
///Mas para continuarmos como o MVP (Minimum Valuable Product), deixarei o código como está e fazer modificações posteriores.
