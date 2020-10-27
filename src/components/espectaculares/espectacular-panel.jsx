import React, { Component } from "react";
import Portada from "@/static/imgs/Espectaculares-Portada 1.png";
import marked from "marked";
import JsxParser from "react-jsx-parser";
import { Block, Card, BlockHeader, f7 } from "framework7-react";

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

export default function EspectacularPanel(props) {
	const { info, clientes } = props;
	let DB_url = f7.methods.get_URL_DB();
	let nosotrosImagen = info.NosotrosImagen ? DB_url + info.NosotrosImagen.url : "/static/icons/image_x2.png";
	let porqueNosotrosImagen = info.PorqueNosotrosImagen ? DB_url + info.PorqueNosotrosImagen.url : "/static/icons/image_x2.png";
	let nosotros = formatText(info.nosotros);
	let porque_nosotros = formatText(info.porque_nosotros);
	return (
		<Block className="center_panel espectacular_panel">
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
				<img src={Portada} alt="" />
			</div>
		</Block>
	);
}
