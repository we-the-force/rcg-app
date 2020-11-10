import React, { Component } from "react";
import marked from "marked";
import image from "@/static/imgs/av_priv.png";
import city from "@/static/imgs/city.png";
import Logo from "@/static/imgs/Logo_negro.png";
import JsxParser from "react-jsx-parser";
import { Block, Card, BlockHeader, BlockFooter, f7 } from "framework7-react";

export function formatText(x) {
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
		//this.avisoPrivacidad = marked(props.avisoPriv.descripcion == null ? "" : props.avisoPriv.descripcion);
	}
	render() {
		let { avisoPriv } = this.props;
		let result = formatText(avisoPriv.descripcion);
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
							<JsxParser
								components={{ Block }}
								jsx={`
                                    <div className="markdown">
                                    ${result}
                                    </div>`}
							/>
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
