import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "../components/common/Button";
import NavMenuBar from "../components/common/NavMenuBar";
import PresaleCard from "../components/PresaleCard";

const HomePage = (props) => {

	let history = useHistory();

	const onClickStake = (ev) => {
		console.log("onClickStake()");
		history.push("/stake");
	}

	return (
		<>
			<div className="top-layout">
				<div className='main-container-box'>
					<img className="bg-effect-1" src="/images/Ellipse 134.png" alt="" />
					<img className="bg-effect-2" src="/images/Ellipse 133.png" alt="" />
					<NavMenuBar />
					<div className="top-container">
						<div className="top-content h-full flex sm:flex-col md:flex-col xl:flex-row">
							<div className="w-full md:w-full xl:w-1/2 text-center xl:text-left flex items-center py-10 xl:py-0">
								<div>
									<div className="greeting-section-layout">
										<div className="greeting-layout">
											<h2 className='font-pop'>Welcome to the</h2>
											<h2 className="highlighted font-pop">
												$VictoryCash Coin
											</h2>
										</div>
										<div className="greeting-description-layout px-6 py-5 lg:py-10">
											<div className='font-gold text-white'>
												With a presale price of 0.008 USDC.
											</div>
											<div className='font-gold text-white'>
												Our minimum limit will be $100 USDC and a max of $4,000 USDC.
												See our Whitepaper for further details.
											</div>
										</div>
									</div>
									<div className="flex px-6 pt-10 justify-center xl:justify-start">
										<Button className="gradient-button-bg mr-10">
											Buy Token
										</Button>
										<Button className="">
											Whitepaper
										</Button>
									</div>
								</div>
							</div>
							<div className='w-full md:w-full xl:w-1/2 right-panel-bg-layout flex justify-center items-center'>
								<PresaleCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;