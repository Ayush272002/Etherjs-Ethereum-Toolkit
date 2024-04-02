const { ethers } = require('ethers');
require("dotenv").config();

//api key in https://app.infura.io/
const INFURA_ID = process.env.API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = process.env.SENDER_ADDRESS //sender
const account2 = process.env.RECIPIENT_ADDRESS //recipient

const privateKey1 = process.env.SENDER_PRIVATE_KEY //sender private key
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {

    //show account 1 balance before transfer
    const senderBalanceBefore = await provider.getBalance(account1)
    //show account 2 balance before transfer
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    //send ether
    const tx = await wallet.sendTransaction({
        to: account2, 
        value: ethers.utils.parseEther("0.010")
    })

    //fetch transaction
    await tx.wait() //wait for the transaction to be mined
    console.log(tx)

    //show account 1 balance after transfer
    const senderBalanceAfter = await provider.getBalance(account1)
    //show account 2 balance after transfer
    const recieverBalanceAfter = await provider.getBalance(account2)


    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()