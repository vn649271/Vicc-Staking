import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import {
	stakingDeployedInfo,
	viccDeployedInfo,
	CHAIN_INFO
  } from "../../utils/constants";
  
export default function LandingHeader() {

	const [selectedMenuItem, setSelectedMenuItem] = useState('home');

	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	let history = useHistory();

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		}
		window.addEventListener('resize', changeWidth)
		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, [])
	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
	}
	const onSelectMenuItem = (ev) => {
		let selectedItem = ev.target.id.replace('menu-item-', '');
		setSelectedMenuItem(selectedItem);
		history.push("/" + selectedItem);
	}
    const onClickBeginStaking = ev => {
        history.push("/staking");
    }
	return (
		<div className='landingheader-nav'>
			<div className='haeder-container'>
				<div className="flex justify-between items-center">
					<div className="header-logo">
						<img src="/images/landingpage/logo.png" alt="main-logo" className='cursor-pointer' />
					</div>
					{(toggleMenu || screenWidth > 768) && (
						<ul className={`nav-menu-list ${toggleMenu ? "with-bg-color" : ""}`}>
							<li id="menu-item-home" className={`hader-items ${selectedMenuItem} == 'home'? 'active': ''`} onClick={onSelectMenuItem}>
								<Link activeClass="active" smooth spy to="landing-home">
									Home
								</Link>
							</li>
							<li id="menu-item-tokenomics" className={`hader-items ${selectedMenuItem} == 'tokenomics'? 'active': ''`} onClick={onSelectMenuItem}>
								<Link activeClass="active" smooth spy to="tokenomics">
									Tokenomics
								</Link>
							</li>
							<li id="menu-item-roadmap" className={`hader-items ${selectedMenuItem} == 'roadmap'? 'active': ''`} onClick={onSelectMenuItem}>
								<Link activeClass="active" smooth spy to="roadmap">
									Roadmap
								</Link>
							</li>
							<li id="menu-item-contract" className={`hader-items ${selectedMenuItem} == 'token_contract'? 'active': ''`} onClick={onSelectMenuItem}>
								<a 
									className="active" 
									href={`${CHAIN_INFO.BLOCK_EXPLORER_URLS[0]}token/${viccDeployedInfo.address}`} 
									target="blank"
								>
									Token Contract
								</a>
							</li>
							<li id="menu-item-charts" className={`hader-items ${selectedMenuItem} == 'charts'? 'active': ''`} onClick={onSelectMenuItem}>
								Charts
							</li>
							{/* <li id="menu-item-home" className={`hader-items ${selectedMenuItem} == 'home'? 'active': ''`} onClick={onSelectMenuItem}>Home</li>
							<li id="menu-item-roadmap" className={`hader-items ${selectedMenuItem} == 'roadmap'? 'active': ''`} onClick={onSelectMenuItem}>Roadmap</li>
							<li id="menu-item-contract" className={`hader-items ${selectedMenuItem} == 'contract'? 'active': ''`} onClick={onSelectMenuItem}>Token Contract</li>
							<li id="menu-item-tokenomics" className={`hader-items ${selectedMenuItem} == 'tokenomics'? 'active': ''`} onClick={onSelectMenuItem}>Tokenomics</li>
							<li id="menu-item-charts" className={`hader-items ${selectedMenuItem} == 'contactus'? 'active': ''`} onClick={onSelectMenuItem}>Charts</li> */}
							{/* <li id="menu-item-stake" className={`hader-items ${selectedMenuItem} == 'stake'? 'active': ''`} onClick={onSelectMenuItem}>Stake</li> */}
						</ul>
					)}
					<div className='flex items-center'>
						<span className='header-btn text-white' onClick={onClickBeginStaking}>
							Begin Staking
						</span>
						<a className='header-btn text-white' target="blank" href="/docs/VictoryCashCoinWhitepaper.pdf">
							White Paper
						</a>
						<div className="toggle-nav-btn-layout lg:hidden md:flex">
							<button onClick={toggleNav} className="btn">
								<img className="collapsed-menu-btn-img-layout" src="/images/collapsed-menu.png" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}