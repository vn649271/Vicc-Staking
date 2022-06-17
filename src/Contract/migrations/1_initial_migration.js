const ViccStaking = artifacts.require("ViccStaking");
const ViccToken = artifacts.require("ViccToken");

module.exports = async function (deployer) {
  let ret = await deployer.deploy(ViccToken);
  let viccDeployed = await ViccToken.deployed();
  console.log(viccDeployed.address);
  viccDeployed.addAdmin("0xADB366C070DFB857DC63ebF797EFE615B0567C1B");
  let viccStakingDeployed = await deployer.deploy(ViccStaking, viccDeployed.address);
  viccDeployed.addAdmin(viccStakingDeployed.address);
};
