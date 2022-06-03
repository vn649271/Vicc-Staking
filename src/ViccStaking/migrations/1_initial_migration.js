const VCStaking = artifacts.require("VictoryCoinStaking");
const ViccToken = artifacts.require("ViccToken");

module.exports = function (deployer) {
  await deployer.deploy(ViccToken);
  deployer.deploy(VCStaking, deployedInfo.address);
};
