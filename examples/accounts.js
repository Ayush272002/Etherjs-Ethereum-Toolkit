//latest version of ether.js not working with this 
//fixed it by this command npm install ethers@5.7.2
require("dotenv").config();

const { ethers } = require('ethers');

//api key in https://app.infura.io/
const INFURA_ID = process.env.API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

//random address from https://etherscan.io/
const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

//to run node .\examples\accounts.js