var AppleToken = artifacts.require("./AppleToken.sol");
var TokenSale = artifacts.require("./TokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(AppleToken, 10000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(TokenSale, AppleToken.address, tokenPrice);
  });
};
