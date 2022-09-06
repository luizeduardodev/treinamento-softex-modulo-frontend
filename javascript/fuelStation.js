const fuelVector = [contadorAlcool = 0, contadorGasolina = 0, contadorDiesel = 0];

const showData = () => {
    alert(`Qtd de clientes: Álcool = ${fuelVector[0]} | Gasolina = ${fuelVector[1]} | Diesel = ${fuelVector[2]}`);
}

const dynamicCondition = (fuel, condition) => {
    if (fuel == condition) {
        fuelVector[--fuel]++; //fuelVector[--1]++ = fuelVector[0]++
        alert("Muito Obrigado!");
    }
}

const checkErrorAndCondition = (fuel) => {
    if (fuel >= 1 && fuel <= 4) {
        dynamicCondition(fuel, 1); //1, 1
        dynamicCondition(fuel, 2);
        dynamicCondition(fuel, 3);
    } else {
        alert("Número inválido. Tente novamente!");
    }
}

let fuel = parseInt(prompt("Digite um número: (1 - Álcool | 2 - Gasolina | 3 - Diesel | 4 - Encerrar programa)"));

while (fuel != 4) {
    checkErrorAndCondition(fuel);

    fuel = parseInt(prompt("Digite um número: (1 - Álcool | 2 - Gasolina | 3 - Diesel | 4 - Encerrar programa)"));
}

showData();