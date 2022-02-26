pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint count;
    string message;
    
    function initCounter() public{
        count = 0;
    }
    
    function increment() public {
       count = count + 1;
    }

    function getCount() public view returns (uint) {
       return 1;
    }
  

    function sayhello() public view returns (string memory) {
        return "helloworld";
    }

    
}
