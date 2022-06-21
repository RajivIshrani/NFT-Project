//ether.js comes buuilt in to hardhat
//ether.js is a really nice library to work with ethereum

//import ethers
const { ContractFactory } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
// 1.somehow tell the script we want to deploy the NFTee.sol contract
    const contract = await ethers.getContractFactory("NFTee");

// 2.deploy it
    const deployContract = await contract.deploy();
//2.1 wait for deployment to finish
    await deployContract.deployed();

// 3.print the address of the deployed contract
    console.log("NFT Contract deployed to: ", deployContract.address);
 
}

main().then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});