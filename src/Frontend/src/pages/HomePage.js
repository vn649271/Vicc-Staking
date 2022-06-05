import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/common/Button";

const HomePage = (props) => {

	const [selectedMenuItem, setSelectedMenuItem] = useState('home');

	let history = useHistory();

	const onClickStake = (ev) => {
		console.log("onClickStake()");
		history.push("/stake");
	}
	const onSelectMenuItem = (ev) => {
		let selectedItem = ev.target.id.replace('menu-item-', '');
		setSelectedMenuItem(selectedItem);
		alert(selectedItem);
	}

	return(
		<>
			<div className="top-layout p-10">
				<img className="bg-effect-1" src="/images/Ellipse 134.png" alt="" />
				<img className="bg-effect-2" src="/images/Ellipse 133.png" alt="" />
				<div className="header-layout flex justify-between align-baseline">
					<div className="logo-layout">
						<img src="/images/vicc189x189-1.png" alt="" />
					</div>
					<div className="menu-layout flex justify-start">
						<ul className="flex justify-start">
							<li id="menu-item-home" className={selectedMenuItem == 'home'? "active": ""} onClick={onSelectMenuItem}>Home</li>
							<li id="menu-item-about" className={selectedMenuItem == 'about'? "active": ""} onClick={onSelectMenuItem}>About</li>
							<li id="menu-item-tokenomics" className={selectedMenuItem == 'tokenomics'? "active": ""} onClick={onSelectMenuItem}>Tokenomics</li>
							<li id="menu-item-roadmap" className={selectedMenuItem == "roadmap"? "active": ""} onClick={onSelectMenuItem}>Roadmap</li>
							<li id="menu-item-contactus" className={selectedMenuItem == "contactus"? "active": ""} onClick={onSelectMenuItem}>Contact us</li>
						</ul>
					</div>
					<div className="connect-wallet-layout flex items-center">
						<Button className="small-button border-pink" onClick={onClickStake}>
							<span>Join Presale</span>
						</Button>
					</div>
				</div>
				<div className="content-layout flex justify-between sm:justify-start">
					<div className="left-panel-layout w-1/2 text-left flex items-center">
						<div className="block">
							<div className="greeting-section-layout">
								<div className="greeting-layout block mb-10">
									<h2 className="font-bold justify-content-">Welcome to the</h2>
									<h2 className="highlighted flex justify-content-start font-bold">
										$VictorCashCoin
									</h2>
								</div>
								<div>
									<div>
									With a presale price of 0.008 USDC.
									</div>
									<div>
										Our minimum limit will be $100 USDC and a max of
									</div>
									<div>
										$4,000 USDC. See our Whitepaper for further details.
									</div>
								</div>
							</div>
							<div className="left-panel-buttons-layout inline-block flex justify-between">
								<Button className="gradient-button-bg">
									Buy Token
								</Button>
								<Button className="">
									Whitepaper
								</Button>
						
							</div>
						</div>
					</div>
					<div className="right-panel-layout w-1/2 block flex justify-center">
						<div className="right-panel-bg-layout">
							<img className="" src="/images/vcc-token.png" alt="" />
						</div>
						<div className="right-panel-content-layout semi-transparent-bg flex justify-center">
							<div className="block">
								<div className="block pt-10 pl-5 pr-5">
									<div className="flex justify-center">
										<div className="w-10/12 block">
											<div className="presale-amount-section-layout flex justify-between">
												<div className="presale-title-layout flex items-center">Presale </div>
												<div className="presale-amount-layout flex items-center">|</div>
												<div className="flex items-center flex items-center">
													<div className="block">
														<div className="presale-amount-layout">00000000</div>
														<div className="token-sold-label-layout">Token Sold</div>										
													</div>
												</div>
											</div>
											<div className="elapsed-time-layout flex justify-between">
												<div className="block">
													<div className="elapsed-datetime-value-layout">00</div>
													<div className="elapsed-datetime-label-layout">Days</div>
												</div>
												<div>:</div>
												<div className="block">
													<div className="elapsed-datetime-value-layout">00</div>
													<div className="elapsed-datetime-label-layout">Hours</div>
												</div>
												<div>:</div>
												<div className="block">
													<div className="elapsed-datetime-value-layout">00</div>
													<div className="elapsed-datetime-label-layout">Minutes</div>
												</div>
												<div>:</div>
												<div className="block">
													<div className="elapsed-datetime-value-layout">00</div>
													<div className="elapsed-datetime-label-layout">Secs</div>
												</div>
											</div>										
										</div>
									</div>
									<div className="w-100 flex justify-center mb-10">
										<div>
											<Button className="main-button-theme gradient-button-bg">
												Buy Now
											</Button>									
										</div>
									</div>
								</div>
								<div className="right-panel-footer-layout">
									<div className="block">
										<div className="presale-duration-comment1-layout">
											Presale Duration - <b>June 7th - June 14th 12:00 UTC</b>
										</div>
										<div className="presale-duration-comment2-layout">
											( 5 Days or until we reach our goal of 1.6 Million USDC )
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-layout"></div>
			</div>
		</>
	);
}

export default HomePage;