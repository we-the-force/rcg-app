import React, { Component } from "react";
import Portada from "@/static/imgs/Espectaculares-Portada 1.png";
import PortadaDark from "@/static/imgs/Espectaculares-Portada 2.png";
import marked from "marked";
import JsxParser from "react-jsx-parser";
import { Block, Card, BlockHeader, Link, f7 } from "framework7-react";

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

export default class EspectacularPanel extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		FB.XFBML.parse();
	}
	componentDidUpdate() {
		twttr.widgets.load();
		window.instgrm.Embeds.process();
	}
	render() {
		const { info, clientes } = this.props;
		let DB_url = f7.methods.get_URL_DB();
		let nosotrosImagen = info.NosotrosImagen ? DB_url + info.NosotrosImagen.url : "/static/icons/image_x2.png";
		let porqueNosotrosImagen = info.PorqueNosotrosImagen ? DB_url + info.PorqueNosotrosImagen.url : "/static/icons/image_x2.png";
		let nosotros = formatText(info.nosotros);
		let porque_nosotros = formatText(info.porque_nosotros);
		return (
			<Block className="center_panel espectacular_panel">
				<Card className="new_head espectaculares_menu">
					<Link href="/" className="uppercase">
						Inicio
					</Link>
					<hr />
					<Link href="/catalogo" className="uppercase">
						Galería
					</Link>
					<hr />
					<Link href="/contacto" className="uppercase">
						Contacto
					</Link>
				</Card>
				<Card>
					<Block className="back">
						<BlockHeader>
							<h2>Nosotros</h2>
						</BlockHeader>
						<div className="content">
							<JsxParser
								components={{ Block }}
								jsx={`<div className="markdown">
                            ${nosotros}
                        </div>`}
							/>
						</div>
						<div className="img_cont">
							<img src={nosotrosImagen} alt="" />
						</div>
					</Block>
				</Card>
				<Card>
					<Block className="back">
						<BlockHeader>
							<h2>¿Por qué nosotros?</h2>
						</BlockHeader>
						<div className="content">
							<JsxParser
								components={{ Block }}
								jsx={`<div className="markdown">
                            ${porque_nosotros}
                        </div>`}
							/>
						</div>
						<div className="img_cont">
							<img src={porqueNosotrosImagen} alt="" />
						</div>
					</Block>
				</Card>
				<Card className="clientes">
					<Block className="back">
						<BlockHeader>
							<h2>nuestros clientes</h2>
						</BlockHeader>
						<Block className="content">
							{clientes.map((cliente, key) => {
								let clienteUrl = cliente.logo ? DB_url + cliente.logo.url : "/static/icons/image_x2.png";
								return (
									<div className="img_cont" key={key}>
										<img src={clienteUrl} alt="" />
									</div>
								);
							})}
						</Block>
					</Block>
				</Card>
				<div className="portada_cont">
					<img className="light" src={Portada} alt="" />
					<img className="dark" src={PortadaDark} alt="" />
					<img className="logo light" src={this.props.logo} alt="" />
					<img className="logo dark" src={this.props.logoD} alt="" />
				</div>
			</Block>
		);
	}
}
