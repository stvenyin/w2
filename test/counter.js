const { expect } = require('chai') //断言模块 
const { ethers} = require('hardhat') //安全帽模块

describe('Counter合约测试用例', () => {

  /**
   * 测试执行前的钩子函数
   */
  before(async () => { 
    //获取合约工厂对象
    this.Counter = await ethers.getContractFactory('Counter');

    //通过合约工厂部署合约
    this.Counter = await this.Counter.deploy();
  });

  it('Testing initCounter', async () => {
    const initCounter = await this.Counter.initCounter();

  })
  it('Testing increment', async () => {
    const increment = await this.Counter.increment();
  })

  it('Testing getCount', async () => {
    const increment = await this.Counter.getCount();
    expect(increment).to.be.equal('1') //断言结果为801
    console.log(increment);
  })

  it('Testing sayhello', async () => {
    const sayhello = await this.Counter.sayhello();
    expect(sayhello).to.be.equal('helloworld') //判断结果为"helloworld"
  })
})
