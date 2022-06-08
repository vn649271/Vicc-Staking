import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

export default function NavMenuBar() {

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

	return (
		<nav>
			<div className="flex justify-between items-center">
				<div className="logo-layout">
					<img src="/images/logo-small.png" alt="" />
				</div>
				{(toggleMenu || screenWidth > 768) && (
					<ul className={`nav-menu-list ${toggleMenu ? "with-bg-color" : ""}`}>
						<li id="menu-item-home" className={`items ${selectedMenuItem} == 'home'? 'active': ''`} onClick={onSelectMenuItem}>Home</li>
						<li id="menu-item-about" className={`items ${selectedMenuItem} == 'about'? 'active': ''`} onClick={onSelectMenuItem}>About</li>
						<li id="menu-item-stake" className={`items ${selectedMenuItem} == 'stake'? 'active': ''`} onClick={onSelectMenuItem}>Stake</li>
						<li id="menu-item-tokenomics" className={`items ${selectedMenuItem} == 'tokenomics'? 'active': ''`} onClick={onSelectMenuItem}>Tokenomics</li>
						<li id="menu-item-roadmap" className={`items ${selectedMenuItem} == 'roadmap'? 'active': ''`} onClick={onSelectMenuItem}>Roadmap</li>
						<li id="menu-item-contactus" className={`items ${selectedMenuItem} == 'contactus'? 'active': ''`} onClick={onSelectMenuItem}>Contact Us</li>
					</ul>
				)}
				<div className='flex items-center'>
					<span className='presale-button'>
						Join Presale
					</span>
					<div className="toggle-nav-btn-layout lg:hidden md:flex">
						<button onClick={toggleNav} className="btn">
							<img className="collapsed-menu-btn-img-layout" src="/images/collapsed-menu.png" alt="" />
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}