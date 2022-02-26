//hardhat库使用ethers组件与区块链进行交互
const { ethers } = require("hardhat");

//主函数
async function main() {      
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy()
    console.log(counter.address)
}

//执行部署
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});