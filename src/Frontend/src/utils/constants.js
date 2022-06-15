// import stakingABI from "../abis/Staking.json";
// import VictoryCashABI from "../abis/BC.json";
import ViccStakingDeployedInfo from "../abis/ViccStaking.json";
import ViccDeployedInfo from "../abis/ViccToken.json";

export const CHAIN_ID = 97;
export const stakingDeployedInfo = {
	abi: ViccStakingDeployedInfo.abi,
	address: ViccStakingDeployedInfo.networks[CHAIN_ID].address
};
// export const stakingContractAddress = "0x1808Ec091DB6efa4a06Fd8ADa1C6435eB2a5aEAE";
export const viccDeployedInfo = {
	abi: ViccDeployedInfo.abi,
	address: ViccDeployedInfo.networks[CHAIN_ID].address
};
// export const bcTokenContractAddress = "0x09CD2D1351DeBe79E6da00Fd5d078b4FCe89721C";