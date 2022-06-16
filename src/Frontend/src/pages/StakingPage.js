/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import Card from "../components/common/Card";
import Spinner from "../components/common/Spinner";
import { initWeb3 } from "../utils.js";
import fromExponential from "from-exponential";
// import { injectStyle } from "react-toastify/dist/inject-style";
// import { ToastContainer, toast } from "react-toastify";
import toast, { Toaster } from 'react-hot-toast';
import NavMenuBar from "../components/common/NavMenuBar";

import {
  stakingDeployedInfo,
  viccDeployedInfo,
  CHAIN_INFO
} from "../utils/constants";

if (typeof window !== "undefined") {
  // injectStyle();
}

const StakingPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [stakeLoading, setStakeLoading] = useState(false);
  const [withdrawLoading, setWithdrawLoading] = useState(false);
  const [compoundingLoading, setCompoundLoading] = useState(false);
  const [error, setError] = useState("");
  const [web3, setWeb3] = useState();
  const [accounts, setAccounts] = useState();
  const [viccStaking, setViccStaking] = useState();
  const [viccToken, setViccToken] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [balance, setBalance] = useState();
  const [totalStaked, setTotalStaked] = useState();
  const [minStake, setMinStake] = useState();
  const [referralRewards, setReferralRewards] = useState();
  const [referralCount, setReferralCount] = useState();
  const [dailyROI, setDailyROI] = useState();
  const [stakingRewards, setStakeRewards] = useState();
  const [totalAvailabelReward, setTotalAvalilableReward] = useState();
  const [minRegister, setMinRegister] = useState();
  const [totalRewards, setTotalRewards] = useState();
  const [amount, setAmount] = useState();
  const [referrer, setReferrer] = useState();
  const [showModal, setShowModal] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  
  const referralBaseLink = "https://Victorycash.tech/staking?ref=";
  
  useEffect(() => {
    // let referral = searchParams.get("staking");
    // console.log("Referral: ", referral);
    let params = getQueryParams();
    let ref = params ? params.ref ? params.ref : null : null;
    if (ref) {
      setReferrer(ref);
    }
    // console.log(ref);
    // const value = queryString.parse(this.props.location.search);
    // const ref = value.ref;
    // console.log('ref', ref)//123    
  });

  const getQueryParams = (query = null) => (query||window.location.search.replace('?','')).split('&').map(e=>e.split('=').map(decodeURIComponent)).reduce((r,[k,v])=>(r[k]=v,r),{});
  
  // type: 
  //    null: Normal toast
  //    'success': Success toast
  //    'error': Error toast
  const showToast = (msg, type=null) => {
    if (type) {
      toast[type](msg, {
        // icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      toast(msg, {
        // icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  }
  const init = async () => {
    if (isReady()) {
      return;
    }

    setLoading(true);
    let web3;
    try {
      web3 = await initWeb3();
    } catch (err) {
      console.error(err);
      setLoading(false);
      return;
    }

    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    let chainId = CHAIN_INFO.ID;
    if (networkId !== chainId) {
      showToast("Switching blockchain network ...");
      // setError("Please connect BSC network");
      switchChain(web3);
      setLoading(false);
      return;
    }
    const viccToken = new web3.eth.Contract(viccDeployedInfo.abi, viccDeployedInfo.address); //mainnet address for lead token
    await addViccTokenToWallet(viccToken);
    const _totalSupply = await viccToken.methods.totalSupply().call();
    const balance = await viccToken.methods.balanceOf(accounts[0]).call();

    const viccStaking = new web3.eth.Contract(stakingDeployedInfo.abi, stakingDeployedInfo.address); //mainnet adddress for staking dapp
    const _totalStaked = await viccStaking.methods
      .getUserTotalDeposits(accounts[0])
      .call();
    const _minStake = await viccStaking.methods.minimumStakeValue().call();
    const _referralRewards = await viccStaking.methods
      .getUserReferralBonus(accounts[0])
      .call();
    const _referralCount = await viccStaking.methods
      .getUserReferralCount(accounts[0])
      .call();
    const _dailyROI = await viccStaking.methods.DAILY_ROI().call();

    const totalAvailable = await viccStaking.methods
      .getUserAvailable(accounts[0])
      .call();

    setWeb3(web3);
    setAccounts(accounts);
    setViccStaking(viccStaking);
    setViccToken(viccToken);
    setTotalSupply(_totalSupply);
    setBalance(balance);
    setTotalStaked(_totalStaked);
    setMinStake(_minStake);
    setReferralRewards(_referralRewards);
    setTotalAvalilableReward(totalAvailable);
    setReferralCount(_referralCount);
    setDailyROI(_dailyROI);

    window.ethereum.on("accountsChanged", (accounts) => {
      setAccounts(accounts);
      if (accounts) {
        // changed account
        setAccounts(accounts);
      } else {
        // disconnect
        setAccounts([]);
      }
    });

    setLoading(false);
  };

  const switchChain = async web3 => {
    let chainId = CHAIN_INFO.ID;
    if (CHAIN_INFO.ID === 5777) {
      chainId = 1337;
    }
    try {
      chainId = await web3.utils.toHex(chainId);
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          if (CHAIN_INFO.ID === 5777) {
            chainId = 1337;
          }
          chainId = await web3.utils.toHex(chainId);
          window.ethereum
            .request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainName: CHAIN_INFO.NAME,
                  chainId: chainId,
                  nativeCurrency: {
                    name: CHAIN_INFO.SYMBOL,
                    symbol: CHAIN_INFO.SYMBOL,
                    decimals: 18,
                  },
                  blockExplorerUrls: CHAIN_INFO.BLOCK_EXPLORER_URLS,
                  rpcUrls: CHAIN_INFO.RPC_URLS,
                },
              ],
            })
            .then((res) => {
              return;
            });
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  }

  const addViccTokenToWallet = async tokenInstance => {
    let viccAddress = localStorage.getItem("ViccAddress");
    if (viccAddress !== tokenInstance._address)  {
      const symbol = await tokenInstance.methods.symbol().call();
      const decimals = await tokenInstance.methods.decimals().call();
      try {
        await window.ethereum.sendAsync({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenInstance._address,
              symbol: symbol,
              decimals: decimals,
              image: null,
            },
          },
        }, (err, added) => {
          if (added) {
              localStorage.setItem("ViccAddress", tokenInstance._address);
              console.log('VICC token added!')
          } else {
              console.log('Failed to add VICC token!', err)
          }
        });
      } catch (error) {
        showToast("Failed to add VICC token:", error.message);
      }
    }
  }
  const isReady = () => {
    return !!viccStaking && !!web3 && !!accounts;
  };

  useEffect(() => {
    const triggerAlreadyInjectedWeb3 = async () => {
      console.log("!!!!!!!!!!!!!!!!!!!");
      if (window.ethereum) {
        await init();
      }
    };
    triggerAlreadyInjectedWeb3();
  }, []);

  async function updateAll() {
    await Promise.all([
      updateTotalSupply(),
      updateAccountBalance(),
      updateTotalAvailable(),
      updateTotalStaked(),
      stakeRewards(),
      minRegisteration(),
      totalReward(),
      updateReferrals(),
    ]);
  }

  useEffect(() => {
    if (isReady()) {
      updateAll();
    }
  }, [viccStaking, viccToken, web3, accounts]);

  async function updateReferrals() {
    if (viccToken) {
      const _referralRewards = await viccStaking.methods
        .getUserReferralBonus(accounts[0])
        .call();
      setReferralRewards(_referralRewards);
      const _referralCount = await viccStaking.methods
        .getUserReferralCount(accounts[0])
        .call();
      setReferralCount(_referralCount);
    }
  }

  async function updateAccountBalance() {
    if (viccToken) {
      const balance = await viccToken.methods.balanceOf(accounts[0]).call();
      setBalance(balance);
      return balance;
    }
  }

  async function updateTotalSupply() {
    if (viccToken) {
      const _totalSupply = await viccToken.methods.totalSupply().call();
      setTotalSupply(_totalSupply);
      return _totalSupply;
    }
  }

  async function updateTotalStaked() {
    if (viccStaking) {
      const _totalStaked = await viccStaking.methods
        .getUserTotalDeposits(accounts[0])
        .call();
      setTotalStaked(_totalStaked);
      return _totalStaked;
    }
  }

  async function updateTotalAvailable() {
    if (viccStaking) {
      const value = parseFloat(
        await viccStaking.methods.getUserAvailable(accounts[0]).call()
      );
      setTotalAvalilableReward(value);
      return value;
    }
  }

  async function minRegisteration() {
    if (viccStaking) {
      const value = parseFloat(
        await viccStaking.methods.minimumStakeValue().call()
      );
      const sum = parseFloat(value / (10**18));
      setMinRegister(sum);
      return sum;
    }
  }

  async function stakeRewards() {
    if (viccStaking) {
      const rewards = parseFloat(
        await viccStaking.methods.getUserDividends(accounts[0]).call()
      );
      setStakeRewards(rewards);
      return rewards;
    }
  }

  async function totalReward() {
    const sum = parseFloat(
      await viccStaking.methods.getUserTotalWithdrawn(accounts[0]).call()
    );

    setTotalRewards(sum);
    return sum;
  }

  async function registerAndStake() {
    if (amount == undefined || amount === 0 || amount === "") {
      showToast("Minimum staking value is " + parseInt(minStake/(10**18)) + " VICC!", "error");
      return;
    }
    setStakeLoading(true);
    await updateAll();
    const actual = amount * (10 ** 18);
    if (actual < parseFloat(minStake)) {
      showToast("Minimum staking value is " + parseInt(minStake/(10**18)) + " VICC!", "error");
      setStakeLoading(false);
      return;
    }
    const arg = fromExponential(actual);
    try {
      let ref = referrer;
      await viccToken.methods
        .approve(stakingDeployedInfo.address, arg)
        .send({ from: accounts[0] });
      console.log("!!!!!!!!!!!!!!!!! Approved");
      if (!ref || ref.length !== 42)
        ref = "0x0000000000000000000000000000000000000000";
      await viccStaking.methods.invest(ref, arg).send({
        from: accounts[0],
        gas: "3000000",
      });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setStakeLoading(false);
  }

  async function withdrawEarnings() {
    setWithdrawLoading(true);
    await updateAll();
    if (parseFloat(totalAvailabelReward) / (10 ** 18) < 0.1) {
      console.error("No earnings yet!");
      showToast("No earnings yet!", "error");
      setWithdrawLoading(false);
      return;
    }
    try {
      await viccStaking.methods.withdraw().send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setWithdrawLoading(false);
  }

  async function compoundEarnings() {
    setCompoundLoading(true);
    await updateAll();
    if (parseFloat(stakingRewards) === 0) {
      console.error("No earnings yet!");
      showToast("No staking reward yet!", "error");
      setCompoundLoading(false);
      return;
    }
    try {
      await viccStaking.methods.reinvest().send({ from: accounts[0] });
      await updateAll();
    } catch (err) {
      if (err.code !== 4001) {
        setShowModal(true);
      }
      console.error(err);
    }
    setCompoundLoading(false);
  }

  const buyVicc = () => {
    window
      .open(
        "https://pancakeswap.finance/swap?outputCurrency=0x09CD2D1351DeBe79E6da00Fd5d078b4FCe89721C",
        "_blank"
      )
      .focus();
  };

  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    let difference = +new Date(Date.UTC(2022, 4, 27, 20, 0, 0)) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours:
          Math.floor((difference / (1000 * 60 * 60)) % 24) < 10
            ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`
            : Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes:
          Math.floor((difference / 1000 / 60) % 60) < 10
            ? `0${Math.floor((difference / 1000 / 60) % 60)}`
            : Math.floor((difference / 1000 / 60) % 60),
        seconds:
          Math.floor((difference / 1000) % 60) < 10
            ? `0${Math.floor((difference / 1000) % 60)}`
            : Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="top-layout w-full overflow-hidden">
      <Toaster />
      {/*<ToastContainer />*/}
      {showModal && (
        <Modal title="" onClose={() => setShowModal(false)}>
          <div className="text-2xl mb-2">
            Error! Your transaction has been reverted!
          </div>
          <div>1. Please check your account and retry again...</div>
          <div>2. Your referrer's address is a registered member if any</div>

          <div className="my-2">
            Thanks for your support and feel free to{" "}
            <a href="https://google.com" className="text-blue-500">
              contact us
            </a>
          </div>

          <div className="flex flex-row justify-center">
            <Button className="medium-size" onClick={() => setShowModal(false)}>Close</Button>
          </div>
        </Modal>
      )}
      <div className="relative  w-full top-0">
        <img src="/images/nosiy.png" alt="" className="absolute  top-noisy" />
        <img
          src="/images/nosiy.png"
          alt=""
          className="absolute  second-noisy"
        />
      </div>

      <div className="relative  w-full top-0">
        <div className="absolute w-full home-gradient"></div>
      </div>

      <div className="relative w-full staking-main-layout">
        <Header />
        <div className="container m-auto pb-18 px-4 force-height responive-margin">
          <div className="page-title-label-layout flex justify-center">
            <h3 className="text-white">Staking</h3>
          </div>
          <div className="staking-main-content pt-5 xl:pt-8">
            <div className="text-center text-white text-2xl">
              {timerComponents.length ? timerComponents : <span></span>}
            </div>
            <div className="text-center text-white text-2xl">
              Slippage Tolerance: Each Buy/Sell will automatically burn 10% and 4% goes for Radical Marketing
            </div>

            {!accounts && (
              <div className="w-full py-6 text-center">
                <Button
                  className="w-full md:w-2/5 text-2xl flex flex-row buy-vicc-button justify-center mx-auto medium-size"
                  uppercase={false}
                  onClick={async () => await init()}
                >
                  {loading && <Spinner color="white" size={40} />}
                  {!loading && (error !== "" ? error : "CONNECT WALLET")}
                </Button>

                <div className="text-white text-center mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  <h1>Stake Your VICC Token</h1>
                </div>
                <div className="w-full md:w-3/6 justify-center mx-auto mt-6">
                  <Card title="Rules">
                    <div className="flex flex-col pt-8 pb-4 text-white text-center">
                      Victory Cash staking contract is designed to payout
                      investors 2% a day with a 354% ROI. The more VICC
                      appreciates in value the higher your payout is in USD.
                      Please read our document page for full staking details.
                    </div>
                  </Card>
                  <div className="flex flex-col pt-8 px-2">
                    <br />
                    <br />
                    <Button
                      className="w-full md:w-2/5 text-2xl flex flex-row buy-vicc-button justify-center mx-auto medium-size"
                      uppercase={false}
                      onClick={buyVicc}
                    >
                      BUY VICC
                    </Button>
                    <br />
                    <br />
                  </div>
                  {/* <Card noLine>
                  <div className="flex flex-col px-2">
                    <div className="text-center pb-4">
                      <div className="text-white text-xs">
                        <span className="text-blue-500">Disclaimer</span>{" "}
                        Staking Smart Contract was audited by{" "}
                        <a
                          href="https://immunebytes.com/"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Immune Bytes
                        </a>
                        . Keep in mind that security audits don't fully
                        eliminate all possible security risks. Use our staking
                        page at your own risk. <br />
                        <span className="text-blue-500">Note</span> The Stake
                        Rewards can be reduced without prior warning, stakers
                        are advised to claim their rewards daily.
                      </div>
                    </div>
                  </div>
                </Card> */}
                </div>
              </div>
            )}
            {accounts && (
              <div className="grid grid-col-1 md:grid-cols-1 gap-6 mt-10 w-full md:w-4/6 justify-center mx-auto mt-6">
                <Button
                  className="w-full md:w-2/5 text-2xl flex flex-row  buy-vicc-button justify-center mx-auto medium-size"
                  uppercase={false}
                  onClick={buyVicc}
                >
                  Buy VICC
                </Button>
                <Card title="Your Total Deposit" noLine={true}>
                  <div className="flex flex-col pt-8 pb-4 text-white">
                    <div className="text-center">
                      <span className="text-white text-5xl">
                        {(
                          parseFloat(totalStaked).toFixed(2) / (10**18)
                        ).toFixed(2)}
                      </span>
                      <span className="text-white text-2xl ml-2">VICC</span>
                    </div>
                    <div className="text-center">
                      {(
                        (parseFloat(totalStaked) * 100.0) /
                        parseFloat(totalSupply)
                      ).toFixed(5)}
                      %
                    </div>
                    <div className="text-center">of total supply</div>
                  </div>
                </Card>

                <Card title="Staking" noLine={true}>
                  <div className="flex flex-col pt-8 px-2">
                    <div className="text-center pb-4">
                      <span className="text-lg text-gray-400">
                        Minimum amount needed:{" "}
                      </span>
                      <span className="text-white text-3xl">{minRegister}</span>
                      <span className="text-white text-2xl ml-2">VICC</span>
                    </div>
                    <div className="text-center pb-4">
                      <span className="text-lg text-gray-400">
                        Available amount:{" "}
                      </span>
                      <span className="text-white text-3xl">
                        {parseFloat(
                          parseFloat(balance) / (10**18)
                        ).toFixed(2)}
                      </span>
                      <span className="text-white text-2xl ml-2">VICC</span>
                    </div>
                    <div className="rounded-md border-2 border-primary p-2 flex justify-between items-center">
                      <input
                        type="number"
                        placeholder="VICC To Stake"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="text-white font-extrabold flex-shrink text-2xl w-9/12 bg-transparent focus:outline-none focus:bg-white focus:text-black px-2"
                      />
                      <Button
                        onClick={() => registerAndStake()}
                        className="flex flex-row items-center w-48 justify-center medium-size"
                      >
                        {stakeLoading ? (
                          <Spinner size={30} />
                        ) : (
                          <>
                            <img src="/images/locked.svg" width="25" alt="" />
                            <span>STAKE</span>{" "}
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="text-white text-center mt-4">
                      Has referrer's address?
                    </div>
                    <div className="rounded-md border-2 border-primary p-2 flex justify-between items-center">
                      <input
                        placeholder="Referrer Address"
                        value={referrer}
                        // onChange={(e) => setReferrer(e.target.value)}  
                        className="text-white font-extrabold flex-shrink text-2xl w-full bg-transparent focus:outline-none focus:bg-white focus:text-black px-2"
                        readOnly={true}
                      />
                    </div>
                  </div>
                </Card>

                <Card title="Your Earnings" noLine={true}>
                  <div className="flex flex-col pt-8 px-2">
                    <div className="text-center pb-8">
                      <span className="text-white text-5xl">
                        {(parseFloat(totalRewards) / (10**18)).toFixed(
                          2
                        )}
                      </span>
                      <span className="text-white text-2xl ml-2">VICC</span>
                    </div>
                    <div className="flex flex-row justify-evenly">
                      <Button
                        type="submit"
                        className="flex flex-row items-center justify-center me-4 medium-size "
                        onClick={() => compoundEarnings()}
                      >
                        {compoundingLoading ? (
                          <Spinner size={30} />
                        ) : (
                          <>
                            <img src="/images/locked.svg" width="25" alt="" />
                            <span>COMPOUND</span>{" "}
                          </>
                        )}
                      </Button>

                      <Button
                        type="submit"
                        className="flex flex-row items-center justify-center medium-size"
                        onClick={() => withdrawEarnings()}
                      >
                        {withdrawLoading ? (
                          <Spinner size={30} />
                        ) : (
                          <>
                            <img src="/images/unlocked.svg" width="25" alt="" />
                            <span>CLAIM</span>{" "}
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="text-center text-white text-2xl mt-8 mx-2">
                      <div>
                        <div>
                          <span className="text-gray-400 text-lg">
                            Staking Reward:{" "}
                          </span>
                          {
                          (parseFloat(stakingRewards) / (10**18)).toFixed(2)
                          }{" "}
                          VICC
                        </div>
                        <div>
                          <span className="text-gray-400 text-lg">
                            Daily Return:{" "}
                          </span>
                          {parseFloat(dailyROI) / 10} %
                        </div>
                      </div>
                      <div>
                        <div>
                          <span className="text-gray-400 text-lg">
                            Referral Reward:
                          </span>{" "}
                          {(parseFloat(referralRewards) / (10**18)).toFixed(2)}{" "}
                          VICC
                        </div>
                        <div>
                          <span className="text-gray-400 text-lg">
                            Referral Count:
                          </span>{" "}
                          {referralCount}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card title="Referral Link" noLine={true}>
                  <div className="flex flex-col pt-8 px-2">
                    <div className="text-center pb-4">
                      <span className="text-lg text-gray-400">
                        Earn 12% of the VICC used to stake VICC from anyone who uses
                        your referral link
                      </span>
                    </div>
                    <div className="rounded-md border-2 border-primary p-2 flex justify-between items-center">
                      <input
                        type="text"
                        placeholder="Your referral link"
                        defaultValue={referralBaseLink + accounts}
                        className="text-white  flex-shrink text-1xl w-full bg-transparent focus:outline-none focus:bg-white focus:text-black px-2"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default StakingPage;
