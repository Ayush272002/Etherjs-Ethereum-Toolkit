const { ethers } = require('ethers');
require("dotenv").config();

//api key in https://app.infura.io/
const INFURA_ID = process.env.API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)


const main = async () => {

    const block = await provider.getBlockNumber() //latest block
    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)
    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)
    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()