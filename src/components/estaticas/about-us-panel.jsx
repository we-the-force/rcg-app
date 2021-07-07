import React, { Component } from "react";
import marked from "marked";
import city from "@/static/imgs/city.png";
import cityB from "@/static/imgs/city_black.png";
import back_head from "@/static/imgs/card_back_6.png";
import JsxParser from "react-jsx-parser";
import parse from "html-react-parser";
import { Block, Card, CardHeader, f7 } from "framework7-react";

function formatText(x) {
	const DB_url = f7.methods.get_URL_DB();
	let value = marked(x);
	let frameProp = /<iframe([^>]*)(frameborder="([^"])")([^>]*)>/gi;
	let fullScreenProp = /<iframe([^>]*)(allowfullscreen)([^>]*)>/gi;
	let strokeProp = /stroke-width/gi;
	let fillRuleProp = /fill-rule/gi;
	let dateTimeProp = /datetime/gi;
	let titleTag = /(<h([1-6])([^>]*)>)/gi;
	let brTag = /<br>/gi;
	let parrafoTag = /(<p ([^>]*)>)/gi;
	let listTag = /(<li([^>]*)>)/gi;
	let listChildTag = /<(ol|ul)([^>]*)>/gi;
	let xmlnsLink = /xmlns:xlink="([^"]*)"/gi;
	let xmlnsHref = /xlink:href="([^"]*)"/gi;
	let anchorTag = /(<a([^>]*)>)/gi;
	let imgTag = /(<p [^>]*>)([^<]*)<img\s*([^>]*)\s*src=["'`]([^"`']+)["`']\s*([^>]*)(\/?>)(<\/p>)/gi;
	let NotTags = /<(?!\/?(p|h([1-6])|li|ol|ul|a|iframe|blockquote|b|img|div|u|br|cite|del|i|strong|time|g|path|svg)(?=>|\s.*>))\/?.*?>/gi;
	value = value.replace(titleTag, '<h$2 className="child titulo">');
	value = value.replace(parrafoTag, '<p className="child parrafo">');
	value = value.replace(frameProp, '<iframe $1 frameBorder="$3" $4>');
	value = value.replace(strokeProp, "strokeWidth");
	value = value.replace(fillRuleProp, "fillRule");
	value = value.replace(dateTimeProp, "dateTime");
	value = value.replace(fullScreenProp, "<iframe $1 allowFullScreen $3>");
	value = value.replace(listChildTag, '<$1 className="child">');
	value = value.replace(brTag, "<br/>");
	value = value.replace(NotTags, "");
	value = value.replace(xmlnsLink, 'xmlnsXlink="$1"');
	value = value.replace(xmlnsHref, 'xmlnsHref="$1"');
	value = value.replace(listTag, '<li $2 className="parrafo">');
	value = value.replace(anchorTag, '<a $2 className="link external" target="_blank">');
	value = value.replace(imgTag, `<div className="imagen_cont child">$2<img $3 src="${DB_url}$4" $5 /></div>`);
	return value;
}

export default class AboutUsPanel extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// FB.XFBML.parse();
	}
	componentDidUpdate() {
		// twttr.widgets.load();
		// window.instgrm.Embeds.process();
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
						{/* <JsxParser
							components={{ Block }}
							jsx={`<div className="markdown">
                                ${desc}
                            </div>`}
						/> */}
						{parse(nosotrosInfo.descripcion)}
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
						{/* <JsxParser
							components={{ Block }}
							jsx={`<div className="markdown">
                            ${bottom}
                        </div>`}
						/> */}
						{parse(nosotrosInfo.info_bottom)}
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
