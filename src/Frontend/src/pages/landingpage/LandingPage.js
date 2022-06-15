import React from 'react';
import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';
import "./landing.css";

const LandingPage = () => {

	return (
		<>
			<div className='landing-body' id="landing-home">
				<LandingHeader />
				<div className='landing-container'>
					<div id='introduction' className='landing-content introduction-body py-16 px-4'>
						<div className='introduction-body-content flex justify-between w-full'>
							<div className='introtext-box w-3/5'>
								<h1 className='intro-title pb-4'>
									VictoryCashCoin
								</h1>
								<p className='intro-text px-3'>
									VictoryCashCoin is a low supply deflationary BEP20 token on the BNB Chain (A.K.A Binance Smart Chain). VictoryCashCoin is a fair-launched project with no presale, venture capitalist funding, or any type of private investors that would have any advantage over new investors. The initial and max supply of VictoryCashCoin is 50,000 coins. Over time as users buy, sell, make transfers, and stake VICC (VictoryCashCoin) the supply will be taken out of circulation which in theory can attribute to price appreciation.
								</p>
							</div>
							<div className='introimg-box w-2/5 flex justify-center items-center'>
								<img src='/images/landingpage/1.png' />
							</div>
						</div>
						<div className='intro-buttonbox flex items-center'>
							<div className='introbutton buy-btn'>
								Audit
								<span className='arrow-btn'>
									&gt;
								</span>
							</div>
							<div className='introbutton buy-btn'>
								Buy VICC Now
								<span className='arrow-btn'>
									&gt;
								</span>
							</div>
							<div className='introbutton2 buy-btn'>
								Join Our Group Chat
								<span className='arrow-btn'>
									&gt;
								</span>
							</div>
						</div>
					</div>
					<div id='information' className='information-body flex w-full'>
						<div className='w-1/2 flex justify-end info-first p-16'>
							<div className='info-content'>
								<div className='info-textbox'>
									<div className='info-title text-white'>
										VictoryCashCoin Staking Info
									</div>
									<div className='info-text text-white'>
										When a user stakes their VICC tokens they will earn 1.5% a day with an APY of 265% (minus any token taxation). The 1.5% will be paid out in VICC coins, meaning if the price of VICC appreciates the overall payout in USD also increases. Users can not withdraw the initial deposit and will get their initial deposit in 67 days (1.5% x 67= 100%; 100%=initial deposit) and the rest of the 298 days will be pure profit. We also have a shorter term staking option that pays 5% a day with a max payout of 30% (5% a day, 20 days = 100% which is your initial deposit plus 6 days = 30% profit)
									</div>
								</div>
								<img src='/images/landingpage/2.png' />
							</div>
						</div>
						<div className='w-1/2 flex justify-start info-second p-16'>
							<div className='info-content'>
								<div className='info-textbox'>
									<div className='info-title'>
										Reflection Tokenomics
									</div>
									<div className='info-text'>
										VICC has the ability to implement reflection tokenomics. However, because we are offering high apy staking initially to our users we will not turn on the reflection tokenomics until all our staking contracts can no longer pay out rewards to users. We believe since VICC is a fair launch token, the majority of which is held by the community, reflections will benefit all users when no more rewards can no longer get paid out
									</div>
								</div>
								<img src='/images/landingpage/3.png' />
							</div>
						</div>
					</div>
					<div id='tokenomics' className='tokenomics-body py-10'>
						<div className='flex justify-center'>
							<span className='py-3 px-20 bg-white tokenomics-title'>
								Tokenomics
							</span>
						</div>
						<div className='py-3 text-center text-white tokenomics-description my-6'>
							With a total of 50,000 VICC tokens, the following amounts have been allotted for different purposes:
						</div>
						<div className='landing-content tokenomics-content flex justify-around px-10'>
							<div className='lg:w-1/2 xl:w-1/4 tokenomics-content-items'>
								<p className='items-title'>
									2% Staking Fee
								</p>
								<p className='items-context'>
									2% of all transactions will go to paying out all stakers.
								</p>
							</div>
							<div className='lg:w-1/2 xl:w-1/4 tokenomics-content-items'>
								<p className='items-title'>
									10% Burn
								</p>
								<p className='items-context'>
									10% of all transactions will be burnt. This burn mechanism will reduce the total supply of VICC over time.
								</p>
							</div>
							<div className='lg:w-1/2 xl:w-1/4 tokenomics-content-items'>
								<p className='items-title'>
									70% Token to PancakeSwap
								</p>
								<p className='items-context'>
									2% of all transactions will go to paying out all stakers.
								</p>
							</div>
							<div className='lg:w-1/2 xl:w-1/4 tokenomics-content-items'>
								<p className='items-title'>
									10% Tokens To Initial Staking Pool
								</p>
								<p className='items-context'>
									5,000 tokens will be palced in a smart contract to payout initial stakers who stake VICC.
								</p>
							</div>
						</div>
						<div className='landing-content tokenomics-content flex justify-around px-10'>
							<div className='lg:w-1/2 xl:w-1/4 tokenomics-content-items1'>
								<p className='items-title'>
									5% For Future Rewards
								</p>
								<p className='items-context'>
									2,500 tokens will be placed in a token lock smart contract that will lock these tokens for 95 days. These tokens will be used in the future for staking rewards when 10% initial rewards run out. VICC is not an inflationary token, no more can ever be minted, however
									we will think of a way to reward users
								</p>
							</div>
							<div className='lg:w-1/2 xl:w-1/4 tokenomics-content-items1'>
								<p className='items-title'>
									1% To Marketing Wallet
								</p>
								<p className='items-context'>
									500 tokens will be held by the developer for marketing and development purposes.
								</p>
							</div>
							<div className='lg:w-1/2 xl:w-1/4 tokenomics-content-items1'>
								<p className='items-title'>
									1% to Developers
								</p>
								<p className='items-context'>
									500 tokens will be locked away in a smart contract for two years and this will be the developers tokens for creating VictoryCashCoin.
								</p>
							</div>
						</div>
					</div>
					<div id='roadmap' className='roadmap-body py-10'>
						<div className='text-center'>
							<span className='roadmap-title'>
								Road Map
							</span>
						</div>
						<div className='roadmap-content landing-content flex flex-col items-center py-10'>
							<div className='roadmap-content-items roadmap-development'>
								<div className='roadmap-text-box1'>
									<p className='text-box-title'>Development</p>
									<div className='text-box-context'>
										<p>
											&gt; Create the VictoryCashCoin smart contract
										</p>
										<p>
											&gt; Create a website for VictoryCashCoin smart
										</p>
										<p>
											&gt; Get VictoryCashCoin
										</p>
										<p>
											&gt; Do a fair launch for VictoryCashCoin
										</p>
									</div>
								</div>
								<img src='/images/landingpage/4.png' className='roadmap-img' />
								<img src='/images/landingpage/8.png' className='roadmap-hiddenimg' />
							</div>
							<div className='roadmap-content-items marketing-development'>
								<div className='roadmap-text-box2'>
									<p className='text-box-title'>Marketing & Initial <br /> Community Building</p>
									<div className='text-box-context'>
										<p>
											&gt; Once the fair launch happens marketing <br /> will be necessary to build theinitial<br />  community for VICC.
										</p>
									</div>
								</div>
								<img src='/images/landingpage/5.png' className='transform-img' />
								<img src='/images/landingpage/9.png' className='roadmap-hiddenimg' />
							</div>
							<div className='roadmap-content-items covering-development'>
								<div className='roadmap-text-box3'>
									<p className='text-box-title'>Covering The Basics</p>
									<div className='text-box-context'>
										<p>
											&gt; Apply for coinmarketcap
										</p>
										<p>
											&gt; Apply for coingecko
										</p>
										<p>
											&gt; Apply for blockfolio
										</p>
										<p>
											&gt; Apply for DappRadar and similar sites
										</p>
										<p>
											&gt; Continue Marketing Campaigns
										</p>
									</div>
								</div>
								<img src='/images/landingpage/6.png' className='roadmap-img' />
								<img src='/images/landingpage/10.png' className='roadmap-hiddenimg' />
							</div>
							<div className='roadmap-content-items setting-development'>
								<div className='roadmap-text-box4'>
									<p className='text-box-title'>Setting Up Treasury</p>
									<div className='text-box-context'>
										<p>
											&gt; The treasury will play a key role in yield <br /> earnings  that will keep our protocol <br /> sustainable <br /> (more info  on our project details page).
										</p>
									</div>
								</div>
								<img src='/images/landingpage/7.png' className='transform-img' />
								<img src='/images/landingpage/11.png' className='roadmap-hiddenimg' />
							</div>
						</div>
					</div>
				</div>
				<LandingFooter />
			</div>
		</>
	);
}

export default LandingPage;