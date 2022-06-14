import React from 'react';

const LandingFooter = () => {

	return (
		<>
			<div className='landing-footer'>
				<div className='landing-content'>
					<p className='footer-text1 text-center py-10 w-4/5 mx-auto'>
						Our community grows stronger every day. Please follow our social platforms to get the
						most up-to-date, accurate information.
					</p>
					<p className='footer-text2 text-center pb-5'>
						Using the links below, you can join our various groups.
					</p>
					<div className='social-icons flex justify-around'>
						<div className='social-medium flex flex-col items-center'>
							<img src='/images/landingpage/medium.png' width="100px" className='block' />
							<p className='text-center'>Medium</p>
						</div>
						<div className='social-bsc flex flex-col items-center'>
							<img src='/images/landingpage/bsc.png' width="100px" className='block p-2' />
							<p className='text-center'>BSCScan</p>
						</div>
					</div>
					<div className='footer-bottom-text py-5 text-center'>
						Copyright © 2022 — VictoryCashCoin . | ALL RIGHTS RESERVED
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingFooter;