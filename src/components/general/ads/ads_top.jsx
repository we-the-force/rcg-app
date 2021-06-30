import React, { Component } from "react";
import { Block, Link } from "framework7-react";
import {Adsense} from '@ctrl/react-adsense';
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
					<Adsense
						client="ca-pub-9419050468962974"
						slot="2504924643"
					/>
					<Block className="ads top">
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
