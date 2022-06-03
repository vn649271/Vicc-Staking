import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/common/Button";

const HomePage = (props) => {

	let history = useHistory();

	const onClickStake = (ev) => {
		history.push("/stake");
	}

	return(
		<>
			<div className="top-layout">
				<div className="header-layout">
					<Header />
				</div>
				<div className="body-layout">
					<Button onClick={onClickStake}>Stake</Button>
				</div>
				<div className="footer-layout">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default HomePage;