## Tech Stack

- Javascript (Writing scripts)
- [Ethers.js](https://docs.ethers.io/v5/) for Blockchain Interaction
- [Node.js](https://nodejs.org/en/) To run our scripts and install ethers.js
- [Infura](https://infura.io/) for Node provider
- [EtherScan](https://etherscan.io/) for looking/querying transactions and other stuff

# Ether.js Ethereum Toolkit

This repository contains a collection of scripts built with Ether.js library for interacting with the Ethereum blockchain. These scripts cover various functionalities including managing accounts, reading smart contracts, sending signed transactions, deploying contracts, and more.

## Setting Up

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Install Dependencies:**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**  
   There is a `.env` file in the [root](/.env) directory of the project, just modify it by adding the following variables inside that:

   ```plaintext
   # Get your API key from Infura: https://infura.io/
   API_KEY=

   # Ethereum wallet addresses
   SENDER_ADDRESS=
   RECIPIENT_ADDRESS=

   # Ethereum private key for sending transactions
   SENDER_PRIVATE_KEY=
   ```

## Ethers.js Scripts

### accounts.js
Reads the balance of Ether of a wallet address.

```bash
node examples/accounts.js
```

### read_smart_contract.js
Reads the balance of a token wallet address from the corresponding contract fetched from etherscan.

```bash
node examples/read_smart_contract.js
```

### send_signed_transaction.js
Transfers 0.010 Ether from `SENDER_ADDRESS` to `RECIPIENT_ADDRESS`. For testing out I've used SepoliaETH which can be seen in the test network in the metamask wallet, to get some SepoliaETH you can mine from [here](https://sepolia-faucet.pk910.de/), you just need to provide your metamask account address and it will transfer the SepoliaETH it mined.

```bash
node examples/send_signed_transaction.js
```

### write_contract.js
Transfers 20 tokens of a chosen token (Chain Link in this case) from `SENDER_ADDRESS` to `RECIPIENT_ADDRESS` (Ethereum Sepolia LINK). For testing purposes you can get some tokens from [here](https://faucets.chain.link/)

```bash
node examples/write_contract.js
```

### contract_event_stream.js
Queries a block for transfer events fetched from etherscan.

```bash
node examples/contract_event_stream.js
```

### inspecting_blocks.js
Get transactions from a block fetched from etherscan.

```bash
node examples/inspecting_blocks.js
```

Ensure you have provided the necessary values in the `.env` file before running the scripts.
