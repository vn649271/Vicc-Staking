import React from "react";
import Button from "../components/common/Button";

export default ({ title, className, noLine, children }) => {
  return (
	<div className="presale-card-container">
		<div className="presale-card-body semi-transparent-bg">
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
						<div className="elapsed-datetime-value-layout">:</div>
						<div className="block">
							<div className="elapsed-datetime-value-layout">00</div>
							<div className="elapsed-datetime-label-layout">Hours</div>
						</div>
						<div className="elapsed-datetime-value-layout">:</div>
						<div className="block">
							<div className="elapsed-datetime-value-layout">00</div>
							<div className="elapsed-datetime-label-layout">Minutes</div>
						</div>
						<div className="elapsed-datetime-value-layout">:</div>
						<div className="block">
							<div className="elapsed-datetime-value-layout">00</div>
							<div className="elapsed-datetime-label-layout">Secs</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-100 flex justify-center mb-2">
				<div>
					<Button className="main-button-theme gradient-button-bg">
						Buy Now
					</Button>
				</div>
			</div>
		</div>
		<div className="presale-card-footer">
			<div className="block">
				<div className="presale-duration-comment1-layout">
					Presale Duration - <b>June 7th - June 14th 12:00 UTC</b>
				</div>
				<div className="presale-duration-comment2-layout">
					( 5 Days or until we reach our goal of 1.6 Million USDC )
				</div>
			</div>			
		</div>
{/*
	<div className="right-panel-content-layout semi-transparent-bg flex justify-center">
		<div className="w-full block">
			<div className="block">
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
							<div className="elapsed-datetime-value-layout">:</div>
							<div className="block">
								<div className="elapsed-datetime-value-layout">00</div>
								<div className="elapsed-datetime-label-layout">Hours</div>
							</div>
							<div className="elapsed-datetime-value-layout">:</div>
							<div className="block">
								<div className="elapsed-datetime-value-layout">00</div>
								<div className="elapsed-datetime-label-layout">Minutes</div>
							</div>
							<div className="elapsed-datetime-value-layout">:</div>
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
			<div className="w-full right-panel-footer-layout">
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
*/}
	</div>
	);
};
