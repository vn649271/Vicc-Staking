let vicc = await ViccToken.deployed();
let staking = await ViccStaking.deployed();
let accounts = await web3.eth.getAccounts();
let rewardFromFee = await staking.getUserRewardFromFee(accounts[0]);
rewardFromFee.toString();
vicc.approve(staking.address, "1000000000000000000000");
staking.invest("0x0000000000000000000000000000000000000000", "1000000000000000000000");