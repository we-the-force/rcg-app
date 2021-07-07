import React, { Component } from "react";
import marked from "marked";
import image from "@/static/imgs/av_priv.png";
import city from "@/static/imgs/city.png";
import JsxParser from "react-jsx-parser";
import parse from "html-react-parser";
import { Block, Card, BlockHeader, f7 } from "framework7-react";

// export function formatText(x) {
// 	const DB_url = f7.methods.get_URL_DB();
// 	let value = marked(x);
// 	let frameProp = /<iframe([^>]*)(frameborder="([^"])")([^>]*)>/gi;
// 	let fullScreenProp = /<iframe([^>]*)(allowfullscreen)([^>]*)>/gi;
// 	let strokeProp = /stroke-width/gi;
// 	let fillRuleProp = /fill-rule/gi;
// 	let dateTimeProp = /datetime/gi;
// 	let titleTag = /(<h([1-6])([^>]*)>)/gi;
// 	let brTag = /<br>/gi;
// 	let parrafoTag = /(<p ([^>]*)>)/gi;
// 	let listTag = /(<li([^>]*)>)/gi;
// 	let listChildTag = /<(ol|ul)([^>]*)>/gi;
// 	let xmlnsLink = /xmlns:xlink="([^"]*)"/gi;
// 	let xmlnsHref = /xlink:href="([^"]*)"/gi;
// 	let anchorTag = /(<a([^>]*)>)/gi;
// 	let imgTag = /(<p [^>]*>)([^<]*)<img\s*([^>]*)\s*src=["'`]([^"`']+)["`']\s*([^>]*)(\/?>)(<\/p>)/gi;
// 	let NotTags = /<(?!\/?(p|h([1-6])|li|ol|ul|a|iframe|blockquote|b|img|div|u|br|cite|del|i|strong|time|g|path|svg)(?=>|\s.*>))\/?.*?>/gi;
// 	value = value.replace(titleTag, '<h$2 className="child titulo">');
// 	value = value.replace(parrafoTag, '<p className="child parrafo">');
// 	value = value.replace(frameProp, '<iframe $1 frameBorder="$3" $4>');
// 	value = value.replace(strokeProp, "strokeWidth");
// 	value = value.replace(fillRuleProp, "fillRule");
// 	value = value.replace(dateTimeProp, "dateTime");
// 	value = value.replace(fullScreenProp, "<iframe $1 allowFullScreen $3>");
// 	value = value.replace(listChildTag, '<$1 className="child">');
// 	value = value.replace(brTag, "<br/>");
// 	value = value.replace(NotTags, "");
// 	value = value.replace(xmlnsLink, 'xmlnsXlink="$1"');
// 	value = value.replace(xmlnsHref, 'xmlnsHref="$1"');
// 	value = value.replace(listTag, '<li $2 className="parrafo">');
// 	value = value.replace(anchorTag, '<a $2 className="link external" target="_blank">');
// 	value = value.replace(imgTag, `<div className="imagen_cont child">$2<img $3 src="${DB_url}$4" $5 /></div>`);
// 	return value;
// }

export default class AboutUsPanel extends Component {
	constructor(props) {
		super(props);
		//this.avisoPrivacidad = marked(props.avisoPriv.descripcion == null ? "" : props.avisoPriv.descripcion);
	}
	componentDidMount() {
		// FB.XFBML.parse();
	}
	componentDidUpdate() {
		// twttr.widgets.load();
		// window.instgrm.Embeds.process();
	}
	render() {
		let { avisoPriv } = this.props;
		// let result = formatText(avisoPriv.descripcion);
		return (
			<Block className="center_panel av_priv_panel">
				<Card>
					<Block className="back">
						<BlockHeader>
							<h1>Aviso de privacidad</h1>
							<div className="img_cont">
								<img src={image} alt="" />
							</div>
						</BlockHeader>
						<div className="content">
							{parse(avisoPriv.descripcion)}
							{/* <JsxParser
								components={{ Block }}
								jsx={`
                                    <div className="markdown">
                                    ${result}
                                    </div>`}
							/> */}
						</div>
						<img className="city" src={city} alt="" />
						<div className="logo_cont">
							<img src={this.props.logo} alt="" />
						</div>
					</Block>
				</Card>
			</Block>
		);
	}
}
