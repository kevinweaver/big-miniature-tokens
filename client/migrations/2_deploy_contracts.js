const nftOwner = artifacts.require("nftOwner");

module.exports = function(deployer) {
  deployer.deploy(nftOwner);
};