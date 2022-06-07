import React, { useEffect, useState } from 'react';
import TokenomicsCard from '../components/TokenomicsCard';
import Header from "../components/Header";

const TokenomicsPage = props => {
	return(<>
		<div className="tokenomics-container">
       		<Header />
   			<div className="block">
				<div className="page-title-label-layout flex justify-center">
					<h3>Tokenomics</h3>
				</div>
				<div className="flex justify-center text-gray-600 ml-10 mr-10">
					With a total of 100,000 VICC tokens, the following amounts have been allotted for different purpose.
				</div>
				<div className="mt-5 m-0 lg:m-10 md:m-5 flex justify-center">
					<div className="grid lg:grid-cols-4 pb-5 md:grid-cols-2 gap-5">
						<TokenomicsCard 
							title="2% Staking Fee"
						>
							<span className="text-gray-600">
								2% of all transactions will go to paying out all stakers.
							</span>
						</TokenomicsCard>
						<TokenomicsCard 
							title="1% Burn"
						>
							<span className="text-gray-600">
								1% of all transactions will be burnt. This burn mechanism will reduce the total 
								supply of VC over time.
							</span>
						</TokenomicsCard>
						<TokenomicsCard 
							title="80% Tokens To Pancakeswap"
						>
							<span className="text-gray-600">
								848.080 tokens will be added to pancakeswap for users to trade.
							</span>
						</TokenomicsCard>
						<TokenomicsCard 
							title="10% Tokens To Initial Staking Pool"
						>
							<span className="text-gray-600">
								6,010 tokens will be placed in a smart contract to payout initial stakers who stake VC.
							</span>
						</TokenomicsCard>
					</div>
				</div>
				<div className="m-0 lg:m-10 md:m-5 pb-5 flex justify-center">
					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
						<TokenomicsCard 
							title="5% For Future Rewards"
						>
							<span className="text-gray-600">
								3,005 tokens will be placed in a token lock smart contract that will lock these tokens 
								for 95 days. Theses tokens will be used in the future for staking rewards when 10% 
								initial rewards run out. VC is not an inflationary token, no more can ever be minted,
								however we will think of a way to reward users long term throughout the years.
							</span>
						</TokenomicsCard>
						<TokenomicsCard 
							title="1% To Marketing Wallet"
						>
							<p className="text-gray-600">
								601 tokens will be held by the developer for marketing and development purpose.
							</p>
							<div className="mt-5">
								<a className="text-blue-500" href="https://bscscan.com/address/0x2accf7cdf26049ff0bf18f179aa4e60979b3b51c">Dev Wallet</a>
							</div>
						</TokenomicsCard>
						<TokenomicsCard 
							title="4% To Developers"
						>
							<p className="text-gray-600">
								2,404 tokens will be locked away in a smart contract for two years and this
								will be the developers tokens for creating VictoryCashCoins.
							</p>
							<div className="mt-5">
								<a className="text-blue-500" href="https://bscscan.com/address/0x2accf7cdf26049ff0bf18f179aa4e60979b3b51c">Dev Wallet</a>
							</div>
						</TokenomicsCard>
					</div>
				</div>
			</div>
		</div>
	</>);
}

export default TokenomicsPage;