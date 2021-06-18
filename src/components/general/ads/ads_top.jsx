import React, { Component, useEffect } from "react";
import { Card, Block, Link } from "framework7-react";
import uane from "../../../static/imgs/uane.gif";



export default function adsTop(props) {
	
	useEffect(() => {
			window.adsbygoogle = window.adsbygoogle || []
			window.adsbygoogle.push({})
	});
	
		
		return (
			<Block className="ads_cont">
				<Block className="left"></Block>
				<Block className="center">
					<Block className="ads">
						{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
						{/* <ins
							className="adsbygoogle"
							style={{display: 'block',height: '100%'}}
							data-ad-client="ca-pub-5946382133965347"
							data-ad-slot="7621123541"
							data-ad-format="auto"
							data-full-width-responsive="true"
						></ins> */}
						<ins className="adsbygoogle"
										style={{display: 'block'}}
										data-ad-client="ca-pub-9419050468962974"
										data-ad-slot="2504924643"
										data-ad-format="auto"
										data-adtest="on"
										data-full-width-responsive="true"></ins>
						
						<Link href="https://www.uane.edu.mx/campus/saltillo" target="_blank" external>
						<img src={uane} alt="" style={{
							width: '100%',
							height: 'auto'
						}}/>
						</Link>
						
						{/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
					</Block>
				</Block>
				<Block className="right"></Block>
			</Block>
		);
	
}
