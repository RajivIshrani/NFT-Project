// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

    //import the standard implementation of erc721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//contract NFTee is an erc721 contract
contract NFTee is ERC721 {

    constructor() ERC721("Rajiv's NFT", "RJ-NFT") {
        //mint 5 nft to myself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);


    }
   //mint some NFTs for myself
}