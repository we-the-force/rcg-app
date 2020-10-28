import React, { Component } from "react";
import { Card, Block } from "framework7-react";

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
						<ins
							class="adsbygoogle"
							style="display:block"
							data-ad-client="ca-pub-5946382133965347"
							data-ad-slot="7621123541"
							data-ad-format="auto"
							data-full-width-responsive="true"
						></ins>
						<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
					</Block>
				</Block>
				<Block className="right"></Block>
			</Block>
		);
	}
}
