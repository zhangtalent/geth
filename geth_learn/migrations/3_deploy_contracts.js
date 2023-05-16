var Storage = artifacts.require("./VendingMachine.sol")
module.exports = function (deployer) {
  deployer.deploy(Storage)
}
