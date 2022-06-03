const VCStaking = artifacts.require("ValuableCoinStaking");
// const ViccToken = artifacts.require("ViccToken");

module.exports = function (deployer) {
  deployer.deploy(VCStaking);
  // deployer.deploy(ViccToken, );
};
