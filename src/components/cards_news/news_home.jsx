import React, { Fragment, useEffect, useState } from "react";
import IMG from '@/static/imgs/grayback.jpg';
import moment from "moment";
// import marked from "marked";
// import parse from 'html-react-parser';

import { Block, Link, BlockFooter, f7 } from "framework7-react";

// ano natsu no, kimi ga atama ni iru
export default function NewsHome(props) {
	moment.locale("es");
	const { className, articulo } = props;
	let DB_url = f7.methods.get_URL_DB();
	// let newDesc = marked(articulo.description);
	let titlesRegEx = /(<h([^>]+)>[^<]*<\/h([^>]+)>)/gi;
	let otherTags = /(<([^>]+)>)/gi;
	// newDesc = newDesc
	// 	.replace(titlesRegEx, "")
	// 	.replace(otherTags, "")
	// 	.replace(/\n/gi, " ")
	// 	.match(/^.{0,300}/gi);
	console.log(articulo.cover);
	console.log(articulo.cover ? articulo.cover.url : "");
	let cover = articulo.cover ? DB_url + articulo.cover.url : IMG;

	return (
		<Block className={`NewsHome_cont ${className}`}>
			<Block className="img_cont">
				<Link href={`/articulo/${articulo.url}/`}>
					<img src={cover} alt="" />
				</Link>
			</Block>
			<Block className="img_foot">
				<Link href={articulo.autor ? `/autor/${articulo.autor.url}` : '/autores'} className="autor">{articulo.autor ? articulo.autor.nombre : 'Sin Autor'}</Link>&nbsp;-&nbsp;
				<p className="fecha">{moment(articulo.fecha).format("D MMMM")}</p>
			</Block>
			<Block className="content">
				<Link className="title" href={`/articulo/${articulo.url}/`}>
					{articulo.Titulo}
				</Link>
				{/* <p className="preview">{newDesc}</p> */}
			</Block>
		</Block>
	);
}
