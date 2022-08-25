const contributorNumber = prompt("Digite o seu número: ");
const numberOfHoursWorked = prompt("Digite a quantidade de horas trabalhadas: ");
const valuePerHour = prompt("Digite o valor da hora: ");

const salaryCalculation = (numberOfHoursWorked, valuePerHour) => numberOfHoursWorked * valuePerHour;

const salary = salaryCalculation(numberOfHoursWorked, valuePerHour);

console.log(`Number = ${contributorNumber}`);
console.log(`Salary = U$ ${salary.toFixed(2)}`);
