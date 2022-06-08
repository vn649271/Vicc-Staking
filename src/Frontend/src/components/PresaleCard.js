import React from "react";
import Button from "../components/common/Button";

export default ({ title, className, noLine, children }) => {
	return (
		<div className="presale-card-body semi-transparent-bg">
			<div className="presale-card-top px-10 pb-5 pt-10">
				<div className="flex justify-between">
					<div className="presale-title-layout text-center font-gold-bold">Presale </div>
					<div className="presale-amount-layout text-center">|</div>
					<div className="text-center">
						<div className="presale-amount-layout text-white font-gold-normal">00000000</div>
						<div className="token-sold-label-layout font-gold-bold">Token Sold</div>
					</div>
				</div>
				<div className="flex justify-between py-6">
					<div>
						<div className="elapsed-datetime-value-layout text-center text-white font-gold-normal">00</div>
						<div className="elapsed-datetime-label-layout text-center pt-5">Days</div>
					</div>
					<div className="elapsed-datetime-value-layout text-center text-white font-gold-normal">:</div>
					<div>
						<div className="elapsed-datetime-value-layout text-center text-white font-gold-normal">00</div>
						<div className="elapsed-datetime-label-layout text-center pt-5">Hours</div>
					</div>
					<div className="elapsed-datetime-value-layout text-center text-white font-gold-normal">:</div>
					<div>
						<div className="elapsed-datetime-value-layout text-center text-white font-gold-normal">00</div>
						<div className="elapsed-datetime-label-layout text-center pt-5">Minutes</div>
					</div>
					<div className="elapsed-datetime-value-layout text-center text-white font-gold-normal">:</div>
					<div>
						<div className="elapsed-datetime-value-layout text-center text-white font-gold-normal">00</div>
						<div className="elapsed-datetime-label-layout text-center pt-5">Secs</div>
					</div>
				</div>
				<div className="flex justify-center mb-2">
					<Button className="main-button-theme gradient-button-bg">
						Buy Now
					</Button>
				</div>
			</div>
			<div className="presale-card-footer">
				<div className="presale-duration-comment1-layout font-gold-normal">
					Presale Duration - <b className="font-gold-bold">June 7th - June 14th 12:00 UTC</b>
				</div>
				<div className="presale-duration-comment2-layout">
					( 5 Days or until we reach our goal of 1.6 Million USDC )
				</div>
			</div>
		</div>
	);
};
