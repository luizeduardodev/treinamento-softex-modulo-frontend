class Banco {
    constructor(conta, saldo, tipoConta, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }

    buscarSaldo() {
        return this.saldo;
    }

    deposito(valor) {
        return (this.saldo = this.saldo + valor);
    }

    saque(valor) {
        return (this.saldo = this.saldo - valor);
    }

    numeroConta() {
        return this.conta;
    }
}

const minhaConta = new Banco(123, 1200, "Conta-Corrente", 1111);
console.log(`Saldo atual: ${minhaConta.buscarSaldo()}`);
console.log(`Depósito: ${minhaConta.deposito(500)}`);
console.log(`Saque: ${minhaConta.saque(200)}`);
console.log(`Número da conta: ${minhaConta.numeroConta()}`);
