const { ethers } = require('ethers');
require("dotenv").config();

//api key in https://app.infura.io/
const INFURA_ID = process.env.API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

//this is in 
//https://docs.ethers.org/v5/getting-started/#getting-started--contracts
const ERC20_ABI = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",
]

//DAI address found on 
//https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f#code
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' //DAI Contract

// The Contract object
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()


    console.log(`\nReading from ${address}\n`)
    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Total Supply: ${totalSupply}\n`)

    //address of the top dai holder just a random one
    const balance = await contract.balanceOf('0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf')
    console.log(`Balance Returned: ${balance}`)
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
}

main()