import React, { useEffect, useState } from 'react';
import Card from '../components/common/Card';
import LinkedCircle from '../components/common/LinkedCircle';
import RoadmapBlock from '../components/common/RoadmapBlock';

const RoadmapPage = props => {
	return(<>
		<div className="roadmap-container">
			<div className="page-title-label-layout flex justify-center">
				<h3>Roadmap</h3>
			</div>
			<div className="block">
				<div className="flex justify-center">
					<div className="w-7/12 ">
						<div className='block'>
							<div className="roadmap-block-left flex justify-start">
								<div className="roadmap-block-row1-layout flex justify-center items-center">
									<RoadmapBlock
										title="Development"
									>
										<ul className="roadmap-block-list-layout">
											<li className="roadmap-block-list-item-layout text-gray-700">
												Create the VictoryCashCoins smart contract</li>
											<li className="roadmap-block-list-item-layout text-gray-700">
												Create a website for VictoryCashCoins</li>
											<li className="roadmap-block-list-item-layout text-gray-700">
												Get VictoryCashCoins audited</li>
											<li className="roadmap-block-list-item-layout text-gray-700">
												Do a fair launch for VictoryCashCoins</li>
										</ul>
									</RoadmapBlock>
									<div className="roadmap-block-number-layout flex justify-end items-end">
										<div className="roadmap-block-number-label-layout w-12 h-12 rounded-full text-center align-middle overflow-clip">
											<span>1</span>
										</div>
									</div>
									<LinkedCircle direction="right" />
								</div>
							</div>
							<div className="roadmap-block-right flex justify-end">
								<div className="roadmap-block-row1-layout flex justify-center items-center">
									<LinkedCircle direction="left" />
									<RoadmapBlock
										title="Marketing & Initial Community Building"
									>
										<ul className="roadmap-block-list-layout">
											<li className="roadmap-block-list-item-layout text-gray-700">
												<p>Once the fair launch happens, marketing will be</p>
												<p>necessary to build the initial community for VC.</p>
											</li>
										</ul>
									</RoadmapBlock>
									<div className="roadmap-block-number-layout flex justify-end items-end">
										<div className="roadmap-block-number-label-layout w-12 h-12 rounded-full text-center align-middle overflow-clip">
											<span>2</span>
										</div>
									</div>
								</div>
							</div>
							<div className="roadmap-block-left flex justify-start">
								<div className="roadmap-block-row1-layout flex justify-center items-center">
									<RoadmapBlock
										title="Converting The Basics"
									>
										<ul className="roadmap-block-list-layout">
											<li className="roadmap-block-list-item-layout text-gray-700">
												Apply for coinmarketcap</li>
											<li className="roadmap-block-list-item-layout text-gray-700">
												Apply for coingecko</li>
											<li className="roadmap-block-list-item-layout text-gray-700">
												Apply for blockfolio</li>
											<li className="roadmap-block-list-item-layout text-gray-700">
												Apply for DappRadar and similar sites</li>
											<li className="roadmap-block-list-item-layout text-gray-700">
												Continue Marketing Campaigns</li>
										</ul>
									</RoadmapBlock>
									<div className="roadmap-block-number-layout flex justify-end items-end">
										<div className="roadmap-block-number-label-layout w-12 h-12 rounded-full text-center align-middle overflow-clip">
											<span>3</span>
										</div>
									</div>
									<LinkedCircle direction="right" />
								</div>
							</div>
							<div className="roadmap-block-right flex justify-end">
								<div className="roadmap-block-row1-layout flex justify-center items-center">
									<LinkedCircle direction="left" />
									<RoadmapBlock
										title="Setting Up Treasury"
									>
										<ul className="roadmap-block-list-layout">
											<li className="roadmap-block-list-item-layout text-gray-700">
												<p>The treasury will play a key role in yield earnings</p>
												<p>that will keep our protocol sustainable(more</p>
												<p>info on our project details page).</p>
											</li>
										</ul>
									</RoadmapBlock>
									<div className="roadmap-block-number-layout flex justify-end items-end">
										<div className="roadmap-block-number-label-layout w-12 h-12 rounded-full text-center align-middle overflow-clip">
											<span>4</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</>);
}

export default RoadmapPage;