import React, { Component } from "react";
import { Card, Block, Link } from "framework7-react";
import uane from "../../../static/imgs/uane.gif";

import GoogleAdsense from 'react-adsense-google';

export default class adsTop extends Component {
	constructor() {
		super();
		this.state = {};
	}
	
	render() {
		
		return (
			<Block className="ads_cont">
				<Block className="left"></Block>
				<Block className="center">
					<Block className="ads">
						
						<GoogleAdsense
							adClient='ca-pub-9419050468962974'
							adSlot='2504924643'
							style={{'display': 'block', 'text-align': 'center'}}
							adLayout='in-article'
							adFormat='fluid'
							fullWidthResponsive='true'
						/>
						
						{/* <ins className="adsbygoogle"
										style={{display: 'block'}}
										data-ad-client="ca-pub-9419050468962974"
										data-ad-slot="2504924643"
										data-ad-format="auto"
										data-adtest="on"
										data-full-width-responsive="true"></ins> */}
						
						<Link href="https://www.uane.edu.mx/campus/saltillo" target="_blank" external>
						<img src={uane} alt="" style={{
							width: '100%',
							height: 'auto'
						}}/>
						</Link>
						
					</Block>
				</Block>
				<Block className="right"></Block>
			</Block>
		);
	}
}
