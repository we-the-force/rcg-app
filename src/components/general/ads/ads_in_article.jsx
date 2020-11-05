import React, { Component } from "react";
import { Card, Block } from "framework7-react";

export default class adsInArticle extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<Block className={`ads inArticle ${this.props.className}`}>
				{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
				<ins
					class="adsbygoogle"
					style="display:block; text-align:center;"
					data-ad-layout="in-article"
					data-ad-format="fluid"
					data-ad-client="ca-pub-5946382133965347"
					data-ad-slot="7267654347"
				></ins>
				<script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
			</Block>
		);
	}
}
