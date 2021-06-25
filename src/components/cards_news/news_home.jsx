import React, { Fragment, useEffect, useState } from "react";
import IMG from '@/static/imgs/grayback.jpg';
import moment from "moment";
import { Block, Link, BlockFooter, f7 } from "framework7-react";
import { getDevice } from "framework7";

// ano natsu no, kimi ga atama ni iru
export default function NewsHome(props) {
	moment.locale("es");

	const device = getDevice();
	console.log(device);

	const { className, articulo, first } = props;
	let DB_url = f7.methods.get_URL_DB();
	let cover = IMG;
	if(articulo.cover){
		let newUrl = articulo.cover.url.split("/");
		if(first){
			cover = articulo.cover.width > 750 ? DB_url + newUrl[0] + "/" + newUrl[1] + "/medium_" + newUrl[2] : DB_url + articulo.cover.url;
		}else{
			cover = articulo.cover.width > 500 ? DB_url + newUrl[0] + "/" + newUrl[1] + "/small_" + newUrl[2] : DB_url + articulo.cover.url;
		}
	}

	// let cover = articulo.cover ? DB_url + articulo.cover.url : IMG;

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
