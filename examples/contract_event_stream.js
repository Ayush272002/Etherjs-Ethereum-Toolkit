const { ethers } = require('ethers');
require("dotenv").config();

//api key in https://app.infura.io/
const INFURA_ID = process.env.API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' //DAI contract https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {

    const latestBlock = await provider.getBlockNumber() //fetches the latest block
    const transferEvents = await contract.queryFilter('Transfer', latestBlock-10, latestBlock)
    console.log(transferEvents)
}

main()