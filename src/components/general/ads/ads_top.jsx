import React, { Component } from "react";
import { Card, Block } from "framework7-react";
import uane from "../../../static/imgs/uane.gif"

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
						<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
						{/* <ins
							className="adsbygoogle"
							style={{display: 'block',height: '100%'}}
							data-ad-client="ca-pub-5946382133965347"
							data-ad-slot="7621123541"
							data-ad-format="auto"
							data-full-width-responsive="true"
						></ins> */}
						<img src={uane} alt="" style={{
							width: '100%',
							height: 'auto'
						}}/>
						<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
					</Block>
				</Block>
				<Block className="right"></Block>
			</Block>
		);
	}
}
