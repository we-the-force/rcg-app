import React, { useState } from "react";
import IMG from "@/static/imgs/grayback.jpg";
import TestImage from "@/static/imgs/grayback.jpg";
import moment from "moment";
import marked from "marked";

import { Block, Link, f7, BlockFooter } from "framework7-react";

// ano natsu no, kimi ga atama ni iru
export default function NewsRelevantes(props) {
	moment.locale("es");

	const dev = f7.device;
	let areMobile = dev.android || dev.ios || dev.iphone || dev.ipod || dev.cordova;

	let { className, id, noticia, size } = props;
	let skeleton = noticia ? "" : "skeleton-text";
	const [modal, setModal] = useState("");
	let DB_url = f7.methods.get_URL_DB();
	let imagen, categoria, content, Titulo, fecha, url;
	if (noticia) {
		imagen = IMG;
		categoria = noticia.categoria ? noticia.categoria.nombre : "";
		content = noticia.Sumario;
		Titulo = noticia.Titulo;
		fecha = moment(noticia.fecha);
		url = `/articulo/${noticia.url}/`;

		if (noticia.cover) {
			if (noticia.cover.formats) {
				if (areMobile) {
					if ((size == 2 || size == 0) && noticia.cover.formats.small) {
						imagen = DB_url + noticia.cover.formats.small.url;
					} else if (size == 1 && noticia.cover.formats.xxsmall) {
						imagen = DB_url + noticia.cover.formats.xxsmall.url;
					}else {
						imagen = DB_url + noticia.cover.url;
					}
				}else{
					if(size == 0 && noticia.cover.formats.medium) {
						imagen = DB_url + noticia.cover.formats.medium.url;
					}else if((size == 1 || size == 2) && noticia.cover.formats.xxsmall){
						imagen = DB_url + noticia.cover.formats.xxsmall.url;
					}else if(size == 3 && noticia.cover.formats.xsmall){
						imagen = DB_url + noticia.cover.formats.xsmall.url;
					}else if(size == 4 && noticia.cover.formats.thumbnail){
						imagen = DB_url + noticia.cover.formats.thumbnail.url;
					}else if(size == 4 && noticia.cover.formats.xxsmall){
						imagen = DB_url + noticia.cover.formats.xxsmall.url;
					}else {
						imagen = DB_url + noticia.cover.url;
					}
				}
			} else {
				cover = DB_url + noticia.cover.url;
			}
		}
	} else {
		imagen = TestImage;
		categoria = "categ";
		content =
			"Torem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat mauris et tellus faucibus bibendum. Ut egestas aliquam facilisis. Aliquam tristique libero ut sapien consequat imperdiet. Sed ut auctor dolor. In iaculis ligula eu nisl laoreet, quis suscipit urna gravida. Ut nunc elit, imperdiet nec lorem commodo, lacinia mattis libero. Pellentesque fringilla purus nunc, ut semper nibh placerat ut. In euismod fermentum eros. Mauris nec sodales dui.";
		Titulo = "Titulo";
		fecha = moment(new Date());
		url = "#";
	}
	return (
		<Block className={`NewsRel_Cont ${className} ${modal}`} id={id}>
			<a href={url}>
				<img src={imagen} alt="" />
			</a>
			<Block className={`top-cont`}>
				<Link href={"/categoria/" + categoria} className={"categoria upperscale " + skeleton}>
					{categoria}
				</Link>
			</Block>
			<Block className={`add`}>
				<a className="link-target" href={url} />
				<Link
					iconMaterial="add"
					onClick={() => {
						setModal(modal == "" ? "modal-in" : "");
					}}
				/>
				<Block className={`content`}>
					<p className={skeleton}>{content}</p>
				</Block>
			</Block>
			<Block className={`bottom-cont`}>
				<Link className={"title " + skeleton} href={url}>
					{Titulo}
				</Link>
				<BlockFooter>
					<p className={"fecha " + skeleton}>{fecha.format("D MMMM")}</p>
				</BlockFooter>
			</Block>
		</Block>
	);
}
