const { ethers } = require('ethers');
require("dotenv").config();

//api key in https://app.infura.io/
const INFURA_ID = process.env.API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = process.env.SENDER_ADDRESS //sender
const account2 = process.env.RECIPIENT_ADDRESS //recipient

const privateKey1 = process.env.SENDER_PRIVATE_KEY //sender private key
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

//chain link token address
//https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca
const address = '0x779877A7B0D9E8603169DdbD7836e478b4624789'

// The Contract object
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const balance = await contract.balanceOf(account1)

    //balance before the transfer 
    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    // Transfer 20 tokens
    const amountToTransfer = ethers.utils.parseUnits("20", 18);
    const connectWithWallet = contract.connect(wallet)

    const tx = await connectWithWallet.transfer(account2, amountToTransfer)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()