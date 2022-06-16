// import stakingABI from "../abis/Staking.json";
// import VictoryCashABI from "../abis/BC.json";
import ViccStakingDeployedInfo from "../abis/ViccStaking.json";
import ViccDeployedInfo from "../abis/ViccToken.json";

const dev_mode = 2; // 0: Ganache, 1: BSC Testnet, 2: Ropsten, 3: BSC

const chainNameList = ["Ganache", "BSC Testnet", "Ropsten", "BSC"];
const chainIdList = [5777, 97, 3, 56];
const blockExplorerUrlList = [
	[""], 
	["https://testnet.bscscan.com/"], 
	["https://ropsten.etherscan.io"], 
	["https://bscscan.com/"]
];
const symbolList = ["ETH", "BNB", "ETH", "BNB"];
const rpcUrlList = [
	["http://127.0.0.1:8545"], 
	["https://data-seed-prebsc-1-s1.binance.org:8545"], 
	["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"], 
	["https://bsc-dataseed1.binance.org"]
];

export const CHAIN_INFO = {
	NAME: chainNameList[dev_mode],
	ID: chainIdList[dev_mode],
	SYMBOL: symbolList[dev_mode],
	BLOCK_EXPLORER_URLS: blockExplorerUrlList[dev_mode],
	RPC_URLS: rpcUrlList[dev_mode],
};

export const stakingDeployedInfo = {
	abi: ViccStakingDeployedInfo.abi,
	address: ViccStakingDeployedInfo.networks[CHAIN_INFO.ID.toString()].address
};
// export const stakingContractAddress = "0x1808Ec091DB6efa4a06Fd8ADa1C6435eB2a5aEAE";
export const viccDeployedInfo = {
	abi: ViccDeployedInfo.abi,
	address: ViccDeployedInfo.networks[CHAIN_INFO.ID.toString()].address
};