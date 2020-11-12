import React, { Component, Fragment } from "react";
import marked from "marked";
import moment from "moment";
import IMG from "@/static/imgs/IMG_01.png";
import { Block, BlockHeader, BlockTitle, BlockFooter, Link, f7 } from "framework7-react";

export default function DestItem(props) {
	moment.locale("es");
	const { description, cover, autor, fecha, Titulo, tags, url } = props.articulo;
	let DB_url = f7.methods.get_URL_DB();
	let newDesc = marked(description);
	let titlesRegEx = /(<h([^>]+)>[^<]*<\/h([^>]+)>)/gi;
	let otherTags = /(<([^>]+)>)/gi;
	newDesc = newDesc
		.replace(titlesRegEx, "")
		.replace(otherTags, "")
		.replace(/\n/gi, " ")
		.match(/^.{0,300}/gi);
	return (
		<Block className={"dest-item"}>
			{props.image && (
				<Link popupClose href={`/articulo/${url}/`} className="img_cont">
					<img src={DB_url + cover.url} alt="" />
				</Link>
			)}
			<Block className="dest-cont">
				<BlockHeader>
					<Link popupClose className="autor" href={`/autor/${autor.url}`}>
						{autor.nombre}
					</Link>
					&nbsp;-&nbsp;
					<p className="fecha">{moment(fecha).format("D MMMM")}</p>
				</BlockHeader>
				<BlockTitle>{Titulo}</BlockTitle>
				<p className="cont">{newDesc}</p>
				<BlockFooter className="display-flex justify-content-space-between">
					<p className="tag">
						Tags&nbsp;
						{tags.map((tag, i) => {
							let isLastPos = !(i < tags.length - 1);
							if (isLastPos) {
								return (
									<Link popupClose href={`/busqueda/${tag.nombre}`} className="etiqueta" key={i}>
										{tag.nombre}
									</Link>
								);
							} else {
								return (
									<Fragment key={i}>
										<Link popupClose href={`/busqueda/${tag.nombre}`} className="etiqueta">
											{tag.nombre}
										</Link>
										,{" "}
									</Fragment>
								);
							}
						})}
					</p>
					<Link popupClose className="more" href={`/articulo/${url}/`}>
						Mostrar más
					</Link>
				</BlockFooter>
			</Block>
		</Block>
	);
}
