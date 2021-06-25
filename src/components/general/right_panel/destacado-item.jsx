import React, { Component, Fragment } from "react";
import marked from "marked";
import moment from "moment";
import IMG from '@/static/imgs/grayback.jpg';
import { Block, BlockHeader, BlockTitle, BlockFooter, Link, f7 } from "framework7-react";
import { getDevice } from "framework7";

export default function DestItem(props) {
	moment.locale("es");
	
	console.log(f7.device);

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


	let imgn = IMG;
    if (cover) {
        let newUrl = cover.url.split("/");
        //cambiar a xs
        imgn = cover.width > 500 ? DB_url + newUrl[0] + "/" + newUrl[1] + "/small_" + newUrl[2] : DB_url + cover.url;
    }
	// let imgn = cover ? DB_url + cover.url : IMG;
	return (
		<Block className={"dest-item"}>
			{props.image && (
				<Link popupClose href={`/articulo/${url}/`} className="img_cont">
					<img src={imgn} alt="" />
				</Link>
			)}
			<Block className="dest-cont">
				{/* <BlockHeader>
					<Link popupClose className="autor" href={autor ? `/autor/${autor.url}` : '/autores'}>
						{autor ? autor.nombre : 'Ain Autor'}
					</Link>
					&nbsp;-&nbsp;
					<p className="fecha">{moment(fecha).format("D MMMM")}</p>
				</BlockHeader> */}
				<BlockTitle>
					<Link popupClose href={`/articulo/${url}/`}>
						{Titulo}
					</Link>
				</BlockTitle>
				{/* <p className="cont">{newDesc}</p>
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
				</BlockFooter> */}
			</Block>
		</Block>
	);
}
