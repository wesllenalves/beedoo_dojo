var readlineSync = require('readline-sync')

function start() {
    let continuar = true;

    do {

        const opcoes = ['Sacar dinheiro', 'Sair do sistema'];
        let index = readlineSync.keyInSelect(opcoes, 'Selecione a opcao desejada:', {cancel: false});
        
        if (opcoes[index] == 'Sacar dinheiro') {
            
            console.log('Notas disponíveis R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00')
            continuar  = readlineSync.keyInYN('Deseja continuar? ')
            process.stdout.write("\u001b[2J\u001b[0;0H");
        } else {
            continuar = false;
            process.stdout.write("\u001b[2J\u001b[0;0H");
        }

    } while (continuar);

}

start();
