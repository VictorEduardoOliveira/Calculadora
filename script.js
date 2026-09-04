let botao = document.querySelectorAll(".btn")
let screen = document.querySelector(".screen")
let value = '0'
let valueAux= 0
let lastOp = null
let equal = false
function press(botoes){
    // ============ Quando o botão for pressionado: ======
    botoes.forEach(b => {
        b.addEventListener('click', () => {
            let content = b.innerText
            let contentF = parseFloat(content)
            if(!Number.isNaN(contentF)){
                // ============ Se for numero ==========
                if(screen.innerText === '0' || equal || screen. innerText === 'Error'){
                    /* 
                    Se o visor ainda estiver zerado, vai só colocar o número digitado
                    ou
                    Se você tiver apertado o igual, o resultado aparecendo, e sobrescrito ao apertar outro número
                    */
                    value = content;
                    equal = false
                }else{
                    // Se não estiver zerado, vai concatenar o numero digitado no visor
                    value += content;
                };
            }else if(content === '.'){
                // ============ Se for um ponto para numeros decimais =======
                if(screen.innerText !== '0' && !value.includes('.')){
                    // Não permite que tenha mais pontos no 'value'
                    value += content;
                };
            }else{
                if(screen.innerText === '0'){
                    // Não deixa realizar uma operação se nenhum numero tiver sido inserido
                    return
                }
                // ====================== Se for alguma das operações da calculadora =======
                Math(content)
                return // Saí da função antes de rodar a ultima função de sobreposição do value no visor
            };
            // Joga o valor digitado para o visor
            screen.innerText = value;
        });
    });
};

function Math(operation){
    // ================ Função das operações ========
    switch (operation){
        case "=":
            calculate(operation);
            break;
        case "÷":
        case 'x':
        case '-':
        case '+':
            screen.innerText = '0' // Apaga o valor atual do visor para escrever o segundo item da operação
            if (valueAux === 0){
                // Se ainda não tiver o primeiro item da operação, ele virará a cópia do valor que estava no visor
                valueAux = parseFloat(value);
            }
            if(lastOp !== null){
                calculate(operation)

            }
            lastOp = operation;
            value = 0
            break;
        case 'CE':
            if(value !== 0){
                if(value.length > 1){
                    value = value.slice(0, -1);
                    screen.innerText = value
                }else{
                    value = '0'
                    screen.innerText = value
                }
            }
            break;
        case 'C':
            lastOp = null;
            value = '0';
            valueAux = 0;
            screen.innerText = '0'
    }
};
function calculate(operation){
    if(lastOp ==='÷'){
        valueAux /= parseFloat(value);
    }else if(lastOp === 'x'){
        valueAux *= parseFloat(value);
    }else if(lastOp === '-'){
        valueAux -= parseFloat(value);
    }else if(lastOp === '+'){
        valueAux += parseFloat(value);
    };
    if(operation !== "="){
            lastOp = operation
    }else{
        lastOp = null
        screen.innerText = valueAux
        value = 0
        equal = true
        valueAux = 0
    }
}   


press(botao);