function vitalidade() {
    const vigorInputs = document.querySelectorAll(".vigor");  // Seleciona todos os checkboxes com a classe 'vigor'
    
    // Conta quantos checkboxes com a classe 'vigor' estão marcados
    const vigorMarcados = Array.from(vigorInputs).filter(checkbox => checkbox.checked).length + 4;
    
    // Limpa os checkboxes existentes dentro do contêiner (opcional, dependendo do comportamento desejado)
    document.getElementById("vit").innerHTML = "";

    // Cria a quantidade de novos checkboxes com base na quantidade de checkboxes marcados
    for (let index = 0; index < vigorMarcados; index++) {
        const item = document.createElement("input");  // Cria um novo checkbox
        item.type = "checkbox";  // Define o tipo como 'checkbox'
        item.className = "vitalidade";  // Define a classe 'vitalidade'

        document.getElementById("vit").appendChild(item);  // Adiciona o checkbox ao contêiner com id 'vit'
    }
}

// Adiciona o evento 'change' para todos os checkboxes com a classe 'vigor'
document.querySelectorAll(".vigor").forEach(checkbox => {
    checkbox.addEventListener("change", vitalidade);  // Chama 'vitalidade' sempre que um checkbox for marcado ou desmarcado
});

//Função para calcular a força de vontade
function forcaVontade (){
    //Seleciona os checkboxez marcados
    const autocontroleInput = document.querySelectorAll(".autocontrole")
    const determinacaoInput = document.querySelectorAll(".determinacao");

    //limpa o conteúdo
    document.querySelector("#forcVont").innerHTML = "";

    //conta quantos pontos de determinação e autocontrole estão marcadao
    const marcados = Array.from(autocontroleInput).filter(checkbox => checkbox.checked).length  + Array.from(determinacaoInput).filter(checkbox => checkbox.checked).length;

    for (let index = 0; index < marcados; index++) {
        const item = document.createElement("input")

        item.type = "checkbox"
        item.className = "forcaVontade"

        document.querySelector("#forcVont").appendChild(item)
    }
}

document.querySelectorAll(".autocontrole, .determinacao").forEach(checkbox =>{
    checkbox.addEventListener("change", forcaVontade)
})

//Função para adicionar habilidades
function adicionarHabilidade () {
    const novaHab = document.querySelector("#novaHab")
    const ul = document.querySelector("#skils")
    const li = document.createElement("li")

    //Botão para remover
    const remover = document.createElement("button")
    remover.textContent = "remover"
    // remover.className = "remover
    li.appendChild(remover)

    //li.textContent = novaHab.value.trim() -> Essa parte tava apagando o botão remover e o jogar.
    const texto = document.createTextNode(" " + novaHab.value.trim())
    li.appendChild(texto)


    const ponto = document.createElement("div")
    ponto.className = "ponto"
    li.appendChild(ponto)

    for (index = 0; index < 5; index++) {
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        ponto.appendChild(checkbox)
    }

    //Botão para remover habilidade
    remover.addEventListener("click", ()=>{
        ul.removeChild(li)
    })

    ul.appendChild(li)
}

//Adicionar habilidade ao apertar enter
document.querySelector("#novaHab").addEventListener("keypress", (e)=>{
 if (e.key === 'Enter') {
    adicionarHabilidade()
 }
})

// Função para adicionar trunfo
function adicionarTrunfo() {

    const nomeTrunfoInput = document.querySelector(".descricao");
    const nomeTrunfo = nomeTrunfoInput.value.trim(); // Pega o valor do input e remove espaços


    if (nomeTrunfo === '') {
        alert("Digite um nome para seu trunfo");
        return;
    }

    if (nomeTrunfo.length < 3) {
        alert("O nome do trunfo está muito curto");
        return;
    }

    const item = document.createElement("li");
    item.textContent = nomeTrunfo;
    item.className = "trunfo"
    document.getElementById("trunfo").appendChild(item);
    nomeTrunfoInput.value = "";
    
    const remover = document.createElement('button')
    remover.textContent = "remover";
    item.appendChild(remover);

    //Botão para remover trunfo
    remover.addEventListener("click", ()=>{
        item.remove()
    })
}

    // Adicionar trunfo ao pressionar a tecla Enter
    document.querySelector(".descricao").addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            adicionarTrunfo();
        }
    });

    function lancarDado() {
        const valorDado = document.querySelector("#valorDado");
        let dado = parseInt(valorDado.value); // Certifique-se de que o valor é um número inteiro

        if (dado > 100) {  // Verifica se o número de dados é maior que 100 a cada iteração
            alert("O número de dados não pode ser maior que 100!");
            return;
        }

        let dice = []; // Inicializa o array dice

        // Limpar os resultados anteriores
        document.querySelector("#sucesso").innerHTML = '';
        document.querySelector("#critico").innerHTML = '';
        document.querySelector("#falhaCritica").innerHTML = '';

        // Gera um número aleatório de 1 a 10, para unidade acrescida pelo usuário
        for (let index = 0; index < dado; index++) {
            const resultado = Math.floor(Math.random() * 10) + 1;
            dice.push(resultado);

            if (dado > 100) {  // Verifica se o número de dados é maior que 100 a cada iteração
                alert("O número de dados não pode ser maior que 100!");
                break;  // Interrompe o loop caso o número de dados ultrapasse 100
            }
    
            // Vários resultados do Dado
            switch (resultado) {
            case 1:
                dado = dado - 1; // Diminui a quantidade de lançamentos
                const falhaCritica = document.createElement('li');
                falhaCritica.textContent = `${resultado}`;
                document.querySelector('#falhaCritica').appendChild(falhaCritica);
                break;

            case 10:
                dado = dado + 1; // Aumenta a quantidade de lançamentos
                const critico = document.createElement('li');
                critico.textContent = `${resultado}`;
                document.querySelector('#critico').appendChild(critico);
                break;

            default:
                // Para os valores entre 2 e 9
                if (resultado >=6 && resultado < 9) {
                    const sucesso = document.createElement('li');
                    sucesso.textContent = `${resultado}`;
                    document.querySelector("#sucesso").appendChild(sucesso);
                } 
        }
    }        
    }
    
    //Jogar os dados e limpar as jogadas anteriores
    document.querySelector("#lancarDado").addEventListener('click', lancarDado)

    //Jogar dados apertando enter
    document.querySelector("#lancarDados").addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            lancarDado();
        }
    });




