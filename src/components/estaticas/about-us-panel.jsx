import React, { Component } from "react";
import marked from "marked";
import city from "@/static/imgs/city.png";
import cityB from "@/static/imgs/city_black.png";
import Logo from "@/static/imgs/Logo_negro.png";
import LogoBlanco from "@/static/imgs/Logo_blanco.png";
import back_head from "@/static/imgs/card_back_6.png";
import JsxParser from "react-jsx-parser";
import { Block, Card, CardHeader, f7 } from "framework7-react";

function formatText(x) {
	const DB_url = f7.methods.get_URL_DB();
	let value = marked(x);
	let titleTag = /(<h([1-6])([^>]*)>)/gi;
	let parrafoTag = /(<p([^>]*)>)/gi;
	let codeTag = /(<\/?code([^>]*)>)/gi;
	let listTag = /(<li([^>]*)>)/gi;
	let listChildTag = /<(ol|ul)([^>]*)>/gi;
	let anchorTag = /(<a([^>]*)>)/gi;
	let quoteTag = /<blockquote([^>]*)>/gi;
	let imgTag = /(<p[^>]*>)([^<]*)<img\s*([^>]*)\s*src=["'`]([^"`']+)["`']\s*([^>]*)(\/?>)(<\/p>)/gi;
	value = value.replace(titleTag, '<h$2 className="child titulo">');
	value = value.replace(parrafoTag, '<p className="child parrafo">');
	value = value.replace(codeTag, "");
	value = value.replace(listChildTag, '<$1 className="child">');
	value = value.replace(quoteTag, '<blockquote $1 className="child">');
	value = value.replace(listTag, '<li $2 className="parrafo">');
	value = value.replace(anchorTag, '<a $2 className="link external" target="_blank">');
	value = value.replace(imgTag, `<div className="imagen_cont child">$2<img $3 src="${DB_url}$4" $5 /></div>`);
	value = value.replace(/\n/gi, ``);
	return value;
}

export default class AboutUsPanel extends Component {
	constructor(props) {
		super(props);
		//this.descripcion = marked(props.nosotrosInfo.descripcion == null ? "" : props.nosotrosInfo.descripcion);
		//this.middleText = marked(props.nosotrosInfo.info_mid == null ? "" : props.nosotrosInfo.info_mid);
		//this.bottomText = marked(props.nosotrosInfo.info_bottom == null ? "" : props.nosotrosInfo.info_bottom);
	}
	render() {
		let { nosotrosInfo } = this.props;
		let desc = formatText(nosotrosInfo.descripcion);
		let blockquote = "<blockquote><p>";
		let middle = blockquote.concat(nosotrosInfo.info_mid, "</p></blockquote>");
		let bottom = formatText(nosotrosInfo.info_bottom);
		return (
			<Block className="center_panel nosotros_panel">
				<Card className="new_head">
					<CardHeader>Nosotros</CardHeader>
					<div className="head_logo">
						<img src={back_head} alt="" />
					</div>
				</Card>
				<Card className="city">
					<Block className="back">
						<div className="logo_cont">
							<img className="light" src={this.props.logo} alt="" />
							<img className="dark" src={this.props.logoD} alt="" />
						</div>
						<JsxParser
							components={{ Block }}
							jsx={`<div className="markdown">
                                ${desc}
                            </div>`}
						/>
						<img className="cityImg light" src={city} alt="" />
						<img className="cityImg dark" src={cityB} alt="" />
					</Block>
				</Card>
				<JsxParser
					components={{ Block }}
					jsx={`<div className="markdown">
                            ${middle}
                        </div>`}
				/>
				<Card className="bottom">
					<Block className="back">
						<JsxParser
							components={{ Block }}
							jsx={`<div className="markdown">
                            ${bottom}
                        </div>`}
						/>
						<div className="logo_cont">
							<img className="light" src={this.props.logo} alt="" />
							<img className="dark" src={this.props.logoD} alt="" />
						</div>
					</Block>
				</Card>
			</Block>
		);
	}
}
