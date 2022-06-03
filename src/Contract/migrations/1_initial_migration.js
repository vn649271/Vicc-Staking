const VCStaking = artifacts.require("VictoryCoinStaking");
const ViccToken = artifacts.require("ViccToken");

module.exports = async function (deployer) {
  let ret = await deployer.deploy(ViccToken);
  let viccDeployed = await ViccToken.deployed();
  console.log(viccDeployed.address);
  await deployer.deploy(VCStaking, viccDeployed.address);
};
