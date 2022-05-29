const readline = require(`readline-sync`)
const Chain = require(`.src/chain`)

//Use Menu simulation
const chain = new Chain()
chain.addBlock({ amount: 33 }) //Position 1
chain.addBlock({ amount: 10 }) //Position 2
chain.addBlock({ amount: 44, message: 'BTC > All'}) //Position 3

//Hackerman
chain.instance[1].data.amount = 9001
chain.instance[1].hash = `579e6e623c3e1d099c2b8c93c929b6c14432fa9daa87e4a699b11571d3071278`d

function main() {
    clear()
    let op

    do{
        console.log(`Welcome to my cryptoDevChain !\n\n`)
        op = readline.questionInt(`1. Add a new block\n2. Print the chain\n0. Exit\n`)
        clear()
        switch(op) {
            case 1:
                const amount = readline.questionInt(`Amount: `)
                const message = readline.question(`Message: `)

                chain.addBlock({ amount, message }) //Cria um novo bloco e adiciona na cadeia

                console.log(`Block added!`)
                clear(true)

                break;
            case 2:
                console.log(`Blocks List!`)
                chain.print() //Lista cadeia de blocos a partir da instância
                clear(true)
                break;
            default:
                console.error("Invalid option")
                clear()
                break;
        }
    } while(op !== 0)
}

function clear(pressAnyKey) {
    if(pressAnyKey)
        readline.keyIn('Press any key to continue...')
    console.clear()
}

main()