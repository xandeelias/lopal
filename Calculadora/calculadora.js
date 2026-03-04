function calculadora(){
    while(true){
        let resultado = 0.0;
        let operando1;
        let operando2;  
        let operador;

        operando1 = parseFloat(prompt("Digite o Primeiro Número"));
        operando2 = parseFloat(prompt("Digite o Segundo Número"));
        operador = prompt("Digite uma das Operaçõesc( + - * / ): ");

        if (operador === "+" ) {
        resultado = operando1 + operando2;
        } else if (operador === "-"){
        resultado = operando1 - operando2;
        } else if (operador === "*"){
        resultado = operando1 * operando2;
        } else if (operador === "/"){
            if (operando2 == 0){
                alert("Não é Possível Fazer Esta Divisão");
                return
            }
        resultado = operando1 / operando2;
        } else {
            alert("Operador Invalído")
            return
        }
        alert("Resultado: " + 
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
    }
}